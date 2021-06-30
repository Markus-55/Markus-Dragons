/* dragonSettings.js creats objects for default and random dna,
   calls the functions in dragonFactory.js to render colors and attributes */

let defaultDnaCode = {
  // Default dna dragon colors
  headBodyColor: 40,
  wingsTailColor: 23,
  legsArmsColor: 91,
  eyesColor: 15,
  // Default dna dragon attributes
  eyeShape: 3,
  hornShape: 1,
  topHornsColor: 61,
  sideHornsColor: 65,
  animation: 1,
  lastNum: 1
}

$(document).ready(function() {
  // sets the colors and attributes dna
  $("#headBodyDna").text(defaultDnaCode.headBodyColor);
  $("#wingsTailDna").text(defaultDnaCode.wingsTailColor);
  $("#legsArmsDna").text(defaultDnaCode.legsArmsColor);
  $("#eyesDna").text(defaultDnaCode.eyesColor);
  $("#eyeShapeDna").text(defaultDnaCode.eyeShape);
  $("#hornShapeDna").text(defaultDnaCode.hornShape);
  $("#topHornsDna").text(defaultDnaCode.topHornsColor);
  $("#sideHornsDna").text(defaultDnaCode.sideHornsColor);
  $("#animationDna").text(defaultDnaCode.animation);
  $("#specialDna").text(defaultDnaCode.lastNum);

  renderDragon(defaultDnaCode);
});

function getDragonDna() {
  let dragonDna = "";
  dragonDna += $("#headBodyDna").html();
  dragonDna += $("#wingsTailDna").html();
  dragonDna += $("#legsArmsDna").html();
  dragonDna += $("#eyesDna").html();

  dragonDna += $("#eyeShapeDna").html();
  dragonDna += $("#hornShapeDna").html();
  dragonDna += $("#topHornsDna").html();
  dragonDna += $("#sideHornsDna").html();
  dragonDna += $("#animationDna").html();
  dragonDna += $("#specialDna").html();
  return dragonDna;
}

$("#defaultDragonBtn").click(() => renderDragon(defaultDnaCode));

$("#randomDragonBtn").click(() => {
  let randomCode = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // random numbers for each colors and attributes
  let randomDnaCode = {
    headBodyColor: randomCode(10, 91),
    wingsTailColor: randomCode(10, 91),
    legsArmsColor: randomCode(10, 91),
    eyesColor: parseInt(randomCode(10, 91)),

    eyeShape: randomCode(1, 7),
    hornShape: randomCode(1, 5),
    topHornsColor: randomCode(10, 91),
    sideHornsColor: randomCode(10, 91),
    animation: randomCode(1, 5),
  }

  renderDragon(randomDnaCode);
});

// Displays the dragon colors & attributes and the number code for the dna
function renderDragon(dnaCode) {
  headBodyColor(colors[dnaCode.headBodyColor], dnaCode.headBodyColor);
  $("#headBodyColor").val(dnaCode.headBodyColor);

  wingsTailColor(colors[dnaCode.wingsTailColor], dnaCode.wingsTailColor);
  $("#wingsTailColor").val(dnaCode.wingsTailColor);

  legsArmsColor(colors[dnaCode.legsArmsColor], dnaCode.legsArmsColor);
  $("#legsArmsColor").val(dnaCode.legsArmsColor);

  eyesColor(colors[dnaCode.eyesColor], dnaCode.eyesColor);
  $("#eyesColor").val(dnaCode.eyesColor);

  eyeVariation(dnaCode.eyeShape, dnaCode.animation);
  $("#eyeShape").val(dnaCode.eyeShape);

  hornVariation(dnaCode.hornShape, dnaCode.animation);
  $("#hornShape").val(dnaCode.hornShape);

  topHornsColor(colors[dnaCode.topHornsColor], dnaCode.topHornsColor);
  $("#topHornsColor").val(dnaCode.topHornsColor);

  sideHornsColor(colors[dnaCode.sideHornsColor], dnaCode.sideHornsColor);
  $("#sideHornsColor").val(dnaCode.sideHornsColor);

  if(dnaCode.animation == 5) {
    eyeAnimationVariations(dnaCode.eyeShape);
  }
  else {
    animationVariations(dnaCode.animation, dnaCode.hornShape);
  }
  $("#animation").val(dnaCode.animation);

}

// Listens for changes when the users moves the slider and
// calls functions in dragonFactory.js to change colors and attributes
$("#headBodyColor").change(() => {
  let colorVal = $("#headBodyColor").val();
  headBodyColor(colors[colorVal], colorVal);
});

$("#wingsTailColor").change(() => {
  let colorVal = $("#wingsTailColor").val();
  wingsTailColor(colors[colorVal], colorVal);
});

$("#legsArmsColor").change(() => {
  let colorVal = $("#legsArmsColor").val();
  legsArmsColor(colors[colorVal], colorVal);
});

$("#eyesColor").change(() => {
  let colorVal = $("#eyesColor").val();
  eyesColor(colors[colorVal], colorVal);
});

$("#eyeShape").change(() => {
  let shape = parseInt($("#eyeShape").val());
  let animation = parseInt($("#animation").val());
  // When animation is eyes dilating
  // correctly sets the eye shape
  eyeVariation(shape, animation);
});

$("#hornShape").change(() => {
  let shape = parseInt($("#hornShape").val());
  let animation = parseInt($("#animation").val());
  // same as eye shape but with horn shape instead,
  // when animation is tilting head
  hornVariation(shape, animation);
});

$("#topHornsColor").change(() => {
  let colorVal = $("#topHornsColor").val();
  topHornsColor(colors[colorVal], colorVal);
});

$("#sideHornsColor").change(() => {
  let colorVal = $("#sideHornsColor").val();
  sideHornsColor(colors[colorVal], colorVal);
});

$("#animation").change(() => {
  let animationVal = parseInt($("#animation").val());
  let hornShapeVal = parseInt($("#hornShape").val());
  let eyeShapeVal = parseInt($("#eyeShape").val());

  // Calls first function if the selected animation is Dilating Eyes
  // or calls the other function if one of the 4 other animation is selected
  // customises the animations so that current eye or horn shape is correctly set
  if(animationVal == 5) {
    eyeAnimationVariations(eyeShapeVal, animationVal);
  }
  else {
    animationVariations(animationVal, hornShapeVal);
  }
});
