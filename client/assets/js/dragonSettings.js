// Create a variable that stores the result of the object call
var colors = Object.values(allColors());

// Make a variable for the default dna object
var defaultDnaCode = {
  // Dragon colors
  "headBodyColor": 1,
  "wingsTailColor": 11,
  "eyesColor": 21,
  "legsArmsColor": 31,
  // Dragon atributes
  "eyeShape": 1,
  "hornShape": 1,
  "midColorDecoration": 13,
  "sideColorDecoration": 13,
  "animation": 1,
  "lastNum": 1
}

// Prepare the document
$(document).ready(function() {
  // The head and body color is set with the default dna code
  $("#headBodyDna").html(defaultDnaCode.headBodyColor);
  // The wings and tail color is set with the default dna code
  $("#wingsTailDna").html(defaultDnaCode.wingsTailColor);
  // The eyes color is set with the default dna code
  $("#eyesDna").html(defaultDnaCode.eyesColor);
  // The legs and arms color is set with the default dna code
  $("#legsArmsDna").html(defaultDnaCode.legsArmsColor);

  // The eyes shape is set with the default dna code
  $("#eyeShapeDna").html(defaultDnaCode.eyeShape);
  // The decoration patern is set with the default dna code
  $("#hornShapeDna").html(defaultDnaCode.hornShape);
  // The mid color decoration is set with the default dna code
  $("#midDecorationDna").html(defaultDnaCode.midColorDecoration);
  // The side color decoration is set with the default dna code
  $("#sideDecorationDna").html(defaultDnaCode.sideColorDecoration);
  // The animation is set with the default dna code
  $("#animationDna").html(defaultDnaCode.animation);
  $("#specialDna").html(defaultDnaCode.lastNum);

  // Render the dragon with the default dna code
  renderDragon(defaultDnaCode);
  renderHorns(defaultDnaCode);
});

// Make a function to get the dna
function getDna() {
  // Make a variable dna that is empty
  var dna = "";
  // dna += the head and body dna
  dna += $("#headBodyDna").html();
  // dna += the wings and tail dna
  dna += $("#wingsTailDna").html();
  // dna += eyes dna
  dna += $("#eyesDna").html();
  // dna += legs and arms dna
  dna += $("#legsArmsDna").html();

  // dna += the shape dna
  dna += $("#eyeShapeDna").html();
  // dna += the decoration dna
  dna += $("#hornShapeDna").html();
  // dna += the mid decoration dna
  dna += $("#midDecorationDna").html();
  // dna += sides decoration dna
  dna += $("#sideDecorationDna").html();
  // dna += the animation dna
  dna += $("#animationDna").html();
  dna += $("#specialDna").html();
  // returns the parseInt dna
  return parseInt(dna);
}

// Create a function to render the head and body with the dna code as an argument
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

  // Call function eyesColor with the eyes color dna code of the colors object call as the first argument
  // and the eyes color dna code as the second arguments
  eyesColor(colors[dnaCode.eyesColor], dnaCode.eyesColor);
  // Sets the eyes color with the dna code
  $("#eyesColor").val(dnaCode.eyesColor);

  // Call function legsArmsColor with the legs and arms color dna code of the colors object call as the first argument
  // and the legs and arms color dna code as the second arguments
  legsArmsColor(colors[dnaCode.legsArmsColor], dnaCode.legsArmsColor);
  // Sets the legs and arms color with the dna code
  $("#legsArmsColor").val(dnaCode.legsArmsColor);

  // Call function eyeVariation with the eyes shape dna code as an argument
  eyeVariation(dnaCode.eyeShape);
  // Sets the the eyes shape with the dna code
  $("#eyeShape").val(dnaCode.eyeShape);


}

function renderHorns(dnaCode) {
  hornVariation(dnaCode.hornShape);
  $("hornShape").val(dnaCode.hornShape);
}

console.log(hornVariation());


// Listening for change in headBodyColor id
$("#headBodyColor").change(() => {
  // Make a color value = to the headBodyColor id that returns the value attribute
  var colorVal = $("#headBodyColor").val();
  // Call function headBodyColor with the color value of the colors object call and color value as arguments
  headBodyColor(colors[colorVal], colorVal);
})

// Listening for change in wingsTailColor id
$("#wingsTailColor").change(() => {
  // Make a color value = to the wingsTailColor id that returns the value attribute
  var colorVal = $("#wingsTailColor").val();
  // Call function wingsTailColor with the color value of the colors object call and color value as arguments
  wingsTailColor(colors[colorVal], colorVal);
})

// Listening for change in eyesColor id
$("#eyesColor").change(() => {
  // Make a color value = to the eyesColor id that returns the value attribute
  var colorVal = $("#eyesColor").val();
  // Call function eyesColor with the colors color value and color value as arguments
  eyesColor(colors[colorVal], colorVal);
})

// Listening for change in legsArmsColor id
$("#legsArmsColor").change(() => {
  // Make a color value = to the legsArmsColor id that returns the value attribute
  var colorVal = $("#legsArmsColor").val();
  // Call function legsArmsColor with the color value of the colors object call and color value as arguments
  legsArmsColor(colors[colorVal], colorVal);
})

// Listening for change in eyesShape id
$("#eyeShape").change(() => {
  // Make a variable shape = to the parseInt eyesShape id that returns the value attribute
  var shape = parseInt($("#eyeShape").val());
  // Call function eyeVariation with the shape as an argument
  eyeVariation(shape);
})

$("hornShape").change(() => {
  var shape = parseInt($("hornShape").val());
  hornVariation(shape);
})
