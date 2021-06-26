/* myDragons.js uses the functions from Dragoncontract.sol that gets all the dragons that the user owns
   and displays them with all their attributes, colors & animations on the page: myDragons.html */

var web3 = new Web3(Web3.givenProvider);

var dragonContractInstance;
var marketplaceInstance;

var user;
var marketplaceAddress = "0x6E16cF8a3610F08E54F3e93Cf8B33F434d7BaE38";
var dragonContractAddress = "0x7c74A691C34E5faFE104aaEA056C6473d3cD9c2F";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  marketplaceInstance = new web3.eth.Contract(abiMarketplace, marketplaceAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(marketplaceInstance);

  ownedDragons().catch(error => console.log(error));
  marketplaceOperator();
  removeOffers();
});

async function marketplaceOperator() {
  let isOperator = await dragonContractInstance.methods.isApprovedForAll(user, marketplaceAddress).call();

  if(isOperator) {
    console.log("Marketplace set as operator!");
  }
  else {
    $("#marketplaceOperator").modal();
    $("#marketplaceOperatorTitle").html("Set marketplace as operator");
    $(".marketplaceOperatorBody").html(`<p>By confirming the transaction, you accept that the marketplace can manage/sell your offers for you.<br>
    If you decline the transaction you won't be able to sell your dragons</p>`);
    dragonContractInstance.methods.setApprovalForAll(marketplaceAddress, true).send({}, (error, txHash) => {
      if(error) {
        console.log(error);
      }
      else {
        console.log(txHash);
      }
    });
  }

}

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
