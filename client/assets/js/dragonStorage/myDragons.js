/* myDragons.js uses the functions from Dragoncontract.sol that gets all the dragons that the user owns
   and displays them with all their attributes, colors & animations on the page: myDragons.html */

var web3 = new Web3(Web3.givenProvider);

var dragonContractInstance;
var marketplaceInstance;

var user;
var marketplaceAddress = "0x8d58471447F7fd79c6Eb1862F8E4aa9428A0E911";
var dragonContractAddress = "0x3979E88E8B02aa623382a949e24D5Af668821793";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  marketplaceInstance = new web3.eth.Contract(abiMarketplace, marketplaceAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(dragonContractInstance);

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
    getMyDragons(id).catch(error => console.log(error));
  }
}

async function getMyDragons(id) {
  let dragonData = await dragonContractInstance.methods.getDragon(id).call();
  controlFunction(dragonData, id);
}

function controlFunction(dragonData, id) {
  dragonHtml(id);

  let dnaObject = dragonObj(dragonData);

  dragonDetails(dragonData, id);

  renderOwnedDragons(dnaObject, id);
}
