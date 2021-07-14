async function myOffers() {
  let ownedDragonIds = await dragonContractInstance.methods.allOwnedDragons().call();

  for(let i = 0; i < ownedDragonIds.length; i++) {
    let ownedId = ownedDragonIds[i];
    let offerData = await marketplaceInstance.methods.getOffer(ownedId).call();

    getMyOffers(ownedId, offerData).catch(error => console.log(error));
  }
}

async function getMyOffers(ownedId, offerData) {
  let dragonData = await dragonContractInstance.methods.getDragon(ownedId).call();
  controlFunctionMyOffers(dragonData, ownedId, offerData);
}

function controlFunctionMyOffers(dragonData, ownedId, offerData) {
  myOfferHtml(ownedId, offerData);

  let dnaObject = dragonObj(dragonData);

  renderOwnedDragons(dnaObject, ownedId);
}
