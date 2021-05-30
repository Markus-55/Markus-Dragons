/* dragonBreed.js */

var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xEddd3aA83354369801616ff0764Af41E7A4B7A7A";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(instance);

  ownedDragons();
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
  ControlFunction(dragonData, id);
}

function ControlFunction(dragonData, id) {
  dragonHtml(id);

  let dnaObject = dragonObj(dragonData);

  renderOwnedDragons(dnaObject, id);

  breedDragons(dragonData, id);
}

function breedDragons(dragonData, id) {

  $(".breedBtn").click(() => {

    let dadId = getDadId(id);
    let momId = getMomId(id);

    // if(/*2 dragons selected*/) {
      instance.methods.breed(dadId, momId).send({}, (error, txHash) => {
        if(error) {
          console.log(error);
        }
        // else if(){
        //   console.log();
        // }
        else {
          console.log(txHash);
        }
      });
    }
    // else {
    //   alert("You need to select 2 dragons");
    // }
  });
}

// √ DISPLAY box for mom & dad dragons (dragonBreed.html)
// √ CLICK button to CHOOSE dad dragon & other button for mom dragon

  // √ OPEN modal with all owned dragons dragons
  // √ SELECT dad and mom dragon
    // √ DISPLAY selected dragons
      // √ DISABLE already selected dad or mom dragon
  // DISABLE breed button before mom & dad dragons are selected
  // ENABLE breed button if both mom & dad dragons are selected
    // CLICK breed button
      // Call instance.methods.getDragon(dadId) and getDragon(momId) (dragonBreed.js)
        // CALL instance.methods.breed(dadId, momId);

// CALL instance.events.Birth().on("data", event => {})
// MESSAGE with LINK to myDragons.html to check new dragon
