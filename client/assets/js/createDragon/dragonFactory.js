/* dragonFactory.js creats functions to set styling
   for colors and attributes */

function genColors() {
  let colors = [];
  for (let i = 10; i < 99; i++) {
    let color = getColor();
    colors[i] = color;
  }
  return colors;
}

function headBodyColor(color, code) {
  $("#head, #body").css("background", "#" + color);
  $("#headBodyCode").text("code: " + code);
  $("#headBodyDna").text(code);
}

function wingsTailColor(color, code) {
  $(".wings, .tailEnd").css("border-left-color", "#" + color);
  $(".tail").css("background", "#" + color);
  $("#wingsTailCode").text("code: " + code);
  $("#wingsTailDna").text(code);
}

function legsArmsColor(color, code) {
  $(".legs, .feet, .arms").css("background", "#" + color);
  $("#legsArmsCode").text("code: " + code);
  $("#legsArmsDna").text(code);
}

function eyesColor(color, code) {
  $(".pupils").css("background", "#" + color);
  $("#eyesCode").text("code: " + code);
  $("#eyesDna").text(code);
}

function topHornsColor(color, code) {
  $(".topHorns").css("background", "#" + color);
  $("#topHornsCode").text("code: " + code);
  $("#topHornsDna").text(code);
}

function sideHornsColor(color, code) {
  $(".sideHorns").css("background", "#" + color);
  $("#sideHornsCode").text("code: " + code);
  $("#sideHornsDna").text(code);
}

function eyeVariation(eyeShapeNum, animationNum) {
  $("#eyeShapeDna").text(eyeShapeNum);
  switch (eyeShapeNum) {
    case 1:
      originalEyes();
      $("#eyesName").text("Original");
      // When animation is dilating eyes call function
      // to properly set the eye shape
      if(animationNum == 5) {
        eyeAnimationVariations(1);
      }
      break
    case 2:
      originalEyes();
      $("#eyesName").text("Happy");
      eyesTypeHappy();
      if(animationNum == 5) {
        eyeAnimationVariations(2);
      }
      break
    case 3:
      originalEyes();
      $("#eyesName").text("Round");
      eyesTypeRound();
      if(animationNum == 5) {
        eyeAnimationVariations(3);
      }
      break
    case 4:
      originalEyes();
      $("#eyesName").text("Relaxed");
      eyesTypeRelaxed();
      if(animationNum == 5) {
        eyeAnimationVariations(4);
      }
      break
    case 5:
      originalEyes();
      $("#eyesName").text("Pointy");
      eyesTypePointy();
      if(animationNum == 5) {
        eyeAnimationVariations(5);
      }
      break
    case 6:
      originalEyes();
      $("#eyesName").text("Zen");
      eyesTypeZen();
      if(animationNum == 5) {
        eyeAnimationVariations(6);
      }
      break
    case 7:
      originalEyes();
      $("#eyesName").text("Moon-shape");
      eyesTypeMoon();
      if(animationNum == 5) {
        eyeAnimationVariations(7);
      }
      break
  }
}

function hornVariation(hornShapeNum, animationNum) {
  $("#hornShapeDna").text(hornShapeNum);
  switch (hornShapeNum) {
    case 1:
      $("#hornsName").text("Original");
      originalHorns();
      // same as in eyeVariation but with horn shape instead,
      // when animation is tilting head
      if(animationNum == 2) {
        animationVariations(2, 1);
      }
      break
    case 2:
      originalHorns();
      $("#hornsName").text("Centered");
      hornsTypeCentered();
      if(animationNum == 2) {
        animationVariations(2, 2);
      }
      break
    case 3:
      originalHorns();
      $("#hornsName").text("Small");
      hornsTypeSmall();
      if(animationNum == 2) {
        animationVariations(2, 3);
      }
      break
    case 4:
      originalHorns();
      $("#hornsName").text("Rounded");
      hornsTypeRounded();
      if(animationNum == 2) {
        animationVariations(2, 4);
      }
      break
    case 5:
      originalHorns();
      $("#hornsName").text("Blades");
      hornsTypeBlades();
      if(animationNum == 2) {
        animationVariations(2, 5);
      }
      break
  }
}

function animationVariations(animationNum, hornShapeNum) {

  $("#animationDna").text(animationNum);

  switch (animationNum) {
    case 1:
      resetAnimation();
      $("#animationName").text("No animation");
      break
    case 2:
      resetAnimation();
      $("#animationName").text("Tilting head");
      // When user switches between differente horn shapes with the slider,
      // sets the appropriate animation for selected horn shape
      if(hornShapeNum == 5) {
        animationBladeHorns();
      }
      else if(hornShapeNum == 4) {
        animationRoundedHorns();
      }
      else if(hornShapeNum == 3) {
        animationSmallHorns();
      }
      else if(hornShapeNum == 2) {
        animationCenteredHorns();
      }
      else {
        animationTypeHead();
      }
      break
    case 3:
      resetAnimation();
      $("#animationName").text("Moving tail end");
      animationTypeTailEnd();
      break
    case 4:
      resetAnimation();
      $("#animationName").text("Moving wings");
      animationTypeWings();
      break
  }
}

// Function does the same as case 2 in animationVariations,
// but for the eye shapes
function eyeAnimationVariations(eyeShapeNum) {
  $("#animationDna").text(5);

  resetAnimation();
  $("#animationName").text("Dilating eyes");
  if(eyeShapeNum == 2) {
    animationHappyEyes();
  }
  else if(eyeShapeNum == 4) {
    animationRelaxedEyes();
  }
  else {
    animationRemainingEyes();
  }
}

function animationHappyEyes() {
  $(".pupils").addClass("happyEyes");
}

function animationRelaxedEyes() {
  $(".pupils").addClass("relaxedEyes");
}

function animationRemainingEyes() {
  $(".pupils").addClass("remainingEyes");
}

function animationTypeWings() {
  $("#rightWing").addClass("movingRightWing");
  $("#leftWing").addClass("movingLeftWing");
}

function animationTypeTailEnd() {
  $(".tailEnd1").addClass("movingTailEnd1");
  $(".tailEnd2").addClass("movingTailEnd2");
}

function animationTypeHead() {
  $("#head").addClass("tiltingHead");
  $(".rightEar").addClass("tiltingRightEar");
  $(".leftEar").addClass("tiltingLeftEar");
  $(".topRightHorn, .topLeftHorn").addClass("tiltingTopHorns");
  $(".sideRightHorn1").addClass("tiltingSideRightHorn1");
  $(".sideRightHorn2").addClass("tiltingSideRightHorn2");
  $(".sideLeftHorn1").addClass("tiltingSideLeftHorn1");
  $(".sideLeftHorn2").addClass("tiltingSideLeftHorn2");
}

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

function animationSmallHorns() {
  $("#head").addClass("tiltingHead");
  $(".rightEar").addClass("tiltingRightEar");
  $(".leftEar").addClass("tiltingLeftEar");
  $(".topRightHorn, .topLeftHorn").addClass("tiltingSmallHorns");
  $(".sideRightHorn1").addClass("tiltingSideRightHorn1");
  $(".sideRightHorn2").addClass("tiltingSideRightHorn2");
  $(".sideLeftHorn1").addClass("tiltingSideLeftHorn1");
  $(".sideLeftHorn2").addClass("tiltingSideLeftHorn2");
}

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

function resetAnimation() {
  $("#head").removeClass("tiltingHead");
  $(".rightEar").removeClass("tiltingRightEar");
  $(".leftEar").removeClass("tiltingLeftEar");
  $(".topRightHorn, .topLeftHorn").removeClass("tiltingRoundedHorns");
  $(".topRightHorn, .topLeftHorn").removeClass("tiltingSmallHorns");
  $(".topRightHorn").removeClass("tiltingRightCenteredHorn");
  $(".topLeftHorn").removeClass("tiltingLeftCenteredHorn");
  $(".topRightHorn").removeClass("tiltingRightBladeHorn");
  $(".topLeftHorn").removeClass("tiltingLeftBladeHorn");

  $(".topRightHorn, .topLeftHorn").removeClass("tiltingTopHorns");

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

  // Using .width() to update the animations of Tilting head, when user changes animation with the slider
  // without this the differente parts of the head will not reset with the Tilting Head animation
  $("#head, .rightEar, .leftEar, .sideRightHorn1, .sideRightHorn2, .sideLeftHorn1, .sideLeftHorn2").width();
}

function originalEyes() {
  $(".eyes").css("border", "none");
  $(".pupils").css({
    "border": "none",
    "transform": "rotate(57deg)",
    "left": "1px"
  });
  $(".innerPupils").css({
    "box-shadow": "2px 4px 3px -1px black",
    "transform": "rotate(160deg)",
    "height": "15px",
    "width": "15px",
    "left": "8px",
    "top": "6px"
  });
}

function eyesTypeHappy() {
  $(".pupils").css("transform", "rotate(244deg)");
}

function eyesTypeRound() {
  $(".innerPupils").css({
    "box-shadow": "inset 20px 20px black",
    "left": "7px",
    "top": "4px"
  });
}

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

function eyesTypeZen() {
  $(".innerPupils").css({
    "box-shadow": "inset 20px 20px black",
    "transform": "rotate(44deg)",
    "height": "21px",
    "left": "11px",
    "width": "6px",
    "top": "1px"
  });
}

function eyesTypeMoon() {
  $(".innerPupils").css({
    "transform": "rotate(225deg)",
    "height": "11px",
    "width": "20px",
    "left": "2px",
    "top": "10px"
  });
}

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

function hornsTypeCentered() {
  $(".topRightHorn").css({
    "transform": "scale(1,-1) rotate(66deg)",
    "left": "87px"
  });
  $(".topLeftHorn").css({
    "transform": "rotate(66deg)",
    "left": "20px"
  });
  $(".topHorns").css({
    "height": "79px",
    "width": "76px"
  });
}

function hornsTypeSmall() {
  $(".topRightHorn").css("left", "89px");
  $(".topLeftHorn").css("left", "32px");
  $(".topHorns").css({
    "top": "-9px",
    "transform": "rotate(42deg)"
});
}

function hornsTypeRounded() {
  $(".topLeftHorn").css("left", "36px");
  $(".topHorns").css({
    "border-radius": "0px 43px 9px 41px",
    "height": "59px",
    "width": "57px"
  });
}

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
