//Random color
function getColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function genColors() {
  var colors = [];
  for (var i = 10; i < 99; i++) {
    var color = getColor();
    colors[i] = color;
  }
  return colors;
}

// Make a function headBodyColor with a color and code as arguments
function headBodyColor(color, code) {
  // Change the head and body background color of the dragon
  $("#head, #body").css("background", "#" + color);
  // Modifies the headBodyCode id with the code in the slider
  $("#headBodyCode").html("code: " + code);
  // Modifies the headBodyDna id with the code
  $("#headBodyDna").html(code);
}

// Make a function wingsTailColor with a color and code as arguments
function wingsTailColor(color, code) {
  // Change the wings border left color of the dragon
  $(".wings").css("border-left-color", "#" + color);
  // Change the tail background color of the dragon
  $(".tail").css("background", "#" + color);
  // Change the tail end border left color of the dragon
  $(".tailEnd1, .tailEnd2").css("border-left-color", "#" + color);
  // Modifies the wingsTailCode id with the code in the slider
  $("#wingsTailCode").html("code: " + code);
  // Modifies the wingsTailDna id with the code
  $("#wingsTailDna").html(code);
}

// Make a function eyesColor with a color and code as arguments
function eyesColor(color, code) {
  // Change the pupils background color
  $(".pupils").css("background", "#" + color);
  // Modifies eyesCode with the code in the slider
  $("#eyesCode").html("code: " + code);
  // Modifies the eyesDna id with the code
  $("#eyesDna").html(code);
}

// Make a function legsArmsColor with a color and code as arguments
function legsArmsColor(color, code) {
  // Change the legs and arms background color
  $(".legs, .feet, .arms").css("background", "#" + color)
  // Modifies the legsArmsCode with the code in the slider
  $("#legsArmsCode").html("code: " + code);
  // Modifies the legsArmsDna with the code
  $("#legsArmsDna").html(code);
}

function eyeVariation(shapeNum) {

  $("#dnashape").html(shapeNum);
  // if the shape number
  switch (shapeNum) {
    // is case 1
    case 1:
      // Resets the eyes
      originalEyes();
      // Sets the badge to basic
      $("#eyesName").html("Original");
      break
    // if it is case 2
    case 2:
      // Resets the eyes
      originalEyes();
      // Sets the badge to looking up
      $("#eyesName").html("Happy");
      // Sets border to change the shape of the eyes
      eyesTypeHappy();
      break
    case 3:
      originalEyes();
      $("#eyesName").html("Round");
      eyesTypeRound();
      break
    case 4:
      originalEyes();
      $("#eyesName").html("Pointy");
      eyesTypePointy();
      break
    case 5:
      originalEyes();
      $("#eyesName").html("Horizontal");
      eyesTypeHorizontal();
      break
    case 6:
      originalEyes();
      $("#eyesName").html("Moon-shape");
      eyesTypeMoon();
      break
    case 7:
      originalEyes();
      $("#eyesName").html("Relaxed");
      eyesTypeRelaxed();
      break

  }
}

function decorationVariation(num) {
  $("#dnadecoration").html(num);
  switch (num) {
    case 1:
      $("#decorationName").html("Basic");
      normaldecoration();
      break
  }
}

function originalEyes() {
  $(".eyes").css("border", "none");
  $(".pupils").css("border", "none");
  $(".innerPupils").css("box-shadow", "2px 4px 3px -1px black");
  $(".innerPupils").css("top", "6px");
  $(".innerPupils").css("left", "8px");
  $(".innerPupils").css("width", "15px");
  $(".innerPupils").css("height", "15px");
  $(".innerPupils").css("transform", "rotate(160deg)");
  $(".pupils").css("transform", "rotate(57deg)");
  $(".pupils").css("top", "8px");
  $(".pupils").css("left", "1px");
}

function eyesTypeHappy() {
  $(".pupils").css("transform", "rotate(244deg)");
  $(".pupils").css("top", "8px");
  $(".pupils").css("left", "1px");
}

function eyesTypeRound() {
  $(".innerPupils").css("box-shadow", "inset 20px 20px black");
  $(".innerPupils").css("top", "4px");
  $(".innerPupils").css("left", "7px");
}

function eyesTypePointy() {
  $(".innerPupils").css("box-shadow", "inset 20px 20px black");
  $(".innerPupils").css("top", "1px");
  $(".innerPupils").css("left", "12px");
  $(".innerPupils").css("width", "6px");
  $(".innerPupils").css("height", "21px");
  $(".innerPupils").css("transform", "rotate(129deg)");
}

function eyesTypeHorizontal() {
  $(".innerPupils").css("box-shadow", "inset 20px 20px black");
  $(".innerPupils").css("top", "1px");
  $(".innerPupils").css("left", "11px");
  $(".innerPupils").css("width", "6px");
  $(".innerPupils").css("height", "21px");
  $(".innerPupils").css("transform", "rotate(44deg)");
}

function eyesTypeMoon() {
  $(".innerPupils").css("box-shadow", "2px 4px 3px -1px black");
  $(".innerPupils").css("top", "10px");
  $(".innerPupils").css("left", "2px");
  $(".innerPupils").css("width", "20px");
  $(".innerPupils").css("height", "11px");
  $(".innerPupils").css("transform", "rotate(225deg)");
}

function eyesTypeRelaxed() {
  $(".pupils").css("border-bottom", "10px solid");
  $(".eyes").css("border-bottom", "20px solid");
  $(".pupils").css("transform", "rotate(22deg)");
  $(".pupils").css("left", "2px");
  $(".innerPupils").css("transform", "rotate(192deg)");
  $(".innerPupils").css("box-shadow", "inset black -2px -6px 0px -3px");
}

function normaldecoration() {
  //Remove all style from other decorations
  //In this way we can also use normalDecoration() to reset the decoration style
  $('.cat__head-dots').css({
    "transform": "rotate(0deg)",
    "height": "48px",
    "width": "14px",
    "top": "1px",
    "border-radius": "0 0 50% 50%"
  });
  $('.cat__head-dots_first').css({
    "transform": "rotate(0deg)",
    "height": "35px",
    "width": "14px",
    "top": "1px",
    "border-radius": "50% 0 50% 50%"
  });
  $('.cat__head-dots_second').css({
    "transform": "rotate(0deg)",
    "height": "35px",
    "width": "14px",
    "top": "1px",
    "border-radius": "0 50% 50% 50%"
  });
}
