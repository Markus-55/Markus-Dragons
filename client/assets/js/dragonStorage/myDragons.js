/* myDragons.js uses the functions from Dragoncontract.sol that gets all the dragons that the user owns
   and displays them with all their attributes, colors & animations on the page: myDragons.html */

let web3 = new Web3(Web3.givenProvider);

let dragonContractInstance;
let marketplaceInstance;

let user;
let marketplaceAddress = "0xFAE4A57FcE02d0Fd4d35E55D40AedD5E2507eBc1";
let dragonContractAddress = "0x8117F56235cDBdb8faE5Ab168594fB7479BEA63d";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  marketplaceInstance = new web3.eth.Contract(abiMarketplace, marketplaceAddress, {from: accounts[0]});
  user = accounts[0];

  // console.log(marketplaceInstance);
  ownedDragons().catch(error => console.log(error));
  removeOffers();
});

async function ownedDragons() {
  let ownedDragonIds = await dragonContractInstance.methods.allOwnedDragons().call();
  for(let i = 0; i < ownedDragonIds.length; i++) {
    let id = ownedDragonIds[i];
    let offerData = await marketplaceInstance.methods.getOffer(id).call();

    getMyDragons(id, offerData).catch(error => console.log(error));
  }
}

async function getMyDragons(id, offerData) {
  let dragonData = await dragonContractInstance.methods.getDragon(id).call();

  controlFunction(dragonData, id, offerData);
}

function controlFunction(dragonData, id, offerData) {
  dragonHtml(id, offerData);

  let dnaObject = dragonObj(dragonData);

  dragonDetails(dragonData, id);

  renderOwnedDragons(dnaObject, id);
}

$(".approval").click(async () => operatorApproval());

async function operatorApproval() {
  let isOperator = await dragonContractInstance.methods.isApprovedForAll(user, marketplaceAddress).call();

  if(!isOperator) {
    $("#OperatorAprovalTitle").text("Operator approval");
    $(".OperatorAprovalBody").html(`<p>In order to sell your dragons,
      you need to accept the marketplace as an operator so that it can manage/sell your offers.
      Click on the confirm button if you accept or you can decline if you don't want to sell your dragons</p>`);
    $("#OperatorAproval").modal();

    $(".confirmBtn").click(() => marketplaceOperator());
    $(".declineBtn").click(() => location.reload());
  }
  else {
    $("#marketplaceOperatorTitle").text("Operator approval").css("color", "#007400");
    $(".marketplaceOperatorBody").text("Marketplace is an approved operator!").css("color", "#007400");
    $("#marketplaceOperator").modal();
  }
}

function marketplaceOperator() {
  dragonContractInstance.methods.setApprovalForAll(marketplaceAddress, true).send({}, (error, txHash) => {
    if(error) {
      $("#marketplaceOperatorTitle").text("Transaction was not successful").css("color", "black");
      $(".marketplaceOperatorBody").text(`Failed to send transaction: ${error.message}`).css("color", "black");
    }
    else {
      $("#marketplaceOperatorTitle").text("Operator approval").css("color", "#007400");
      $(".marketplaceOperatorBody").html(`Marketplace set as operator!<br><br>
        Transaction hash:<br>${txHash}`).css("color", "#007400");
    }
    $("#marketplaceOperator").modal();
  });
}
