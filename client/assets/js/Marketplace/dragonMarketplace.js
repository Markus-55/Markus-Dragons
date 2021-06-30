let web3 = new Web3(Web3.givenProvider);

let marketplaceInstance;
let dragonContractInstance;

let user;
let marketplaceAddress = "0x38037e291e05112361ecc86d52cBBb74EF07bd78";
let dragonContractAddress = "0x1d75c6F38c1349A4730F8AC3A1950ba7628C8442";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  marketplaceInstance = new web3.eth.Contract(abiMarketplace, marketplaceAddress, {from: accounts[0]});
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  user = accounts[0];

  // console.log(marketplaceInstance);
  allActiveOffers().catch(error => console.log(error));
});

async function allActiveOffers() {
  let allOffers = await marketplaceInstance.methods.getAllTokenOnSale().call();
  let ownedDragonsIds = await dragonContractInstance.methods.allOwnedDragons().call();

  for(let i = 0; i < allOffers.length; i++) {
    let offerId = allOffers[i];
    let offerData = await marketplaceInstance.methods.getOffer(offerId).call();
    let isSellerOf;

    for(let index = 0; index < ownedDragonsIds.length; index++) {
      let ownedId = ownedDragonsIds[index];
      if(offerData.tokenId == ownedId) {
        isSellerOf = true;
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

  activeDragonDetails(dragonData, offerId, offerData);

  let dnaObject = dragonObj(dragonData);

  renderActiveDragons(dnaObject, offerId);
}
