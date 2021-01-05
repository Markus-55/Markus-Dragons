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

function eyeVariation(eyeShapeNum) {

  $("#eyeShapeDna").html(eyeShapeNum);
  // If the shape number
  switch (eyeShapeNum) {
    // Is case 1
    case 1:
      // Resets to original eyes
      originalEyes();
      // Sets the badge to original
      $("#eyesName").html("Original");
      break
    // If it's case 2
    case 2:
      // Resets the eyes
      originalEyes();
      // Set the badge to happy
      $("#eyesName").html("Happy");
      // Set eyes type to happy
      eyesTypeHappy();
      break
      // If it's case 3
    case 3:
      // Reset to original eyes
      originalEyes();
      // Set the badge to round
      $("#eyesName").html("Round");
      // Set eyes type to round
      eyesTypeRound();
      break
    // If it's case 4
    case 4:
      // Reset to original eyes
      originalEyes();
      // Set the badge to relaxed
      $("#eyesName").html("Relaxed");
      // Set eyes type to relaxed
      eyesTypeRelaxed();
      break
    // If it's case 5
    case 5:
      // Reset to original eyes
      originalEyes();
      // Set the badge to pointy
      $("#eyesName").html("Pointy");
      // Set eyes type to pointy
      eyesTypePointy();
      break
    // If it's case 6
    case 6:
      // Reset to original eyes
      originalEyes();
      // Set the badge to Horizontal
      $("#eyesName").html("Horizontal");
      // Set eyes type to Horizontal
      eyesTypeHorizontal();
      break
    // If it's case 7
    case 7:
      // Reset to original eyes
      originalEyes();
      // Set the badge to Moon-shape
      $("#eyesName").html("Moon-shape");
      // Set eyes type to Moon shape
      eyesTypeMoon();
      break
  }
}

function hornVariation(hornShapeNum) {

  $("#hornShapeDna").html(hornShapeNum);

  switch (hornShapeNum) {
    case 1:
      originalHorns();
      $("#hornsName").html("Basic");
      break
    case 2:
      originalHorns();
      $("#hornsName").html("test");
      hornsType1();
      break
  }
}
console.log(hornVariation());


// Create a function to set the original eyes
function originalEyes() {
  // Set the border of the eyes to none
  $(".eyes").css("border", "none");
  // Set the border of the pupils to none
  $(".pupils").css("border", "none");
  // Set the box-shadow of the inner pupils
  $(".innerPupils").css("box-shadow", "2px 4px 3px -1px black");
  // Set top of the inner pupils to 6 px
  $(".innerPupils").css("top", "6px");
  // Set left of the inner pupils to 8 px
  $(".innerPupils").css("left", "8px");
  // Set the width of the inner pupils to 15 px
  $(".innerPupils").css("width", "15px");
  // Set the height of the inner pupils to 15 px
  $(".innerPupils").css("height", "15px");
  // Set transform of the inner pupils to rotate 160 deg
  $(".innerPupils").css("transform", "rotate(160deg)");
  // Set transform of the pupils to rotate 57 deg
  $(".pupils").css("transform", "rotate(57deg)");
  // Set top of the pupils to 8 px
  $(".pupils").css("top", "8px");
  // Set left of the pupils to 1 px
  $(".pupils").css("left", "1px");
}

// Create a function to set eyes type happy
function eyesTypeHappy() {
  $(".pupils").css("transform", "rotate(244deg)");
  $(".pupils").css("top", "8px");
  $(".pupils").css("left", "1px");
}

// Create a function to set eyes type round
function eyesTypeRound() {
  $(".innerPupils").css("box-shadow", "inset 20px 20px black");
  $(".innerPupils").css("top", "4px");
  $(".innerPupils").css("left", "7px");
}

// Create a function to set eyes type pointy
function eyesTypePointy() {
  $(".innerPupils").css("box-shadow", "inset 20px 20px black");
  $(".innerPupils").css("top", "1px");
  $(".innerPupils").css("left", "12px");
  $(".innerPupils").css("width", "6px");
  $(".innerPupils").css("height", "21px");
  $(".innerPupils").css("transform", "rotate(129deg)");
}

// Create a function to set eyes type horizontal
function eyesTypeHorizontal() {
  $(".innerPupils").css("box-shadow", "inset 20px 20px black");
  $(".innerPupils").css("top", "1px");
  $(".innerPupils").css("left", "11px");
  $(".innerPupils").css("width", "6px");
  $(".innerPupils").css("height", "21px");
  $(".innerPupils").css("transform", "rotate(44deg)");
}

// Create a function to set eyes type moon-shape
function eyesTypeMoon() {
  $(".innerPupils").css("box-shadow", "2px 4px 3px -1px black");
  $(".innerPupils").css("top", "10px");
  $(".innerPupils").css("left", "2px");
  $(".innerPupils").css("width", "20px");
  $(".innerPupils").css("height", "11px");
  $(".innerPupils").css("transform", "rotate(225deg)");
}

// Create a function to set eyes type relaxed
function eyesTypeRelaxed() {
  $(".pupils").css("border-bottom", "10px solid");
  $(".eyes").css("border-bottom", "20px solid");
  $(".pupils").css("transform", "rotate(22deg)");
  $(".pupils").css("left", "2px");
  $(".innerPupils").css("transform", "rotate(192deg)");
  $(".innerPupils").css("box-shadow", "inset black -2px -6px 0px -3px");
}

function originalHorns() {
  $(".rightHorn").css("transform", "rotate(44deg)");
  $(".leftHorn").css("transform", "rotate(44deg)");
}

function hornsType1() {
  $(".rightHorn").css("transform", "rotate(26deg)");
  $(".leftHorn").css("transform", "rotate(60deg)");
}
