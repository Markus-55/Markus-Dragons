
//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

// Make a function headcolor with color and code as argument
function headBodyColor(color, code) {
    // Change the head and body background color of the dragon
    $('#head, #body').css('background', '#' + color)
    // modifies the headcode id with html with the code in the slider
    $('#headcode').html('code: ' + code)
    // modifies the dnabody id with html with the code
    $('#dnabody').html(code)
}

// Make a function headcolor with color and code as argument
function wingsTailColor(color, code) {
    // Change the head and body background color of the dragon
    $('#wings, .tail').css('background', '#' + color)
    // modifies the headcode id with html with the code in the slider
    $('#wingsTailCode').html('code: ' + code)
    // modifies the dnabody id with html with the code
    $('#wingsTailDna').html(code)
}


//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            break
    }
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationName').html('Basic')
            normaldecoration()
            break
    }
}

async function normalEyes() {
    await $('.cat__eye').find('span').css('border', 'none')
}

async function normaldecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.cat__head-dots').css({ "transform": "rotate(0deg)", "height": "48px", "width": "14px", "top": "1px", "border-radius": "0 0 50% 50%" })
    $('.cat__head-dots_first').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "50% 0 50% 50%" })
    $('.cat__head-dots_second').css({ "transform": "rotate(0deg)", "height": "35px", "width": "14px", "top": "1px", "border-radius": "0 50% 50% 50%" })
}
