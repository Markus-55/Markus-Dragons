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
  $(".tailEnd").css("border-left-color", "#" + color);
  // Modifies the wingsTailCode id with the code in the slider
  $("#wingsTailCode").html("code: " + code);
  // Modifies the wingsTailDna id with the code
  $("#wingsTailDna").html(code);
}

// Make a function legsArmsColor with a color and code as arguments
function legsArmsColor(color, code) {
  // Change the legs and arms background color
  $(".legs, .feet, .arms").css("background", "#" + color);
  // Modifies the legsArmsCode id with the code in the slider
  $("#legsArmsCode").html("code: " + code);
  // Modifies the legsArmsDna id with the code
  $("#legsArmsDna").html(code);
}

// Make a function eyesColor with a color and code as arguments
function eyesColor(color, code) {
  // Change the pupils background color
  $(".pupils").css("background", "#" + color);
  // Modifies eyesCode id with the code in the slider
  $("#eyesCode").html("code: " + code);
  // Modifies the eyesDna id with the code
  $("#eyesDna").html(code);
}

// Make a function topHornsColor with a color and code as arguments
function topHornsColor(color, code) {
  // Change the top horns background color
  $(".topHorns").css("background", "#" + color);
  // Modifies the topHornsCode id with the code in the slider
  $("#topHornsCode").html("code: " + code);
  // Modifies the topHornsDna id with the code
  $("#topHornsDna").html(code);
}

// Make a function sideHornsColor with a color and code as arguments
function sideHornsColor(color, code) {
  // Change the side horns background color
  $(".sideHorns").css("background", "#" + color);
  // Modifies the sideHornsCode id with the code in the slider
  $("#sideHornsCode").html("code: " + code);
  // Modifies the sideHornsDna id with the code
  $("#sideHornsDna").html(code);
}

// Make a function eyeVariation with the eye shape number as an argument
function eyeVariation(eyeShapeNum) {
  // Modifies the eyeShapeDna id with the eye shape number
  $("#eyeShapeDna").html(eyeShapeNum);
  // Switch the eye shape number
  switch (eyeShapeNum) {
    // If it's case 1
    case 1:
      // Resets to original eyes
      originalEyes();
      // Sets the badge to original
      $("#eyesName").html("Original");
      break
    // If it's case 2
    case 2:
      // Resets to original eyes
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
      // Set the badge to horizontal
      $("#eyesName").html("Horizontal");
      // Set eyes type to horizontal
      eyesTypeHorizontal();
      break
    // If it's case 7
    case 7:
      // Reset to original eyes
      originalEyes();
      // Set the badge to moon-shape
      $("#eyesName").html("Moon-shape");
      // Set eyes type to Moon shape
      eyesTypeMoon();
      break
  }
}

// Make a function hornVariation with the horn shape number as an argument
function hornVariation(hornShapeNum) {
  // Modifies the hornShapeDna id with the horn shape number
  $("#hornShapeDna").html(hornShapeNum);
  // Switch the horn shape number
  switch (hornShapeNum) {
    // If it's case 1
    case 1:
      // Reset to original horns
      originalHorns();
      // Set the badge to original
      $("#hornsName").html("Original");
      break
    // If it's case 2
    case 2:
      // Reset to original horns
      originalHorns();
      // Set the badge to centered
      $("#hornsName").html("Centered");
      // Set horn type to centered
      hornsTypeCentered();
      break
    // If it's case 3
    case 3:
      // Reset to original horns
      originalHorns();
      // Set the badge to small
      $("#hornsName").html("Small");
      // Set horn type to small
      hornsTypeSmall();
      break
    // If it's case 4
    case 4:
      // Reset to original horns
      originalHorns();
      // Set the badge to rounded
      $("#hornsName").html("Rounded");
      // Set horn type to rounded
      hornsTypeRounded();
      break
    // If it's case 5
    case 5:
      // Reset to original horns
      originalHorns();
      // Set the badge to blades
      $("#hornsName").html("Blades");
      // Set horn type to blades
      hornsTypeBlades();
      break
  }
}

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

// Create a function to set the original horns
function originalHorns() {
  $(".topHorns").css("top", "-20px");
  $(".topHorns").css("border-radius", "0px 90px 0px 90px");
  $(".topHorns").css("width", "63px");
  $(".topHorns").css("height", "65px");
  $(".topRightHorn").css("left", "92px");
  $(".topLeftHorn").css("left", "29px");
  $(".topHorns").css("transform", "rotate(44deg)");
}

// Create a function to set horns type centered
function hornsTypeCentered() {
  $(".topRightHorn").css("transform", "rotate(23deg)");
  $(".topLeftHorn").css("transform", "rotate(65deg)");
  $(".topRightHorn").css("left", "87px");
  $(".topLeftHorn").css("left", "21px");
  $(".topHorns").css("width", "76px");
  $(".topHorns").css("height", "79px");

}

// Create a function to set horns type small
function hornsTypeSmall() {
  $(".topHorns").css("top", "-9px");
  $(".topRightHorn").css("left", "89px");
  $(".topLeftHorn").css("left", "32px");
  $(".topRightHorn").css("transform", "rotate(47deg)");
  $(".topLeftHorn").css("transform", "rotate(38deg)");
}

// Create a function to set horns type rounded
function hornsTypeRounded() {
  $(".topHorns").css("border-radius", "0px 43px 9px 41px");
  $(".topHorns").css("width", "57px");
  $(".topHorns").css("height", "59px");
  $(".topRightHorn").css("left", "92px");
  $(".topLeftHorn").css("left", "36px");
}

// Create a function to set horns type blades
function hornsTypeBlades() {
  $(".topHorns").css("border-radius", "0px 90px");
  $(".topHorns").css("width", "31px");
  $(".topHorns").css("height", "76px");
  $(".topHorns").css("top", "-30px");
  $(".topRightHorn").css("transform", "rotate(30deg)");
  $(".topLeftHorn").css("transform", "scale(1, -1) rotate(30deg)");
  $(".topRightHorn").css("left", "107px");
  $(".topLeftHorn").css("left", "47px");
}
