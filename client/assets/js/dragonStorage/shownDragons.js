/* shownDragons.js shows the dragon to the frontend with it's details */

function dragonHtml(id, activeOffer) {
  let dragonStr =
  `<div class="col-xl-3 col-lg-4 col-sm-6" id="dragonId${id}">
    <div id="myDragonBox">
      <div id="idDragon">Dragon ID: ${id}</div>
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
    <div id="sellDragon" class="input-group mb-3">
      <div class="input-group-prepend">
        <button id="sellBtn" class="btn btn-success" type="button">Sell dragon</button>
      </div>
      <input type="number" class="form-control dragonPrice" placeholder="Input price" aria-label="Input price" aria-describedby="ETH" min="0" max="1000">
      <div class="ethBox">ETH</div>
    </div>
  </div>`;

  //console.log(dragonStr);
  $(".dragonObject").prepend(dragonStr);

  if(activeOffer) {
    $(`#dragonid${id} #sellDragon`).html(`
      <div id="activeOffer">
        <p>Already in marketplace!</p>
      </div>`);
  }

  $("#sellBtn").click(async () => {
    let isOperator = await dragonContractInstance.methods.isApprovedForAll(user, marketplaceAddress).call();

    let inputPrice = parseFloat($(`#dragonId${id} .dragonPrice`).val()).toFixed(8);
    let price = web3.utils.toWei(inputPrice, "ether");

    if(!isOperator) {
      operatorApproval();
    }
    else if(inputPrice <= 0) {
      $("#sellOrRemoveTitle").text("Invalid input price").css("color", "black");
      $(".sellOrRemoveBody").text("Price cannot be less than or equal to zero").css("color", "black");
      $("#sellOrRemoveModal").modal();
    }
    else if(inputPrice > 1000) {
      $("#sellOrRemoveTitle").text("Invalid input price").css("color", "black");
      $(".sellOrRemoveBody").text("Price cannot be greater than 1000 ETH").css("color", "black");
      $("#sellOrRemoveModal").modal();
    }
    else {
      createOffer(price, id);
    }
  });
}

async function createOffer(price, id) {
  await marketplaceInstance.methods.setOffer(price, id).send({}, (error, txHash) => {
    if(error) {
      $("#sellOrRemoveTitle").text("Transaction was not successful").css("color", "black");
      $(".sellOrRemoveBody").text(`Failed to send transaction: ${error.message}`).css("color", "black");
      // console.log(error);
    }
    else {
      $("#sellOrRemoveTitle").text("Offer successfully created!").css("color", "#007400");
      $(".sellOrRemoveBody").html(
       `<p>Offer has been added to marketplace!<br>
         Offer Token ID: ${id}<br>
         Offer price: ${web3.utils.fromWei(price)} ETH<br><br>
         Transaction hash:<br>
         ${txHash}</p>`).css("color", "#007400");

      $(".sellOrRemoveClose").click(() => location.reload());
      // console.log(txHash);
    }
    $("#sellOrRemoveModal").modal();
  });
}

$(".withdrawBtn").click(async () => {
  let userBalance = await marketplaceInstance.methods.balance(userAddress).call();

  $("#toWithdrawTitle").text("Funds to withdraw").css("color", "black");
  $(".toWithdrawBody").html(
    `<p>You have ${userBalance / Math.pow(10, 18)} ETH in your balance<br>
    Do you want to withdraw?</p>`).css("color", "black");

  if(userBalance > 0) {
    $(".confirmWithdraw").click(async() => {
      await marketplaceInstance.methods.withdraw(userAddress).send({}, (error, txHash) => {
        if(error) {
          $("#withdrawTitle").text("Transaction was not successful").css("color", "black");
          $(".withdrawBody").html(`Failed to send transaction: ${error.message}`).css("color", "black");
          console.log(error);
        }
        else {
          $("#withdrawTitle").text("Successfully withdrawn funds!").css("color", "#007400");
          $(".withdrawBody").html(
            `<p>You have successfully withdrawn your funds<br><br>
            Transaction hash:<br>
            ${txHash}</p>`).css("color", "#007400");
          console.log(txHash);
        }
        $("#withdrawModal").modal();
      });
    });
    $("#toWithdrawModal").modal();
  }
  else {
    $("#withdrawTitle").text("You have no funds to withdraw").css("color", "black");
    $(".withdrawBody").text("").css("color", "black");

    $("#withdrawModal").modal();
  }
});
