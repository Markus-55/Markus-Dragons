async function dragonOfferHtml(offerId, offerData, activeOffer, isSellerOf) {
  let dragonOfferStr =
  `<div class="col-xl-3 col-lg-4 col-sm-6" id="dragonId${offerId}">

    <div class="modal fade" id="offerModal" tabindex="-1" role="dialog" aria-labelledby="offerModalTitle" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="offerModalTitle">Offer details:</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="row modal-body offerModalBody"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-success buyBtn">Buy dragon</button>
    <div id="myDragonBox">
      <div id="idDragon">Dragon ID: ${offerId}</div>
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
    <ul class="dragonInfo">
      <li id="birthTime"></li>
      <li id="generation"></li>
      <li>
        <span id="dadId"></span>
        <span id="momId"></span>
      </li>
    </ul>
    <button type="button" class="btn btn-info offerInfo" data-toggle="modal" data-target=".bd-example-modal-xl">Offer info</button>
  </div>`;

  //console.log(dragonOfferStr);
  $(`#dragonId${0}`).remove();
  if(!activeOffer) {
    $(`#dragonId${offerId}`).remove();
  }
  else if(activeOffer) {
    $(`#dragonId${offerId}`).remove();
    $(".tokenOffers").prepend(dragonOfferStr);
  }

  $(`#dragonId${offerId} .buyBtn`).click(() => {
    if(isSellerOf) {
      $("#buyTitle").text("Transaction was not successful").css("color", "black");
      $(".buyBody").text(
        `You cannot buy your own offer. If you want to remove it,
        click on the button above the dragons and remove the active offers that you don't want to sell anymore.`).css("color", "black");
      $("#buyModal").modal();
    }
    else {
      paymentGatewayInstance.methods.sendPayment(offerData.seller, offerData.tokenId).send({value: offerData.price}, (error, txHash) => {
        if(error) {
          $("#buyTitle").text("Transaction was not successful").css("color", "black");
              $(".buyBody").text(`Failed to send transaction: ${error.message}`).css("color", "black");
              console.log(error);
        }
        else {
          $("#buyTitle").text("Offer successfully bought!").css("color", "#007400");
          $(".buyBody").html(
            `<p>The MD token has been added to your account!<br>
            Token ID: ${offerData.tokenId}<br>
            Cost: ${offerData.price / Math.pow(10, 18)} ETH<br><br>
            Transaction hash:<br>
            ${txHash}</p>`
          ).css("color", "#007400");

          $(".buyClose").click(() => location.reload());
          console.log(txHash);
        }
        $("#buyModal").modal();
      });
    }
  });
}

function activeDragonDetails(dragonData, offerId, offerData) {
  $(`#dragonId${offerId} #birthTime`).append(`Birth time: ${toReadableTime(dragonData.birthTime)}`);
  $(`#dragonId${offerId} #generation`).append(`Generation: ${dragonData.generation}`);
  $(`#dragonId${offerId} #dadId`).append(`dadId: ${dragonData.dadId}`);
  $(`#dragonId${offerId} #momId`).append(`momId: ${dragonData.momId}`);

  $(`#dragonId${offerId} .offerInfo`).click(() => {
    $("#offerModal").modal();
    $(".offerModalBody").html(`
      Seller address: ${offerData.seller}<br>
      Token price: ${offerData.price / Math.pow(10, 18)} ETH`);
  });
}

function renderActiveDragons(dnaObject, offerId) {
  let eyeShapeNum = parseInt(dnaObject.eyeShape);
  let hornShapeNum = parseInt(dnaObject.hornShape);
  let animationNum = parseInt(dnaObject.animation);

  headBodyColor(colors[dnaObject.headBodyColor], dnaObject.headBodyColor, offerId);

  wingsTailColor(colors[dnaObject.wingsTailColor], dnaObject.wingsTailColor, offerId);

  legsArmsColor(colors[dnaObject.legsArmsColor], dnaObject.legsArmsColor, offerId);

  eyesColor(colors[dnaObject.eyesColor], dnaObject.eyesColor, offerId);

  eyeVariation(eyeShapeNum, animationNum, offerId);

  hornVariation(hornShapeNum, animationNum, offerId);

  topHornsColor(colors[dnaObject.topHornsColor], dnaObject.topHornsColor, offerId);

  sideHornsColor(colors[dnaObject.sideHornsColor], dnaObject.sideHornsColor, offerId);

  if(animationNum === 5) {
    eyeAnimationVariations(eyeShapeNum, offerId);
  }
  else {
    animationVariations(animationNum, hornShapeNum, offerId);
  }

  specialNum(dnaObject.lastNum, offerId);
}
