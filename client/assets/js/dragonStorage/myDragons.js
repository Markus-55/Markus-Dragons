/* myDragons.js uses the functions from Dragoncontract.sol that gets all the dragons that the user owns
   and displays them with all their attributes, colors & animations on the page: myDragons.html */

var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x98202620bc402Acb3d02846Ba22419471FDF462D";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(instance);

  ownedDragons().catch(error => console.log(error));
});

async function ownedDragons() {
  let ownedDragonIds = await instance.methods.allOwnedDragons().call();
  for(let i = 0; i < ownedDragonIds.length; i++) {
    let id = ownedDragonIds[i];
    getMyDragons(id).catch(error => console.log(error));
  }
}

async function getMyDragons(id) {
  let dragonData = await instance.methods.getDragon(id).call();
  controlFunction(dragonData, id);
}

function controlFunction(dragonData, id) {
  dragonHtml(id);

  let dnaObject = dragonObj(dragonData);

  dragonDetails(dragonData, id);

  renderOwnedDragons(dnaObject, id);
}
