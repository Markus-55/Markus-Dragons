/* myDragons.js uses the functions from Dragoncontract.sol that gets all the dragons that the user owns
   and displays them with all their attributes, colors & animations on the page: myDragons.html */

var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x90eA32b62E5015b855c3D276A4a8A6036ef45463";

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

function dragonObj(dragonData) {
  let genes = dragonData.genes.split('');

  let storedDragonsObj = {
    // Dna dragon colors
    headBodyColor: genes[0] + genes[1],
    wingsTailColor: genes[2] + genes[3],
    legsArmsColor: genes[4] + genes[5],
    eyesColor: genes[6] + genes[7],
    // Dna dragon attributes
    eyeShape: genes[8],
    hornShape: genes[9],
    topHornsColor: genes[10] + genes[11],
    sideHornsColor: genes[12] + genes[13],
    animation: genes[14],
    lastNum: genes[15]
  }

  //console.log(storedDragonsObj)
  return storedDragonsObj;
}
