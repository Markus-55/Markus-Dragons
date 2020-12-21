// Create a variable that stores the result of the object call
var colors = Object.values(allColors())

// Make a variable for the default dna object
var defaultDNA = {
  // Dragon colors
  "headBodyColor": 1,
  "wingsTailColor": 11,
  "eyesColor": 21,
  "legsArmsColor": 31,
  // Dragon atributes
  "eyesShape": 1,
  "decorationPattern": 1,
  "decorationMidcolor": 13,
  "decorationSidescolor": 13,
  "animation": 1,
  "lastNum": 1
}
// Prepare the document
$(document).ready(function() {
  // Head and body color id is set
  $("#headBodyDna").html(defaultDNA.headBodyColor);
  // Wings and tail color id is set
  $("#wingsTailDna").html(defaultDNA.wingsTailColor);
  // Eyes color id is set
  $("#eyesDna").html(defaultDNA.eyesColor);
  // Legs and arms color is set
  $("#legsArmsDna").html(defaultDNA.legsArmsColor);

  // $('#dnashape').html(defaultDNA.eyesShape);
  // $('#dnadecoration').html(defaultDNA.decorationPattern);
  // $('#dnadecorationMid').html(defaultDNA.decorationMidcolor);
  // $('#dnadecorationSides').html(defaultDNA.decorationSidescolor);
  // $('#dnaanimation').html(defaultDNA.animation);
  // $('#dnaspecial').html(defaultDNA.lastNum);

  // Call function renderHeadBody with the default dna as an argument
  renderHeadBody(defaultDNA);
  // Call function renderWingsTail with the default dna as an argument
  renderWingsTail(defaultDNA);
  // Call function renderEyes with the default dna as an argument
  renderEyes(defaultDNA);
  // Call function renderLegsArms with the default dna as an argument
  renderLegsArms(defaultDNA);
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

  // will be used later
  dna += $("#dnashape").html();
  dna += $("#dnadecoration").html();
  dna += $("#dnadecorationMid").html();
  dna += $("#dnadecorationSides").html();
  dna += $("#dnaanimation").html();
  dna += $("#dnaspecial").html();
  // returns the parseInt dna
  return parseInt(dna);
}

// Create a function to render the head and body with the dna as an argument
function renderHeadBody(dna) {
  // Call function headBodyColor with the color of the head and body color dna
  // and the head and body color dna as arguments
  headBodyColor(colors[dna.headBodyColor], dna.headBodyColor);
  // Sets the head and body color dna in the headBodyColor id
  $("#headBodyColor").val(dna.headBodyColor);
}

// create a function to render the wings and the tail with the dna as the argument
function renderWingsTail(dna) {
  // Call function wingsTailColor with the color of the wings and tail color dna
  // and the wings and tail color dna as arguments
  wingsTailColor(colors[dna.wingsTailColor], dna.wingsTailColor);
  // Sets the wings and tail color in the wingsTailColor id
  $("#wingsTailColor").val(dna.wingsTailColor);
}

// Create a function to render the eyes with the dna as argument
function renderEyes(dna) {
  // Call function eyesColor with the color of the eyes color dna
  // and the eyes color dna as arguments
  eyesColor(colors[dna.eyesColor], dna.eyesColor);
  // Sets the eyes color in the eyesColor id
  $("#eyesColor").val(dna.eyesColor);
}

// create a function to render the legs and arms with the dna as argument
function renderLegsArms(dna) {
  // Call function legsArmsColor with the color of the legs and arms color dna
  // and the legs and arms color dna as arguments
  legsArmsColor(colors[dna.legsArmsColor], dna.legsArmsColor);
  // Sets the legs and arms dna in the legsArmscolor id
  $("#legsArmsColor").val(dna.legsArmsColor);
}

// Listening for change in headBodyColor id
$("#headBodyColor").change(() => {
  // Make a color value = to the headBodyColor id with the value
  var colorVal = $("#headBodyColor").val();
  // Call function headBodyColor with the colors color value and color value as arguments
  headBodyColor(colors[colorVal], colorVal);
})

// Listening for change in wingsTailColor id
$("#wingsTailColor").change(() => {
  // Make a color value = to the wingsTailColor id with the value
  var colorVal = $("#wingsTailColor").val();
  // Call function wingsTailColor with the colors color value and color value as arguments
  wingsTailColor(colors[colorVal], colorVal);
})

// Listening for change in eyesColor id
$("#eyesColor").change(() => {
  // Make a color value = to the eyesColor id with the value
  var colorVal = $("#eyesColor").val();
  // Call function eyesColor with the colors color value and color value as arguments
  eyesColor(colors[colorVal], colorVal);
})

// Listening for change in legsArmsColor id
$("#legsArmsColor").change(() => {
  // Make a color value = to the legsArmsColor id with the value
  var colorVal = $("#legsArmsColor").val();
  // Call function legsArmsColor with the colors color value and color value as arguments
  legsArmsColor(colors[colorVal], colorVal);
})
