
var colors = Object.values(allColors())

var defaultDNA = {
    "headBodyColor" : 10,
    "wingsTailColor" : 13,
    "eyesColor" : 96,
    "earsColor" : 10,
    //Cattributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headBodyColor);
  $('#wingsTailDna').html(defaultDNA.wingsTailColor);
  $('#dnaeyes').html(defaultDNA.eyesColor);
  $('#dnaears').html(defaultDNA.earsColor);

//   $('#dnashape').html(defaultDNA.eyesShape)
//   $('#dnadecoration').html(defaultDNA.decorationPattern)
//   $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
//   $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
//   $('#dnaanimation').html(defaultDNA.animation)
//   $('#dnaspecial').html(defaultDNA.lastNum)

  renderHeadBody(defaultDNA)
  renderWingsTail(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#wingsTailDna').html()
    dna += $('#dnaeyes').html()
    dna += $('#dnaears').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    return parseInt(dna)
}

function renderHeadBody(dna){
    headBodyColor(colors[dna.headBodyColor],dna.headBodyColor)
    $('#bodycolor').val(dna.headBodyColor)
}

function renderWingsTail(dna){
    wingsTailColor(colors[dna.wingsTailColor],dna.wingsTailColor)
    $('#wingsTailColor').val(dna.wingsTailColor)
}

// Listening for change
$('#bodycolor').change(()=>{
    // Make a color value = to the id body color with the value
    var colorVal = $('#bodycolor').val()
    // Call function headColor with the color value in the colors object and color value as arguments
    headBodyColor(colors[colorVal],colorVal)
})

// Listening for change
$('#wingsTailColor').change(()=>{
    // Make a color value = to the id body color with the value
    var colorVal = $('#wingsTailColor').val()
    // Call function wingsTailColor with the color value in the colors object and color value as arguments
    wingsTailColor(colors[colorVal],colorVal)
})
