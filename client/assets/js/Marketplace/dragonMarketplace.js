var web3 = new Web3(Web3.givenProvider);

var marketplaceInstance;
var dragonContractInstance;

var user;
var marketplaceAddress = "0x6E16cF8a3610F08E54F3e93Cf8B33F434d7BaE38";
var dragonContractAddress = "0x7c74A691C34E5faFE104aaEA056C6473d3cD9c2F";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  marketplaceInstance = new web3.eth.Contract(abiMarketplace, marketplaceAddress, {from: accounts[0]});
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(marketplaceInstance);

  allActiveOffers().catch(error => console.log(error));
});

async function allActiveOffers() {
  let allOffers = await marketplaceInstance.methods.getAllTokenOnSale().call();

  for(let i = 0; i < allOffers.length; i++) {
    let id = allOffers[i];
    let activeOffer = await marketplaceInstance.methods.getActiveStatus(id).call();
    getActiveOffer(id, activeOffer).catch(error => console.log(error));
  }
}

async function getActiveOffer(id, activeOffer) {
  let offerData = await marketplaceInstance.methods.getOffer(id).call();
  let dragonData = await dragonContractInstance.methods.getDragon(id).call();

  controlFunction(dragonData, id, offerData, activeOffer);
}

function controlFunction(dragonData, id, offerData, activeOffer) {
  dragonOfferHtml(id, offerData, activeOffer);

  activeDragonDetails(dragonData, id, offerData);

  let dnaObject = dragonObj(dragonData);

  renderActiveDragons(dnaObject, id);
}
