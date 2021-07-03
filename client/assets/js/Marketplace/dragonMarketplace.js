let web3 = new Web3(Web3.givenProvider);

let marketplaceInstance;
let dragonContractInstance;

let user;
let marketplaceAddress = "0xFAE4A57FcE02d0Fd4d35E55D40AedD5E2507eBc1";
let dragonContractAddress = "0x8117F56235cDBdb8faE5Ab168594fB7479BEA63d";

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
