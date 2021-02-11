function genColors() {
  let colors = [];
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
  // Change the wings and tail end border left color of the dragon
  $(".wings, .tailEnd").css("border-left-color", "#" + color);
  // Change the tail background color of the dragon
  $(".tail").css("background", "#" + color);
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

// Make a function eyeVariation with the eye shape number and animation number as arguments
function eyeVariation(eyeShapeNum, animationNum) {
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
      // If animation number is == to 5
      if(animationNum == 5) {
        // Call function eyeAnimationVariations with animation number 5
        // and eye shape number 1 as arguments
        eyeAnimationVariations(5, 1);
      }
      break
    // If it's case 2
    case 2:
      // Resets to original eyes
      originalEyes();
      // Set the badge to happy
      $("#eyesName").html("Happy");
      // Set eyes type to happy
      eyesTypeHappy();
      // If animation number is == to 5
      if(animationNum == 5) {
        // Call function eyeAnimationVariations with animation number 5
        // and eye shape number 2 as arguments
        eyeAnimationVariations(5, 2);
      }
      break
      // If it's case 3
    case 3:
      // Reset to original eyes
      originalEyes();
      // Set the badge to round
      $("#eyesName").html("Round");
      // Set eyes type to round
      eyesTypeRound();
      // If animation number is == to 5
      if(animationNum == 5) {
        // Call function eyeAnimationVariations with animation number 5
        // and eye shape number 3 as arguments
        eyeAnimationVariations(5, 3);
      }
      break
    // If it's case 4
    case 4:
      // Reset to original eyes
      originalEyes();
      // Set the badge to relaxed
      $("#eyesName").html("Relaxed");
      // Set eyes type to relaxed
      eyesTypeRelaxed();
      // If animation number is == to 5
      if(animationNum == 5) {
        // Call function eyeAnimationVariations with animation number 5
        // and eye shape number 4 as arguments
        eyeAnimationVariations(5, 4);
      }
      break
    // If it's case 5
    case 5:
      // Reset to original eyes
      originalEyes();
      // Set the badge to pointy
      $("#eyesName").html("Pointy");
      // Set eyes type to pointy
      eyesTypePointy();
      // If animation number is == to 5
      if(animationNum == 5) {
        // Call function eyeAnimationVariations with animation number 5
        // and eye shape number 5 as arguments
        eyeAnimationVariations(5, 5);
      }
      break
    // If it's case 6
    case 6:
      // Reset to original eyes
      originalEyes();
      // Set the badge to horizontal
      $("#eyesName").html("Horizontal");
      // Set eyes type to horizontal
      eyesTypeHorizontal();
      // If animation number is == to 5
      if(animationNum == 5) {
        // Call function eyeAnimationVariations with animation number 5
        // and eye shape number 6 as arguments
        eyeAnimationVariations(5, 6);
      }
      break
    // If it's case 7
    case 7:
      // Reset to original eyes
      originalEyes();
      // Set the badge to moon-shape
      $("#eyesName").html("Moon-shape");
      // Set eyes type to Moon shape
      eyesTypeMoon();
      // If animation number is == to 5
      if(animationNum == 5) {
        // Call function eyeAnimationVariations with animation number 5
        // and eye shape number 7 as arguments
        eyeAnimationVariations(5, 7);
      }
      break
  }
}

// Make a function hornVariation with the horn shape number and animation number as arguments
function hornVariation(hornShapeNum, animationNum) {
  // Modifies the hornShapeDna id with the horn shape number
  $("#hornShapeDna").html(hornShapeNum);
  // Switch the horn shape number
  switch (hornShapeNum) {
    // If it's case 1
    case 1:
      // Set the badge to original
      $("#hornsName").html("Original");
      // Reset to original horns
      originalHorns();
      // If animation number is == to 2
      if(animationNum == 2) {
        // Call function animationVariations with animation number 2
        // and horn shape number 1 as arguments
        animationVariations(2, 1);
      }
      break
    // If it's case 2
    case 2:
      // Reset to original horns
      originalHorns();
      // Set the badge to centered
      $("#hornsName").html("Centered");
      // Set horn type to centered
      hornsTypeCentered();
      // If animation number is == to 2
      if(animationNum == 2) {
        // Call function animationVariations with animation number 2
        // and horn shape number 2 as arguments
        animationVariations(2, 2);
      }
      break
    // If it's case 3
    case 3:
      // Reset to original horns
      originalHorns();
      // Set the badge to small
      $("#hornsName").html("Small");
      // Set horn type to small
      hornsTypeSmall();
      // If animation number is == to 2
      if(animationNum == 2) {
        // Call function animationVariations with animation number 2
        // and horn shape number 3 as arguments
        animationVariations(2, 3);
      }
      break
    // If it's case 4
    case 4:
      // Reset to original horns
      originalHorns();
      // Set the badge to rounded
      $("#hornsName").html("Rounded");
      // Set horn type to rounded
      hornsTypeRounded();
      // If animation number is == to 2
      if(animationNum == 2) {
        // Call function animationVariations with animation number 2
        // and horn shape number 4 as arguments
        animationVariations(2, 4);
      }
      break
    // If it's case 5
    case 5:
      // Reset to original horns
      originalHorns();
      // Set the badge to blades
      $("#hornsName").html("Blades");
      // Set horn type to blades
      hornsTypeBlades();
      // If animation number is == to 2
      if(animationNum == 2) {
        // Call function animationVariations with animation number 2
        // and horn shape number 5 as arguments
        animationVariations(2, 5);
      }
      break
  }
}

// Make a function animationVariations with the animation number and horn shape number as arguments
function animationVariations(animationNum, hornShapeNum) {

  // Modifies the hornShapeDna id with the animation number
  $("#animationDna").html(animationNum);

  // Switch the animation number
  switch (animationNum) {
    // If it's case 1
    case 1:
      // Reset the animation
      resetAnimation();
      // Set the badge to no animation
      $("#animationName").html("No animation");
      break
    // If it's case 2
    case 2:
      // Reset the animation
      resetAnimation();
      // Set the badge to tilting head
      $("#animationName").html("Tilting head");
      // If the horn shape number is == to 5
      if(hornShapeNum == 5) {
        // Call function animationBladeHorns
        animationBladeHorns();
      }
      // Else, if the horn shape number is == to 4
      else if(hornShapeNum == 4) {
        // Call function animationRoundedHorns
        animationRoundedHorns();
      }
      // Else, if the horn shape number is == to 2
      else if(hornShapeNum == 2) {
        // Call function animationCenteredHorns
        animationCenteredHorns();
      }
      // Else, call function animationTypeHead
      else {
        animationTypeHead();
      }
      break
    // If it's case 3
    case 3:
      // Reset the animation
      resetAnimation();
      // Set the badge to moving tail end
      $("#animationName").html("Moving tail end");
      // Call function animationTypeTailEnd
      animationTypeTailEnd();
      break
    // If it's case 4
    case 4:
      // Reset the animation
      resetAnimation();
      // Set the badge to moving wings
      $("#animationName").html("Moving wings");
      // Call function animationTypeWings
      animationTypeWings();
      break
  }
}

// Make a function eyeAnimationVariations with a animation number and eye shape number as arguments
function eyeAnimationVariations(animationNum, eyeShapeNum) {
  // If the eye shape number is == to 2
  if(eyeShapeNum == 2) {
    // Reset the animation
    resetAnimation();
    // Set the badge to Dilating eyes
    $("#animationName").html("Dilating eyes");
    // Call function animationHappyEyes
    animationHappyEyes();
  }
  // Else, if eye shape number is == to 2
  else if(eyeShapeNum == 4) {
    // Reset the animation
    resetAnimation();
    // Set the badge to Dilating eyes
    $("#animationName").html("Dilating eyes");
    // Call function animationRelaxedEyes
    animationRelaxedEyes();
  }
  else {
    // Reset the animation
    resetAnimation();
    // Set the badge to Dilating eyes
    $("#animationName").html("Dilating eyes");
    // Call function animationRemainingEyes
    animationRemainingEyes();
  }
}

// Make a function for the animation of the happy eyes
function animationHappyEyes() {
  $(".innerPupils").css("transform", "rotate(160deg)");
  $(".pupils").addClass("happyEyes");
}

// Make a function for the animation of the relaxed eyes
function animationRelaxedEyes() {
  $(".pupils").addClass("relaxedEyes");
}

// Make a function for the animation of the remaining eyes
function animationRemainingEyes() {
  $(".pupils").addClass("remainingEyes");
}

// Make a function for the animation of the wings
function animationTypeWings() {
  $("#rightWing").addClass("movingRightWing");
  $("#leftWing").addClass("movingLeftWing");
}

// Make a function for the animation of the tail end
function animationTypeTailEnd() {
  $(".tailEnd1").addClass("movingTailEnd1");
  $(".tailEnd2").addClass("movingTailEnd2");
}

// Make a function for the animation of the head
function animationTypeHead() {
  $("#head").addClass("tiltingHead");
  $(".rightEar").addClass("tiltingRightEar");
  $(".leftEar").addClass("tiltingLeftEar");
  $(".topRightHorn").addClass("tiltingTopRightHorn");
  $(".topLeftHorn").addClass("tiltingTopLeftHorn");
  $(".sideRightHorn1").addClass("tiltingSideRightHorn1");
  $(".sideRightHorn2").addClass("tiltingSideRightHorn2");
  $(".sideLeftHorn1").addClass("tiltingSideLeftHorn1");
  $(".sideLeftHorn2").addClass("tiltingSideLeftHorn2");
}

// Make a function for the animation of the blade horns
function animationBladeHorns() {
  $(".topRightHorn").addClass("tiltingRightBladeHorn");
  $(".topLeftHorn").addClass("tiltingLeftBladeHorn");
  $("#head").addClass("tiltingHead");
  $(".rightEar").addClass("tiltingRightEar");
  $(".leftEar").addClass("tiltingLeftEar");
  $(".sideRightHorn1").addClass("tiltingSideRightHorn1");
  $(".sideRightHorn2").addClass("tiltingSideRightHorn2");
  $(".sideLeftHorn1").addClass("tiltingSideLeftHorn1");
  $(".sideLeftHorn2").addClass("tiltingSideLeftHorn2");
}

// Make a function for the animation of the centered horns
function animationCenteredHorns() {
  $(".topRightHorn").addClass("tiltingRightCenteredHorn");
  $(".topLeftHorn").addClass("tiltingLeftCenteredHorn");
  $("#head").addClass("tiltingHead");
  $(".rightEar").addClass("tiltingRightEar");
  $(".leftEar").addClass("tiltingLeftEar");
  $(".sideRightHorn1").addClass("tiltingSideRightHorn1");
  $(".sideRightHorn2").addClass("tiltingSideRightHorn2");
  $(".sideLeftHorn1").addClass("tiltingSideLeftHorn1");
  $(".sideLeftHorn2").addClass("tiltingSideLeftHorn2");
}

// Make a function for the animation of the rounded horns
function animationRoundedHorns() {
  $("#head").addClass("tiltingHead");
  $(".rightEar").addClass("tiltingRightEar");
  $(".leftEar").addClass("tiltingLeftEar");
  $(".topRightHorn, .topLeftHorn").addClass("tiltingRoundedHorns");
  $(".sideRightHorn1").addClass("tiltingSideRightHorn1");
  $(".sideRightHorn2").addClass("tiltingSideRightHorn2");
  $(".sideLeftHorn1").addClass("tiltingSideLeftHorn1");
  $(".sideLeftHorn2").addClass("tiltingSideLeftHorn2");
}

// Make a function to reset the animation
function resetAnimation() {
  $("#head").removeClass("tiltingHead");
  $(".rightEar").removeClass("tiltingRightEar");
  $(".leftEar").removeClass("tiltingLeftEar");
  $(".topRightHorn, .topLeftHorn").removeClass("tiltingRoundedHorns");
  $(".topRightHorn").removeClass("tiltingRightCenteredHorn");
  $(".topLeftHorn").removeClass("tiltingLeftCenteredHorn");
  $(".topRightHorn").removeClass("tiltingRightBladeHorn");
  $(".topLeftHorn").removeClass("tiltingLeftBladeHorn");
  $(".topRightHorn").removeClass("tiltingTopRightHorn");
  $(".topLeftHorn").removeClass("tiltingTopLeftHorn");
  $(".sideRightHorn1").removeClass("tiltingSideRightHorn1");
  $(".sideRightHorn2").removeClass("tiltingSideRightHorn2");
  $(".sideLeftHorn1").removeClass("tiltingSideLeftHorn1");
  $(".sideLeftHorn2").removeClass("tiltingSideLeftHorn2");

  $(".tailEnd1").removeClass("movingTailEnd1");
  $(".tailEnd2").removeClass("movingTailEnd2");
  $("#rightWing").removeClass("movingRightWing");
  $("#leftWing").removeClass("movingLeftWing");

  $(".pupils").removeClass("remainingEyes");
  $(".pupils").removeClass("relaxedEyes");
  $(".pupils").removeClass("happyEyes");

  $("#head, .rightEar, .leftEar, .sideRightHorn1, .sideRightHorn2, .sideLeftHorn1, .sideLeftHorn2").width();
}

// Create a function to set the original eyes
function originalEyes() {
  // Reset the border of the eyes to none
  $(".eyes").css("border", "none");
  // Reset pupils with original css property
  $(".pupils").css({
    "border": "none",
    "transform": "rotate(57deg)",
    "left": "1px"
  });
  // Reset inner pupils with original css property
  $(".innerPupils").css({
    "box-shadow": "2px 4px 3px -1px black",
    "transform": "rotate(160deg)",
    "height": "15px",
    "width": "15px",
    "left": "8px",
    "top": "6px"
  });
}

// Create a function to set eyes type happy
function eyesTypeHappy() {
  $(".pupils").css("transform", "rotate(244deg)");
}

// Create a function to set eyes type round
function eyesTypeRound() {
  $(".innerPupils").css({
    "box-shadow": "inset 20px 20px black",
    "left": "7px",
    "top": "4px"
  });
}

// Create a function to set eyes type relaxed
function eyesTypeRelaxed() {
  $(".eyes").css("border-bottom", "20px solid");
  $(".innerPupils").css({
    "box-shadow": "inset black -2px -6px 0px -3px",
    "transform": "rotate(192deg)"
  });
  $(".pupils").css({
    "border-bottom": "10px solid",
    "transform": "rotate(22deg)",
    "left": "2px"
  });
}

// Create a function to set eyes type pointy
function eyesTypePointy() {
  $(".innerPupils").css({
    "box-shadow": "inset 20px 20px black",
    "transform": "rotate(129deg)",
    "height": "21px",
    "left": "12px",
    "width": "6px",
    "top": "1px"
  });
}

// Create a function to set eyes type horizontal
function eyesTypeHorizontal() {
  $(".innerPupils").css({
    "box-shadow": "inset 20px 20px black",
    "transform": "rotate(44deg)",
    "height": "21px",
    "left": "11px",
    "width": "6px",
    "top": "1px"
  });
}

// Create a function to set eyes type moon-shape
function eyesTypeMoon() {
  $(".innerPupils").css({
    "transform": "rotate(225deg)",
    "height": "11px",
    "width": "20px",
    "left": "2px",
    "top": "10px"
  });
}

// Create a function to set the original horns
function originalHorns() {
  $(".topRightHorn").css("left", "92px");
  $(".topLeftHorn").css("left", "29px");
  $(".topHorns").css({
    "border-radius": "0px 90px",
    "transform": "rotate(44deg)",
    "height": "65px",
    "width": "63px",
    "top": "-20px"
  });
}

// Create a function to set horns type centered
function hornsTypeCentered() {
  $(".topRightHorn").css({
    "transform": "scale(1,-1) rotate(65deg)",
    "left": "87px"
  });
  $(".topLeftHorn").css({
    "transform": "rotate(66deg)",
    "left": "21px"
  });
  $(".topHorns").css({
    "height": "79px",
    "width": "76px"
  });
}

// Create a function to set horns type small
function hornsTypeSmall() {
  $(".topHorns").css("top", "-9px");
  $(".topRightHorn").css({
    "transform": "rotate(47deg)",
    "left": "89px"
  });
  $(".topLeftHorn").css({
    "transform": "rotate(38deg)",
    "left": "32px"
  });
}

// Create a function to set horns type rounded
function hornsTypeRounded() {
  $(".topLeftHorn").css("left", "36px");
  $(".topHorns").css({
    "border-radius": "0px 43px 9px 41px",
    "height": "59px",
    "width": "57px"
  });
}

// Create a function to set horns type blades
function hornsTypeBlades() {
  $(".topHorns").css({
    "height": "76px",
    "width": "31px",
    "top": "-30px"
  });
  $(".topRightHorn").css({
    "transform": "rotate(30deg)",
    "left": "107px"
  });
  $(".topLeftHorn").css({
    "transform": "scale(1, -1) rotate(30deg)",
    "left": "47px"
  });
}
