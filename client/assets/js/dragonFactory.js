
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function genColors(){
    var colors = [];
    for(var i = 10; i < 99; i ++){
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
    $(".tailEnd1, .tailEnd2").css("border-left-color", "#" + color);
    // Modifies the wingsTailCode id with the code in the slider
    $("#wingsTailCode").html("code: " + code);
    // Modifies the wingsTailDna id with the code
    $("#wingsTailDna").html(code);
}

// Make a function eyesColor with a color and code as arguments
function eyesColor(color, code) {
  // Change the pupils background color
  $(".pupils").css("background", "#" + color);
  // Modifies eyesCode with the code in the slider
  $("#eyesCode").html("code: " + code);
  // Modifies the eyesDna id with the code
  $("#eyesDna").html(code);
}

// Make a function legsArmsColor with a color and code as arguments
function legsArmsColor(color, code) {
  // Change the legs and arms background color
  $(".legs, .feet, .arms").css("background", "#" + color)
  // Modifies the legsArmsCode with the code in the slider
  $("#legsArmsCode").html("code: " + code);
  // Modifies the legsArmsDna with the code
  $("#legsArmsDna").html(code);
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num);
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num);
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none');
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" });
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" });
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" });
}
