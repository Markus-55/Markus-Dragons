/* myDragons.js uses the functions from Dragoncontract.sol that gets all the dragons that the user owns
   and displays them with all their attributes, colors & animations on the page: myDragons.html */

let web3 = new Web3(Web3.givenProvider);

let dragonContractInstance;
let marketplaceInstance;

let user;
let dragonContractAddress = "0xb242D6B59Df933d3Af167B89C311DefEe6131211";
let marketplaceAddress = "0xf966025866c32510299221b56d4Bf36c9a9bD18F";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  marketplaceInstance = new web3.eth.Contract(abiMarketplace, marketplaceAddress, {from: accounts[0]});
  user = accounts[0];

  // console.log(marketplaceInstance);
  ownedDragons().catch(error => console.log(error));
  myOffers();
});

async function ownedDragons() {
  let ownedDragonIds = await dragonContractInstance.methods.allOwnedDragons().call();
  for(let i = 0; i < ownedDragonIds.length; i++) {
    let id = ownedDragonIds[i];
    let activeOffer = await marketplaceInstance.methods.getActiveStatus(id).call();

    getMyDragons(id, activeOffer).catch(error => console.log(error));
  }
}

async function getMyDragons(id, activeOffer) {
  let dragonData = await dragonContractInstance.methods.getDragon(id).call();

  controlFunction(dragonData, id, activeOffer);
}

function controlFunction(dragonData, id, activeOffer) {
  dragonHtml(id, activeOffer);

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
    $("#setOperatorTitle").text("Operator approval").css("color", "black");
    $(".setOperatorBody").text("Marketplace contract is an approved operator").css("color", "black");
    $(".removeOperatorBtn").click(() => removeMarketplaceOperator());
    $(".closeBtn").click(() => location.reload());
    $("#setOperatorModal").modal();
  }
}

function marketplaceOperator() {
  dragonContractInstance.methods.setApprovalForAll(marketplaceAddress, true).send({}, (error, txHash) => {
    if(error) {
      $("#marketplaceOperatorTitle").text("Transaction was not successful").css("color", "black");
      $(".marketplaceOperatorBody").text(`Failed to send transaction: ${error.message}`).css("color", "black");
    }
    else {
      dragonContractInstance.events.ApprovalForAll().on("data", event => {
        $("#marketplaceOperatorTitle").text("Marketplace contract set as operator").css("color", "#007400");
        $(".marketplaceOperatorBody").html(
         `<p>Owner: ${event.returnValues.owner}<br>
          Operator: ${event.returnValues.operator}<br>
          Approved: ${event.returnValues.approved}<br><br>
          Transaction hash:<br>${txHash}</p>`
        ).css("color", "black");
      }).on("error", (error, receipt) => {
          console.log(error, receipt);
        });
    }
    $("#marketplaceOperator").modal();
  });
}

function removeMarketplaceOperator() {
  dragonContractInstance.methods.setApprovalForAll(marketplaceAddress, false).send({}, (error, txHash) => {
    if(error) {
      $("#marketplaceOperatorTitle").text("Transaction was not successful").css("color", "black");
      $(".marketplaceOperatorBody").text(`Failed to send transaction: ${error.message}`).css("color", "black");
    }
    else {
      $("#marketplaceOperatorTitle").text("Approval for marketplace contract removed").css("color", "#007400");
      dragonContractInstance.events.ApprovalForAll().on("data", event => {
        $(".marketplaceOperatorBody").html(
         `<p>Owner: ${event.returnValues.owner}<br>
          Removed operator: ${event.returnValues.operator}<br>
          Approved: ${event.returnValues.approved}<br><br>
          Transaction hash:<br>${txHash}</p>`
        ).css("color", "black");
      }).on("error", (error, receipt) => {
          console.log(error, receipt);
        });
    }
    $("#marketplaceOperator").modal();
  });
}
