/* myDragons.js uses the functions from Dragoncontract.sol that gets all the dragons that the user owns
   and displays them with all their attributes, colors & animations on the page: myDragons.html */

let web3 = new Web3(Web3.givenProvider);

let dragonContractInstance;
let marketplaceInstance;

let user;
let userAddress;

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  marketplaceInstance = new web3.eth.Contract(abiMarketplace, marketplaceAddress, {from: accounts[0]});
  user = accounts[0];
  userAddress = web3.currentProvider.selectedAddress;

  // console.log(marketplaceInstance);
  ownedDragons().catch(error => console.log(error));
  myOffers().catch(error => console.log(error));
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

$(".approvalBtn").click(async () => operatorApproval());

async function operatorApproval() {
  let isOperator = await dragonContractInstance.methods.isApprovedForAll(user, marketplaceAddress).call();

  if(!isOperator) {
    $("#OperatorAproval").modal();

    $(".confirmBtn").click(() => marketplaceOperator());
  }
  else {
    $("#setOperatorTitle").text("Operator approval").css("color", "black");
    $(".setOperatorBody").text("Marketplace contract is an approved operator").css("color", "black");
    $(".removeOperatorBtn").click(() => removeMarketplaceOperator());

    $("#setOperatorModal").modal();
  }
}

async function marketplaceOperator() {
  await dragonContractInstance.methods.setApprovalForAll(marketplaceAddress, true).send({}, (error, txHash) => {
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

async function removeMarketplaceOperator() {
  await dragonContractInstance.methods.setApprovalForAll(marketplaceAddress, false).send({}, (error, txHash) => {
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
