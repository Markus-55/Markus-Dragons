/* dragonStorage.js uses the functions from Dragoncontract.sol that gets all the dragons that the user owns
   and displays them with all their attributes, colors & animations on the page: myDragons.html */

var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x5DE98d1E02cBE3Ce072F26eE108725cd34b4663D";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(instance);

  storedDragons();
});

function storedDragons() {
  try {
    instance.methods.allOwnedDragons().call({}, async (error, ownedDragonIds) => {

      for(let i = 0; i < ownedDragonIds.length; i++) {
        let id = await ownedDragonIds[i];

        instance.methods.getDragon(id).call({}, async (error, result) => {
          let dragonData = await result;

          controlFunction(dragonData, id);
        });
      }
    });
  }
  catch(error) {
    console.log(error);
  }
}

function controlFunction(dragonData, id) {
  dragonHtml(id);

  let dnaObject = dragonObj(dragonData);

  dragonDetails(dragonData, id);

  renderOwnedDragons(dnaObject, id);
}

function dragonHtml(id) {
  let dragonStr =
  `<div class="col-xl-3 col-lg-4 col-sm-6" id="dragonId${id}">
    <div id="myDragonBox">
      <div id="idDragon">Dragon Id: ${id}</div>
      <div id="myDragon">
        <div id="rightWing">
          <div class="wings rightWingPart1"></div>
          <div class="wings rightWingPart2"></div>
          <div class="wings rightWingPart3"></div>
          <div class="wings rightWingPart4"></div>
        </div>
        <div id="leftWing">
          <div class="wings leftWingPart1"></div>
          <div class="wings leftWingPart2"></div>
          <div class="wings leftWingPart3"></div>
          <div class="wings leftWingPart4"></div>
        </div>
        <div id="tail">
          <div class="tailScale tailScale1"></div>
          <div class="tailScale tailScale2"></div>
          <div class="tailScale tailScale3"></div>
          <div class="tailScale tailScale4"></div>
          <div class="tailScale tailScale5"></div>
          <div class="tailScale tailScale6"></div>
          <div class="tailScale tailScale7"></div>
          <div class="tailScale tailScale8"></div>
          <div class="tailScale tailScale9"></div>
          <div class="tailScale tailScale10"></div>
          <div class="tailScale tailScale11"></div>
          <div class="tailScale tailScale12"></div>
          <div class="tailScale tailScale13"></div>
          <div class="tailScale tailScale14"></div>
          <div class="tailScale tailScale15"></div>
          <div class="tailScale tailScale16"></div>
          <div class="tailScale tailScale17"></div>
          <div class="tailScale tailScale18"></div>
          <div class="tailScale tailScale19"></div>
          <div class="tailScale tailScale20"></div>
          <div class="tailScale tailScale21"></div>
          <div class="tailScale tailScale22"></div>
          <div class="tailScale tailScale23"></div>
          <div class="tailScale tailScale24"></div>
          <div class="tailScale tailScale25"></div>
          <div class="tailScale tailScale26"></div>
          <div class="tailScale tailScale27"></div>
          <div class="tailScale tailScale28"></div>
          <div class="tailScale tailScale29"></div>
          <div class="tailScale tailScale30"></div>
          <div class="tailScale tailScale31"></div>
          <div class="tailScale tailScale32"></div>
          <div class="tail tailPart1"></div>
          <div class="tail tailPart2"></div>
          <div class="tail tailPart3"></div>
          <div class="tail tailPart4"></div>
          <div class="tail tailPart5"></div>
          <div class="tail tailPart6"></div>
          <div class="tail tailPart7"></div>
          <div class="tailEnd tailEnd1"></div>
          <div class="tailEnd tailEnd2"></div>
        </div>
        <div id="body">
          <div class="feet rightFoot"></div>
          <div class="feet leftFoot"></div>
          <div class="legs rightLeg"></div>
          <div class="legs leftLeg"></div>
          <div class="arms rightArm"></div>
          <div class="arms leftArm"></div>
          <div class="hand handPart1"></div>
          <div class="hand handPart2"></div>
          <div class="hand handPart3"></div>
          <div class="hand handPart4"></div>
          <div class="scales armScales scale11"></div>
          <div class="scales armScales scale12"></div>
          <div class="scales armScales scale13"></div>
          <div class="scales armScales scale14"></div>
          <div class="scales armScales scale15"></div>
          <div class="scales armScales scale16"></div>
          <div class="scales bodyScales scale17"></div>
          <div class="scales bodyScales scale18"></div>
          <div class="scales bodyScales scale19"></div>
        </div>
        <div class="ears rightEar"></div>
        <div class="ears leftEar"></div>
        <div class="topHorns topRightHorn"></div>
        <div class="topHorns topLeftHorn"></div>
        <div class="sideHorns sideRightHorn1"></div>
        <div class="sideHorns sideRightHorn2"></div>
        <div class="sideHorns sideLeftHorn1"></div>
        <div class="sideHorns sideLeftHorn2"></div>
        <div id="head">
          <div class="scales headScales scale1"></div>
          <div class="scales headScales scale2"></div>
          <div class="scales headScales scale3"></div>
          <div class="scales headScales scale4"></div>
          <div class="scales headScales scale5"></div>
          <div class="scales headScales scale6"></div>
          <div class="scales headScales scale7"></div>
          <div class="scales headScales scale8"></div>
          <div class="scales headScales scale9"></div>
          <div class="scales headScales scale10"></div>
          <div class="eyes rightEye">
            <div class="pupils">
              <div class="innerPupils"></div>
            </div>
          </div>
          <div class="eyes leftEye">
            <div class="pupils">
              <div class="innerPupils"></div>
            </div>
          </div>
          <div class="nose nostril1"></div>
          <div class="nose nostril2"></div>
          <div class="mouth mouthPart1"></div>
          <div class="mouth mouthPart2"></div>
          <div class="mouth mouthPart3"></div>
          <div class="mouth mouthPart4"></div>
          <div class="mouth mouthPart5"></div>
          <div class="mouth mouthPart6"></div>
          <div class="mouth mouthPart7"></div>
          <div class="teeth tooth1"></div>
          <div class="teeth tooth2"></div>
        </div>
      </div>
    </div>
    <div id="myDragonDna">
      <b>
        DNA:
        <!-- Colors -->
        <span id="headBodyDna"></span>
        <span id="wingsTailDna"></span>
        <span id="legsArmsDna"></span>
        <span id="eyesDna"></span>
        <!-- Dragon attributes -->
        <span id="eyeShapeDna"></span>
        <span id="hornShapeDna"></span>
        <span id="topHornsDna"></span>
        <span id="sideHornsDna"></span>
        <span id="animationDna"></span>
        <span id="specialDna"></span>
      </b>
    </div>
    <div id="generation"></div>
    <div id="birthTime"></div>
    <div id="dadId"></div>
    <div id="momId"></div>
  </div>`;

  console.log(dragonStr);
  $("#dragonObject").append(dragonStr);
}

function dragonObj(dragonData) {
  let genes = dragonData.genes.split('');
  console.log(genes);

  let storedDragonsObj = {
    // Dna dragon colors
    "headBodyColor": genes[0] + genes[1],
    "wingsTailColor": genes[2] + genes[3],
    "legsArmsColor": genes[4] + genes[5],
    "eyesColor": genes[6] + genes[7],
    // Dna dragon attributes
    "eyeShape": genes[8],
    "hornShape": genes[9],
    "topHornsColor": genes[10] + genes[11],
    "sideHornsColor": genes[12] + genes[13],
    "animation": genes[14],
    "lastNum": genes[15]
  }

  console.log(storedDragonsObj)
  return storedDragonsObj;
}

function dragonDetails(dragonData, id) {
  let milliseconds = dragonData.birthTime * 1000;
  let humanDateBirthTime = new Date(milliseconds).toLocaleString();

  $(`#dragonId${id} #generation`).append(`Generation: ${dragonData.generation}`);
  $(`#dragonId${id} #birthTime`).append(`Birth time: ${humanDateBirthTime}`);
  $(`#dragonId${id} #dadId`).append(`Dad id: ${dragonData.dadId}`);
  $(`#dragonId${id} #momId`).append(`Mom id: ${dragonData.momId}`);
}

function renderOwnedDragons(dnaObject, id) {

  let colors = Object.values(allColors());

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

  if(dnaObject.animation == 5) {
    eyeAnimationVariations(eyeShapeNum, animationNum, id);
  }
  else {
    animationVariations(animationNum, hornShapeNum, id);
  }
}

function headBodyColor(color, code, id) {
  $(`#dragonId${id} #head, #dragonId${id} #body`).css("background", "#" + color);
  $(`#dragonId${id} #headBodyDna`).html(code);
}

function wingsTailColor(color, code, id) {
  $(`#dragonId${id} .wings, #dragonId${id} .tailEnd`).css("border-left-color", "#" + color);
  $(`#dragonId${id} .tail`).css("background", "#" + color);
  $(`#dragonId${id} #wingsTailDna`).html(code);
}

function legsArmsColor(color, code, id) {
  $(`#dragonId${id} .legs, #dragonId${id} .feet, #dragonId${id} .arms`).css("background", "#" + color);
  $(`#dragonId${id} #legsArmsDna`).html(code);
}

function eyesColor(color, code, id) {
  $(`#dragonId${id} .pupils`).css("background", "#" + color);
  $(`#dragonId${id} #eyesDna`).html(code);
}

function topHornsColor(color, code, id) {
  $(`#dragonId${id} .topHorns`).css("background", "#" + color);
  $(`#dragonId${id} #topHornsDna`).html(code);
}

function sideHornsColor(color, code, id) {
  $(`#dragonId${id} .sideHorns`).css("background", "#" + color);
  $(`#dragonId${id} #sideHornsDna`).html(code);
}

function eyeVariation(eyeShapeNum, animationNum, id) {
$(`#dragonId${id} #eyeShapeDna`).html(eyeShapeNum);
switch (eyeShapeNum) {
  case 1:
    originalEyes(id);
    $(`#dragonId${id} #eyesName`).html("Original");
    // When animation is dilating eyes call function
    // to properly set the eye shape
    if(animationNum == 5) {
      eyeAnimationVariations(1, 5, id);
    }
    break
  case 2:
    originalEyes(id);
    $(`#dragonId${id} #eyesName`).html("Happy");
    eyesTypeHappy(id);
    if(animationNum == 5) {
      eyeAnimationVariations(2, 5, id);
    }
    break
  case 3:
    originalEyes(id);
    $(`#dragonId${id} #eyesName`).html("Round");
    eyesTypeRound(id);
    if(animationNum == 5) {
      eyeAnimationVariations(3, 5, id);
    }
    break
  case 4:
    originalEyes(id);
    $(`#dragonId${id} #eyesName`).html("Relaxed");
    eyesTypeRelaxed(id);
    if(animationNum == 5) {
      eyeAnimationVariations(4, 5, id);
    }
    break
  case 5:
    originalEyes(id);
    $(`#dragonId${id} #eyesName`).html("Pointy");
    eyesTypePointy(id);
    if(animationNum == 5) {
      eyeAnimationVariations(5, 5, id);
    }
    break
  case 6:
    originalEyes(id);
    $(`#dragonId${id} #eyesName`).html("Horizontal");
    eyesTypeHorizontal(id);
    if(animationNum == 5) {
      eyeAnimationVariations(6, 5, id);
    }
    break
  case 7:
    originalEyes(id);
    $(`#dragonId${id} #eyesName`).html("Moon-shape");
    eyesTypeMoon(id);
    if(animationNum == 5) {
      eyeAnimationVariations(7, 5, id);
    }
    break
}
}

function hornVariation(hornShapeNum, animationNum, id) {
$(`#dragonId${id} #hornShapeDna`).html(hornShapeNum);

switch (hornShapeNum) {
  case 1:
    $(`#dragonId${id} #hornsName`).html("Original");
    originalHorns(id);
    // same as in eyeVariation but with horn shape instead,
    // when animation is tilting head
    if(animationNum == 2) {
      animationVariations(2, 1, id);
    }
    break
  case 2:
    originalHorns(id);
    $(`#dragonId${id} #hornsName`).html("Centered");
    hornsTypeCentered(id);
    if(animationNum == 2) {
      animationVariations(2, 2, id);
    }
    break
  case 3:
    originalHorns(id);
    $(`#dragonId${id} #hornsName`).html("Small");
    hornsTypeSmall(id);
    if(animationNum == 2) {
      animationVariations(2, 3, id);
    }
    break
  case 4:
    originalHorns(id);
    $(`#dragonId${id} #hornsName`).html("Rounded");
    hornsTypeRounded(id);
    if(animationNum == 2) {
      animationVariations(2, 4, id);
    }
    break
  case 5:
    originalHorns(id);
    $(`#dragonId${id} #hornsName`).html("Blades");
    hornsTypeBlades(id);
    if(animationNum == 2) {
      animationVariations(2, 5, id);
    }
    break
}
}

function animationVariations(animationNum, hornShapeNum, id) {
$(`#dragonId${id} #animationDna`).html(animationNum);

switch (animationNum) {
  case 1:
    resetAnimation(id);
    $(`#dragonId${id} #animationName`).html("No animation");
    break
  case 2:
    resetAnimation(id);
    $(`#dragonId${id} #animationName`).html("Tilting head");
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
    resetAnimation(id);
    $(`#dragonId${id} #animationName`).html("Moving tail end");
    animationTypeTailEnd(id);
    break
  case 4:
    resetAnimation(id);
    $(`#dragonId${id} #animationName`).html("Moving wings");
    animationTypeWings(id);
    break
}
}

// Function does the same as case 2 in animationVariations,
// but for the eye shapes
function eyeAnimationVariations(eyeShapeNum, animationNum, id) {
  $(`#dragonId${id} #animationDna`).html(animationNum);

  resetAnimation(id);
  $(`#dragonId${id} #animationName`).html("Dilating eyes");
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

function resetAnimation(id) {
  $(`#dragonId${id} #head`).removeClass("tiltingHead");
  $(`#dragonId${id} .rightEar`).removeClass("tiltingRightEar");
  $(`#dragonId${id} .leftEar`).removeClass("tiltingLeftEar");
  $(`#dragonId${id} .topRightHorn, #dragonId${id} .topLeftHorn`).removeClass("tiltingRoundedHorns");
  $(`#dragonId${id} .topRightHorn, #dragonId${id} .topLeftHorn`).removeClass("tiltingSmallHorns");
  $(`#dragonId${id} .topRightHorn`).removeClass("tiltingRightCenteredHorn");
  $(`#dragonId${id} .topLeftHorn`).removeClass("tiltingLeftCenteredHorn");
  $(`#dragonId${id} .topRightHorn`).removeClass("tiltingRightBladeHorn");
  $(`#dragonId${id} .topLeftHorn`).removeClass("tiltingLeftBladeHorn");

  $(`#dragonId${id} .topRightHorn, #dragonId${id} .topLeftHorn`).removeClass("tiltingTopHorns");

  $(`#dragonId${id} .sideRightHorn1`).removeClass("tiltingSideRightHorn1");
  $(`#dragonId${id} .sideRightHorn2`).removeClass("tiltingSideRightHorn2");
  $(`#dragonId${id} .sideLeftHorn1`).removeClass("tiltingSideLeftHorn1");
  $(`#dragonId${id} .sideLeftHorn2`).removeClass("tiltingSideLeftHorn2");

  $(`#dragonId${id} .tailEnd1`).removeClass("movingTailEnd1");
  $(`#dragonId${id} .tailEnd2`).removeClass("movingTailEnd2");
  $(`#dragonId${id} #rightWing`).removeClass("movingRightWing");
  $(`#dragonId${id} #leftWing`).removeClass("movingLeftWing");

  $(`#dragonId${id} .pupils`).removeClass("remainingEyes");
  $(`#dragonId${id} .pupils`).removeClass("relaxedEyes");
  $(`#dragonId${id} .pupils`).removeClass("happyEyes");

  // Using .width() to update the animations of Tilting head, when user changes animation with the slider
  // without this the differente parts of the head will not reset with the Tilting Head animation
  $(`#dragonId${id} #head, #dragonId${id} .rightEar, #dragonId${id} .leftEar, #dragonId${id} .sideRightHorn1, #dragonId${id} .sideRightHorn2, #dragonId${id} .sideLeftHorn1, #dragonId${id} .sideLeftHorn2`).width();
}

function originalEyes(id) {
  $(`#dragonId${id} .eyes`).css("border", "none");
  $(`#dragonId${id} .pupils`).css({
    "border": "none",
    "transform": "rotate(57deg)",
    "left": "1px"
  });
  $(`#dragonId${id} .innerPupils`).css({
    "box-shadow": "2px 4px 3px -1px black",
    "transform": "rotate(160deg)",
    "height": "15px",
    "width": "15px",
    "left": "8px",
    "top": "6px"
  });
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

function eyesTypeHorizontal(id) {
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

function originalHorns(id) {
  $(`#dragonId${id} .topRightHorn`).css("left", "92px");
  $(`#dragonId${id} .topLeftHorn`).css("left", "29px");
  $(`#dragonId${id} .topHorns`).css({
    "border-radius": "0px 90px",
    "transform": "rotate(44deg)",
    "height": "65px",
    "width": "63px",
    "top": "-20px"
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
