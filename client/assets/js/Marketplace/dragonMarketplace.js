let web3 = new Web3(Web3.givenProvider);

let dragonContractInstance;
let marketplaceInstance;
let paymentGatewayInstance;
let user;

let dragonContractAddress = "0x992c2db83d65BF508621ceaFB7c692F9F1767264";
let marketplaceAddress = "0xF7c6B97AD3A9F875ce941e9520ba4D47A5BF2f7e";
let paymentGatewayAddress = "0x6f54845bbaaEC194e1ebcf60058B828f5B575452";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  marketplaceInstance = new web3.eth.Contract(abiMarketplace, marketplaceAddress, {from: accounts[0]});
  paymentGatewayInstance = new web3.eth.Contract(abiPaymentGateway, paymentGatewayAddress, {from: accounts[0]});
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
