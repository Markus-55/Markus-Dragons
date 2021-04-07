/* myDragons.js uses the functions from Dragoncontract.sol that gets all the dragons that the user owns
   and displays them with all their attributes, colors & animations on the page: myDragons.html */

var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x24111090619286F1844caeE5bAA458195222958E";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(instance);

  ownedDragons();
});

function ownedDragons() {
  instance.methods.allOwnedDragons().call({}, (error, ownedDragonIds) => {
    if(error) {
      console.log(error)
    }
    else {
      for(let i = 0; i < ownedDragonIds.length; i++) {
        let id = ownedDragonIds[i];

        getMyDragons(id);
      }
    }
  });
}

function getMyDragons(id) {
  instance.methods.getDragon(id).call({}, (error, dragonData) => {
    if(error) {
      console.log(error)
    }
    else {
      controlFunction(dragonData, id);
    }
  });
}

function controlFunction(dragonData, id) {
  dragonHtml(id);

  let dnaObject = dragonObj(dragonData);

  dragonDetails(dragonData, id);

  renderOwnedDragons(dnaObject, id);
}
