async function removeOffers() {
  let allOffers = await marketplaceInstance.methods.getAllTokenOnSale().call();
  let ownedDragonIds = await dragonContractInstance.methods.allOwnedDragons().call();

  for(let i = 0; i < ownedDragonIds.length; i++) {
    let offerId = ownedDragonIds[i];
    let offerData = await marketplaceInstance.methods.getOffer(offerId).call();

    getIdToRemove(offerId, offerData).catch(error => console.log(error));
  }
}

async function getIdToRemove(offerId, offerData) {
  let dragonData = await dragonContractInstance.methods.getDragon(offerId).call();
  controlFunctionRemoveOffers(dragonData, offerId, offerData);
}

function controlFunctionRemoveOffers(dragonData, offerId, offerData) {
  dragonRemoveHtml(offerId, offerData);

  let dnaObject = dragonObj(dragonData);

  renderActiveDragons(dnaObject, offerId);
}
