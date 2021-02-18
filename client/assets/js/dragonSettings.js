/* dragonSettings.js creats objects for default and random dna,
   calls the functions in dragonFactory.js to render colors and attributes */

var colors = Object.values(allColors());

var defaultDnaCode = {
  // Default dna dragon colors
  "headBodyColor": 12,
  "wingsTailColor": 22,
  "legsArmsColor": 38,
  "eyesColor": 44,
  // Default dna dragon atributes
  "eyeShape": 3,
  "hornShape": 4,
  "topHornsColor": 59,
  "sideHornsColor": 61,
  "animation": 1,
  "lastNum": 1
}

$(document).ready(function() {
  $("#headBodyDna").html(defaultDnaCode.headBodyColor);
  $("#wingsTailDna").html(defaultDnaCode.wingsTailColor);
  $("#legsArmsDna").html(defaultDnaCode.legsArmsColor);
  $("#eyesDna").html(defaultDnaCode.eyesColor);
  $("#eyeShapeDna").html(defaultDnaCode.eyeShape);
  $("#hornShapeDna").html(defaultDnaCode.hornShape);
  $("#topHornsDna").html(defaultDnaCode.topHornsColor);
  $("#sideHornsDna").html(defaultDnaCode.sideHornsColor);
  $("#animationDna").html(defaultDnaCode.animation);
  $("#specialDna").html(defaultDnaCode.lastNum);

  renderDragon(defaultDnaCode);
});

function getDna() {
  let dna = "";
  dna += $("#headBodyDna").html();
  dna += $("#wingsTailDna").html();
  dna += $("#legsArmsDna").html();
  dna += $("#eyesDna").html();

  dna += $("#eyeShapeDna").html();
  dna += $("#hornShapeDna").html();
  dna += $("#topHornsDna").html();
  dna += $("#sideHornsDna").html();
  dna += $("#animationDna").html();
  dna += $("#specialDna").html();
  return parseInt(dna);
}

$("#defaultDragonBtn").click(function() {
  renderDragon(defaultDnaCode);
});


$("#randomDragonBtn").click(function() {
  let randomCode = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // random numbers for each colors and attributes
  let randomDnaCode = {
    "headBodyColor": randomCode(10, 20),
    "wingsTailColor": randomCode(21, 31),
    "legsArmsColor": randomCode(32, 42),
    "eyesColor": parseInt(randomCode(43, 52)),

    "eyeShape": randomCode(1, 7),
    "hornShape": randomCode(1, 5),
    "topHornsColor": randomCode(53, 59),
    "sideHornsColor": randomCode(60, 66),
    "animation": randomCode(1, 5)
  }

  renderDragon(randomDnaCode);
});

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

  animationVariations(dnaCode.animation, dnaCode.hornShape);
  $("#animation").val(dnaCode.animation);

  if(dnaCode.animation == 5) {
    eyeAnimationVariations(dnaCode.eyeShape);
  }
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
  // does the same as eye shape but with horn shape
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

  // When animation is dilating eyes, calls function
  // to separately change the eye shape value
  if(animationVal == 5) {
    eyeAnimationVariations(eyeShapeVal);
  }
  else {
    animationVariations(animationVal, hornShapeVal);
  }
});
