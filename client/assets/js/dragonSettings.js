// Create a variable that stores the result of the object call
var colors = Object.values(allColors());

// Make a variable for the default dna object
var defaultDnaCode = {
  // Dragon colors
  "headBodyColor": 12,
  "wingsTailColor": 21,
  "legsArmsColor": 36,
  "eyesColor": 41,
  // Dragon atributes
  "eyeShape": 3,
  "hornShape": 3,
  "topHornsColor": 56,
  "sideHornsColor": 58,
  "animation": 1,
  "lastNum": 1
}

var randomDnaCode = {

}

// Prepare the document
$(document).ready(function() {
  // The head and body color is set with the default dna code
  $("#headBodyDna").html(defaultDnaCode.headBodyColor);
  // The wings and tail color is set with the default dna code
  $("#wingsTailDna").html(defaultDnaCode.wingsTailColor);
  // The legs and arms color is set with the default dna code
  $("#legsArmsDna").html(defaultDnaCode.legsArmsColor);
  // The eyes color is set with the default dna code
  $("#eyesDna").html(defaultDnaCode.eyesColor);
  // The eye shape is set with the default dna code
  $("#eyeShapeDna").html(defaultDnaCode.eyeShape);
  // The horn shape is set with the default dna code
  $("#hornShapeDna").html(defaultDnaCode.hornShape);
  // The top horns color is set with the default dna code
  $("#topHornsDna").html(defaultDnaCode.topHornsColor);
  // The side horns color is set with the default dna code
  $("#sideHornsDna").html(defaultDnaCode.sideHornsColor);
  // The animation is set with the default dna code
  $("#animationDna").html(defaultDnaCode.animation);
  $("#specialDna").html(defaultDnaCode.lastNum);

  // Render the dragon with the default dna code
  renderDragon(defaultDnaCode);
});

// Make a function to get the dna
function getDna() {
  // Make a variable dna that is empty
  var dna = "";
  // dna += the head and body dna
  dna += $("#headBodyDna").html();
  // dna += the wings and tail dna
  dna += $("#wingsTailDna").html();
  // dna += legs and arms dna
  dna += $("#legsArmsDna").html();
  // dna += eyes dna
  dna += $("#eyesDna").html();

  // dna += the shape dna
  dna += $("#eyeShapeDna").html();
  // dna += the decoration dna
  dna += $("#hornShapeDna").html();
  // dna += the mid decoration dna
  dna += $("#topHornsDna").html();
  // dna += sides decoration dna
  dna += $("#sideHornsDna").html();
  // dna += the animation dna
  dna += $("#animationDna").html();
  dna += $("#specialDna").html();
  // returns the parseInt dna
  return parseInt(dna);
}

$("#defaultDragonBtn").click(function() {
  renderDragon(defaultDnaCode);
});


$("#randomDragonBtn").click(function() {
  renderDragon(randomDnaCode);
});

// Create a function to render the dragon with the dna code as an argument
function renderDragon(dnaCode) {
  // Call function headBodyColor with the head and body color dna code of the colors object call as the first argument
  // and the head and body color dna code as the second argument
  headBodyColor(colors[dnaCode.headBodyColor], dnaCode.headBodyColor);
  // Sets the head and body color with the dna code
  $("#headBodyColor").val(dnaCode.headBodyColor);

  // Call function wingsTailColor with the wings and tail color dna code of the colors object call as the first argument
  // and the wings and tail color dna code as the second argument
  wingsTailColor(colors[dnaCode.wingsTailColor], dnaCode.wingsTailColor);
  // Sets the wings and tail color with the dna code
  $("#wingsTailColor").val(dnaCode.wingsTailColor);

  // Call function legsArmsColor with the legs and arms color dna code of the colors object call as the first argument
  // and the legs and arms color dna code as the second arguments
  legsArmsColor(colors[dnaCode.legsArmsColor], dnaCode.legsArmsColor);
  // Sets the legs and arms color with the dna code
  $("#legsArmsColor").val(dnaCode.legsArmsColor);

  // Call function eyesColor with the eyes color dna code of the colors object call as the first argument
  // and the eyes color dna code as the second arguments
  eyesColor(colors[dnaCode.eyesColor], dnaCode.eyesColor);
  // Sets the eyes color with the dna code
  $("#eyesColor").val(dnaCode.eyesColor);

  // Call function eyeVariation with the eyes shape dna code and animation dna code as arguments
  eyeVariation(dnaCode.eyeShape, dnaCode.animation);
  // Sets the the eyes shape with the dna code
  $("#eyeShape").val(dnaCode.eyeShape);

  // Call function hornVariation with the horn shape dna code and animation dna code as arguments
  hornVariation(dnaCode.hornShape, dnaCode.animation);
  // Sets the horn shape with the dna code
  $("#hornShape").val(dnaCode.hornShape);

  // Call function topHornsColor with the top horns color dna code of the colors object call as the first argument
  // and the top horns color dna code as the second argument
  topHornsColor(colors[dnaCode.topHornsColor], dnaCode.topHornsColor);
  // Sets the top horns color with the dna code
  $("#topHornsColor").val(dnaCode.topHornsColor);

  // Call function sideHornsColor with the side horns color dna code of the colors object call as the first argument
  // and the side horns color dna code as the second argument
  sideHornsColor(colors[dnaCode.sideHornsColor], dnaCode.sideHornsColor);
  // Sets the side horns color with the dna code
  $("#sideHornsColor").val(dnaCode.sideHornsColor);

  // Call function animationVariations with the animation dna code and horn shape dna code as arguments
  animationVariations(dnaCode.animation, dnaCode.hornShape);
  // Sets the animation with the dna code
  $("#animation").val(dnaCode.animation);
}

// Listening for change in headBodyColor id
$("#headBodyColor").change(() => {
  // Make a color value = to the headBodyColor id that returns the value attribute
  let colorVal = $("#headBodyColor").val();
  // Call function headBodyColor with the color value of the colors object call and color value as arguments
  headBodyColor(colors[colorVal], colorVal);
});

// Listening for change in wingsTailColor id
$("#wingsTailColor").change(() => {
  // Make a color value = to the wingsTailColor id that returns the value attribute
  let colorVal = $("#wingsTailColor").val();
  // Call function wingsTailColor with the color value of the colors object call and color value as arguments
  wingsTailColor(colors[colorVal], colorVal);
});

// Listening for change in legsArmsColor id
$("#legsArmsColor").change(() => {
  // Make a color value = to the legsArmsColor id that returns the value attribute
  let colorVal = $("#legsArmsColor").val();
  // Call function legsArmsColor with the color value of the colors object call and color value as arguments
  legsArmsColor(colors[colorVal], colorVal);
});

// Listening for change in eyesColor id
$("#eyesColor").change(() => {
  // Make a color value = to the eyesColor id that returns the value attribute
  let colorVal = $("#eyesColor").val();
  // Call function eyesColor with the colors color value and color value as arguments
  eyesColor(colors[colorVal], colorVal);
});

// Listening for change in eyeShape id
$("#eyeShape").change(() => {
  // Make a variable shape = to the parseInt eyeShape id that returns the value attribute
  let shape = parseInt($("#eyeShape").val());
  // Make a variable animation = to the parseInt animation id that returns the value attribute
  let animation = parseInt($("#animation").val());
  // Call function eyeVariation with the shape and animation as arguments
  eyeVariation(shape, animation);
});

// Listening for change in hornShape id
$("#hornShape").change(() => {
  // Make a variable shape = to the parseInt hornShape id that returns the value attributes
  let shape = parseInt($("#hornShape").val());
  // Make a variable animation = to the parseInt animation id that returns the value attribute
  let animation = parseInt($("#animation").val());
  // Call function hornVariation with the shape and animation as arguments
  hornVariation(shape, animation);
});

// Listening for change in topHornsColor id
$("#topHornsColor").change(() => {
  // Make a color value = to the topHornsColor id that returns the value attribute
  let colorVal = $("#topHornsColor").val();
  // Call function topHornsColor with the color value of the colors object call and color value as arguments
  topHornsColor(colors[colorVal], colorVal);
});

// Listening for change in sideHornsColor id
$("#sideHornsColor").change(() => {
  // Make a color value = to the sideHornsColor id that returns the value attribute
  let colorVal = $("#sideHornsColor").val();
  // Call function sideHornsColor with the color value of the colors object call and color value as arguments
  sideHornsColor(colors[colorVal], colorVal);
});

// Listening for change in animation id
$("#animation").change(() => {
  // Make a variable animationVal = to the parseInt animation id that returns the value attributes
  let animationVal = parseInt($("#animation").val());
  // Make a variable hornShapeVal = to the parseInt hornShape id that returns the value attributes
  let hornShapeVal = parseInt($("#hornShape").val());
  // Make a variable eyeShapeVal = to the parseInt eyeShape id that returns the value attributes
  let eyeShapeVal = parseInt($("#eyeShape").val());

  // If the animationVal is == to 5
  if(animationVal == 5) {
    // Call function eyeAnimationVariations with 5 and eyeShapeVal as arguments
    eyeAnimationVariations(5, eyeShapeVal);
  }
  // Else, call function animationVariations with the animationVal and hornShapeVal as arguments
  else {
    animationVariations(animationVal, hornShapeVal);
  }
});
