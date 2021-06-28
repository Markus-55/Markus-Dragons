async function removeOffers() {
  let allOffers = await marketplaceInstance.methods.getAllTokenOnSale().call();
  let ownedDragonIds = await dragonContractInstance.methods.allOwnedDragons().call();

  for(let i = 0; i < ownedDragonIds.length; i++) {
    let id = ownedDragonIds[i];
    let offerData = await marketplaceInstance.methods.getOffer(id).call();

    getIdToRemove(id, offerData).catch(error => console.log(error));
  }
}

async function getIdToRemove(id, offerData) {
  let dragonData = await dragonContractInstance.methods.getDragon(id).call();
  controlFunctionRemoveOffers(dragonData, id, offerData);
}

function controlFunctionRemoveOffers(dragonData, id, offerData) {
  dragonRemoveHtml(id, offerData);

  let dnaObject = dragonObj(dragonData);

  renderActiveDragons(dnaObject, id);
}
