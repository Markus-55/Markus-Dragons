/* dragonComponents.js has all the information of each dragon
  colors and attributes */

function toReadableTime(convertNumb) {
  return new Date(convertNumb * 1000).toLocaleString("en-GB");
}

function dragonDetails(dragonData, id, offerData) {
  $(`#dragonId${id} #generation`).text(`Generation: ${dragonData.generation}`);
  $(`#dragonId${id} #birthTime`).text(`Birth time: ${toReadableTime(dragonData.birthTime)}`);
  $(`#dragonId${id} #dadId`).text(`Dad ID: ${dragonData.dadId}`);
  $(`#dragonId${id} #momId`).text(`Mom ID: ${dragonData.momId}`);
}

function dragonObj(dragonData) {
  let genes = dragonData.genes.split('');

  let storedDragonsObj = {
    // Dna dragon colors
    headBodyColor: genes[0] + genes[1],
    wingsTailColor: genes[2] + genes[3],
    legsArmsColor: genes[4] + genes[5],
    eyesColor: genes[6] + genes[7],
    // Dna dragon attributes
    eyeShape: genes[8],
    hornShape: genes[9],
    topHornsColor: genes[10] + genes[11],
    sideHornsColor: genes[12] + genes[13],
    animation: genes[14],
    lastNum: genes[15]
  }

  //console.log(storedDragonsObj)
  return storedDragonsObj;
}

function renderOwnedDragons(dnaObject, id) {
  let eyeShapeNum = parseInt(dnaObject.eyeShape);
  let hornShapeNum = parseInt(dnaObject.hornShape);
  let animationNum = parseInt(dnaObject.animation);

  headBodyColor(colors[dnaObject.headBodyColor], dnaObject.headBodyColor, id);

  wingsTailColor(colors[dnaObject.wingsTailColor], dnaObject.wingsTailColor, id);

  legsArmsColor(colors[dnaObject.legsArmsColor], dnaObject.legsArmsColor, id);

  eyesColor(colors[dnaObject.eyesColor], dnaObject.eyesColor, id);

  eyeVariation(eyeShapeNum, animationNum, id);

  hornVariation(hornShapeNum, animationNum, id);

  topHornsColor(colors[dnaObject.topHornsColor], dnaObject.topHornsColor, id);

  sideHornsColor(colors[dnaObject.sideHornsColor], dnaObject.sideHornsColor, id);

  if(animationNum === 5) {
    eyeAnimationVariations(eyeShapeNum, id);
  }
  else {
    animationVariations(animationNum, hornShapeNum, id);
  }

  specialNum(dnaObject.lastNum, id);
}

function headBodyColor(color, code, id) {
  $(`#dragonId${id} #head, #dragonId${id} #body`).css("background", "#" + color);
  $(`#dragonId${id} #headBodyDna`).text(code);
}

function wingsTailColor(color, code, id) {
  $(`#dragonId${id} .wings, #dragonId${id} .tailEnd`).css("border-left-color", "#" + color);
  $(`#dragonId${id} .tail`).css("background", "#" + color);
  $(`#dragonId${id} #wingsTailDna`).text(code);
}

function legsArmsColor(color, code, id) {
  $(`#dragonId${id} .legs, #dragonId${id} .feet, #dragonId${id} .arms`).css("background", "#" + color);
  $(`#dragonId${id} #legsArmsDna`).text(code);
}

function eyesColor(color, code, id) {
  $(`#dragonId${id} .pupils`).css("background", "#" + color);
  $(`#dragonId${id} #eyesDna`).text(code);
}

function topHornsColor(color, code, id) {
  $(`#dragonId${id} .topHorns`).css("background", "#" + color);
  $(`#dragonId${id} #topHornsDna`).text(code);
}

function sideHornsColor(color, code, id) {
  $(`#dragonId${id} .sideHorns`).css("background", "#" + color);
  $(`#dragonId${id} #sideHornsDna`).text(code);
}

function eyeVariation(eyeShapeNum, animationNum, id) {

  $(`#dragonId${id} #eyeShapeDna`).text(eyeShapeNum);
  switch (eyeShapeNum) {
    case 1:
      // When animation is dilating eyes call function
      // to properly set the eye shape
      if(animationNum == 5) {
        eyeAnimationVariations(1, id);
      }
      break
    case 2:
      eyesTypeHappy(id);
      if(animationNum == 5) {
        eyeAnimationVariations(2, id);
      }
      break
    case 3:
      eyesTypeRound(id);
      if(animationNum == 5) {
        eyeAnimationVariations(3, id);
      }
      break
    case 4:
      eyesTypeRelaxed(id);
      if(animationNum == 5) {
        eyeAnimationVariations(4, id);
      }
      break
    case 5:
      eyesTypePointy(id);
      if(animationNum == 5) {
        eyeAnimationVariations(5, id);
      }
      break
    case 6:
      eyesTypeZen(id);
      if(animationNum == 5) {
        eyeAnimationVariations(6, id);
      }
      break
    case 7:
      eyesTypeMoon(id);
      if(animationNum == 5) {
        eyeAnimationVariations(7, id);
      }
      break
  }
}

function hornVariation(hornShapeNum, animationNum, id) {

  $(`#dragonId${id} #hornShapeDna`).text(hornShapeNum);
  switch (hornShapeNum) {
    case 1:
      // same as in eyeVariation but with horn shape instead,
      // when animation is tilting head
      if(animationNum == 2) {
        animationVariations(2, 1, id);
      }
      break
    case 2:
      hornsTypeCentered(id);
      if(animationNum == 2) {
        animationVariations(2, 2, id);
      }
      break
    case 3:
      hornsTypeSmall(id);
      if(animationNum == 2) {
        animationVariations(2, 3, id);
      }
      break
    case 4:
      hornsTypeRounded(id);
      if(animationNum == 2) {
        animationVariations(2, 4, id);
      }
      break
    case 5:
      hornsTypeBlades(id);
      if(animationNum == 2) {
        animationVariations(2, 5, id);
      }
      break
  }
}

function animationVariations(animationNum, hornShapeNum, id) {

  $(`#dragonId${id} #animationDna`).text(animationNum);
  switch (animationNum) {
    case 1:
      break
    case 2:
      // When user switches between differente horn shapes with the slider,
      // sets the appropriate animation for selected horn shape
      if(hornShapeNum == 5) {
        animationBladeHorns(id);
      }
      else if(hornShapeNum == 4) {
        animationRoundedHorns(id);
      }
      else if(hornShapeNum == 3) {
        animationSmallHorns(id);
      }
      else if(hornShapeNum == 2) {
        animationCenteredHorns(id);
      }
      else {
        animationTypeHead(id);
      }
      break
    case 3:
      animationTypeTailEnd(id);
      break
    case 4:
      animationTypeWings(id);
      break
  }
}

// Function does the same as case 2 in animationVariations,
// but for the eye shapes
function eyeAnimationVariations(eyeShapeNum, id) {

  $(`#dragonId${id} #animationDna`).text(5);

  if(eyeShapeNum == 2) {
    animationHappyEyes(id);
  }
  else if(eyeShapeNum == 4) {
    animationRelaxedEyes(id);
  }
  else {
    animationRemainingEyes(id);
  }
}

function specialNum(lastNum, id) {
  $(`#dragonId${id} #specialDna`).text(lastNum);
}

function animationHappyEyes(id) {
  $(`#dragonId${id} .pupils`).addClass("happyEyes");
}

function animationRelaxedEyes(id) {
  $(`#dragonId${id} .pupils`).addClass("relaxedEyes");
}

function animationRemainingEyes(id) {
  $(`#dragonId${id} .pupils`).addClass("remainingEyes");
}

function animationTypeWings(id) {
  $(`#dragonId${id} #rightWing`).addClass("movingRightWing");
  $(`#dragonId${id} #leftWing`).addClass("movingLeftWing");
}

function animationTypeTailEnd(id) {
  $(`#dragonId${id} .tailEnd1`).addClass("movingTailEnd1");
  $(`#dragonId${id} .tailEnd2`).addClass("movingTailEnd2");
}

function animationTypeHead(id) {
  $(`#dragonId${id} #head`).addClass("tiltingHead");
  $(`#dragonId${id} .rightEar`).addClass("tiltingRightEar");
  $(`#dragonId${id} .leftEar`).addClass("tiltingLeftEar");
  $(`#dragonId${id} .topRightHorn, #dragonId${id} .topLeftHorn`).addClass("tiltingTopHorns");
  $(`#dragonId${id} .sideRightHorn1`).addClass("tiltingSideRightHorn1");
  $(`#dragonId${id} .sideRightHorn2`).addClass("tiltingSideRightHorn2");
  $(`#dragonId${id} .sideLeftHorn1`).addClass("tiltingSideLeftHorn1");
  $(`#dragonId${id} .sideLeftHorn2`).addClass("tiltingSideLeftHorn2");
}

function animationBladeHorns(id) {
  $(`#dragonId${id} .topRightHorn`).addClass("tiltingRightBladeHorn");
  $(`#dragonId${id} .topLeftHorn`).addClass("tiltingLeftBladeHorn");
  $(`#dragonId${id} #head`).addClass("tiltingHead");
  $(`#dragonId${id} .rightEar`).addClass("tiltingRightEar");
  $(`#dragonId${id} .leftEar`).addClass("tiltingLeftEar");
  $(`#dragonId${id} .sideRightHorn1`).addClass("tiltingSideRightHorn1");
  $(`#dragonId${id} .sideRightHorn2`).addClass("tiltingSideRightHorn2");
  $(`#dragonId${id} .sideLeftHorn1`).addClass("tiltingSideLeftHorn1");
  $(`#dragonId${id} .sideLeftHorn2`).addClass("tiltingSideLeftHorn2");
}

function animationCenteredHorns(id) {
  $(`#dragonId${id} .topRightHorn`).addClass("tiltingRightCenteredHorn");
  $(`#dragonId${id} .topLeftHorn`).addClass("tiltingLeftCenteredHorn");
  $(`#dragonId${id} #head`).addClass("tiltingHead");
  $(`#dragonId${id} .rightEar`).addClass("tiltingRightEar");
  $(`#dragonId${id} .leftEar`).addClass("tiltingLeftEar");
  $(`#dragonId${id} .sideRightHorn1`).addClass("tiltingSideRightHorn1");
  $(`#dragonId${id} .sideRightHorn2`).addClass("tiltingSideRightHorn2");
  $(`#dragonId${id} .sideLeftHorn1`).addClass("tiltingSideLeftHorn1");
  $(`#dragonId${id} .sideLeftHorn2`).addClass("tiltingSideLeftHorn2");
}

function animationSmallHorns(id) {
  $(`#dragonId${id} #head`).addClass("tiltingHead");
  $(`#dragonId${id} .rightEar`).addClass("tiltingRightEar");
  $(`#dragonId${id} .leftEar`).addClass("tiltingLeftEar");
  $(`#dragonId${id} .topRightHorn, #dragonId${id} .topLeftHorn`).addClass("tiltingSmallHorns");
  $(`#dragonId${id} .sideRightHorn1`).addClass("tiltingSideRightHorn1");
  $(`#dragonId${id} .sideRightHorn2`).addClass("tiltingSideRightHorn2");
  $(`#dragonId${id} .sideLeftHorn1`).addClass("tiltingSideLeftHorn1");
  $(`#dragonId${id} .sideLeftHorn2`).addClass("tiltingSideLeftHorn2");
}

function animationRoundedHorns(id) {
  $(`#dragonId${id} #head`).addClass("tiltingHead");
  $(`#dragonId${id} .rightEar`).addClass("tiltingRightEar");
  $(`#dragonId${id} .leftEar`).addClass("tiltingLeftEar");
  $(`#dragonId${id} .topRightHorn, #dragonId${id} .topLeftHorn`).addClass("tiltingRoundedHorns");
  $(`#dragonId${id} .sideRightHorn1`).addClass("tiltingSideRightHorn1");
  $(`#dragonId${id} .sideRightHorn2`).addClass("tiltingSideRightHorn2");
  $(`#dragonId${id} .sideLeftHorn1`).addClass("tiltingSideLeftHorn1");
  $(`#dragonId${id} .sideLeftHorn2`).addClass("tiltingSideLeftHorn2");
}

function eyesTypeHappy(id) {
  $(`#dragonId${id} .pupils`).css("transform", "rotate(244deg)");
}

function eyesTypeRound(id) {
  $(`#dragonId${id} .innerPupils`).css({
    "box-shadow": "inset 20px 20px black",
    "left": "7px",
    "top": "4px"
  });
}

function eyesTypeRelaxed(id) {
  $(`#dragonId${id} .eyes`).css("border-bottom", "20px solid");
  $(`#dragonId${id} .innerPupils`).css({
    "box-shadow": "inset black -2px -6px 0px -3px",
    "transform": "rotate(192deg)"
  });
  $(`#dragonId${id} .pupils`).css({
    "border-bottom": "10px solid",
    "transform": "rotate(22deg)",
    "left": "2px"
  });
}

function eyesTypePointy(id) {
  $(`#dragonId${id} .innerPupils`).css({
    "box-shadow": "inset 20px 20px black",
    "transform": "rotate(129deg)",
    "height": "21px",
    "left": "12px",
    "width": "6px",
    "top": "1px"
  });
}

function eyesTypeZen(id) {
  $(`#dragonId${id} .innerPupils`).css({
    "box-shadow": "inset 20px 20px black",
    "transform": "rotate(44deg)",
    "height": "21px",
    "left": "11px",
    "width": "6px",
    "top": "1px"
  });
}

function eyesTypeMoon(id) {
  $(`#dragonId${id} .innerPupils`).css({
    "transform": "rotate(225deg)",
    "height": "11px",
    "width": "20px",
    "left": "2px",
    "top": "10px"
  });
}

function hornsTypeCentered(id) {
  $(`#dragonId${id} .topRightHorn`).css({
    "transform": "scale(1,-1) rotate(66deg)",
    "left": "87px"
  });
  $(`#dragonId${id} .topLeftHorn`).css({
    "transform": "rotate(66deg)",
    "left": "20px"
  });
  $(`#dragonId${id} .topHorns`).css({
    "height": "79px",
    "width": "76px"
  });
}

function hornsTypeSmall(id) {
  $(`#dragonId${id} .topRightHorn`).css("left", "89px");
  $(`#dragonId${id} .topLeftHorn`).css("left", "32px");
  $(`#dragonId${id} .topHorns`).css({
    "top": "-9px",
    "transform": "rotate(42deg)"
});
}

function hornsTypeRounded(id) {
  $(`#dragonId${id} .topLeftHorn`).css("left", "36px");
  $(`#dragonId${id} .topHorns`).css({
    "border-radius": "0px 43px 9px 41px",
    "height": "59px",
    "width": "57px"
  });
}

function hornsTypeBlades(id) {
  $(`#dragonId${id} .topHorns`).css({
    "height": "76px",
    "width": "31px",
    "top": "-30px"
  });
  $(`#dragonId${id} .topRightHorn`).css({
    "transform": "rotate(30deg)",
    "left": "107px"
  });
  $(`#dragonId${id} .topLeftHorn`).css({
    "transform": "scale(1, -1) rotate(30deg)",
    "left": "47px"
  });
}
