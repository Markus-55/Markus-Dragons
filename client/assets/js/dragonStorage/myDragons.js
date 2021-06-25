/* myDragons.js uses the functions from Dragoncontract.sol that gets all the dragons that the user owns
   and displays them with all their attributes, colors & animations on the page: myDragons.html */

var web3 = new Web3(Web3.givenProvider);

var dragonContractInstance;
var marketplaceInstance;

var user;
var marketplaceAddress = "0xA5cf3af287F997CC049dAff649a52A92F491e0b7";
var dragonContractAddress = "0x0d84a5C7239B4040fC85D8821E63565fb0Ba8C1C";

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
    console.log("Marketplace set as operator");
  }
  else {
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
