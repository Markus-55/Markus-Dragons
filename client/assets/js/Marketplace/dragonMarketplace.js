let web3 = new Web3(Web3.givenProvider);

let dragonContractInstance;
let marketplaceInstance;

let user;

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  marketplaceInstance = new web3.eth.Contract(abiMarketplace, marketplaceAddress, {from: accounts[0]});
  user = accounts[0];

  // console.log(marketplaceInstance);
  allActiveOffers().catch(error => console.log(error));
});

async function allActiveOffers() {
  let allOffers = await marketplaceInstance.methods.getAllTokenOnSale().call();
  let ownedDragonsIds = await dragonContractInstance.methods.allOwnedDragons().call();

  for(let i = 0; i < allOffers.length; i++) {
    let offerId = allOffers[i];
    let isSellerOf;

    for(let index = 0; index < ownedDragonsIds.length; index++) {
      let ownedId = ownedDragonsIds[index];
      if(offerId == ownedId) {
        isSellerOf = true;
        break;
      }
    }

    let activeOffer = await marketplaceInstance.methods.getActiveStatus(offerId).call();
    getActiveOffer(offerId, activeOffer, isSellerOf).catch(error => console.log(error));
  }
}

async function getActiveOffer(offerId, activeOffer, isSellerOf) {
  let offerData = await marketplaceInstance.methods.getOffer(offerId).call();
  let dragonData = await dragonContractInstance.methods.getDragon(offerId).call();

  controlFunction(dragonData, offerId, offerData, activeOffer, isSellerOf);
}

function controlFunction(dragonData, offerId, offerData, activeOffer, isSellerOf) {
  dragonOfferHtml(offerId, offerData, activeOffer, isSellerOf);

  dragonDetails(dragonData, offerId, offerData);

  let dnaObject = dragonObj(dragonData);

  renderOwnedDragons(dnaObject, offerId);
}
