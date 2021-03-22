var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var dragonIds;
var storedDragonsObj;
var contractAddress = "0xfb4250C3b4d60A955cAA0465b06488C1DEE0F114";

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(instance);
  storedDragons();
});

function storedDragons() {
  instance.methods.allOwnedDragons().call({}, function(error, id) {
    if(error) {
      console.log(error);
    }
    else {
      for(let i = 0; i < id.length; i++) {
        dragonIds = id[i];
        let dragonStr = `<div class="myDragonBox" id="dragonId ${i}">
          ${getStoredDragons()}
        </div>`;
        $("#dragonObject").append(dragonStr);
        console.log(dragonStr);
        console.log(storedDragonsObj);
      }
    }
  });
}

function getStoredDragons() {
  instance.methods.getDragon(dragonIds).call({}, function(error, values) {

    let genes = values.genes.split('');

    storedDragonsObj = {
      // Dna dragon colors
      "headBodyColor": genes[0] + genes[1],
      "wingsTailColor": genes[2] + genes[3],
      "legsArmsColor": genes[4] + genes[5],
      "eyesColor": genes[6] + genes[7],
      // Dna dragon attributes
      "eyeShape": genes[8],
      "hornShape": genes[9],
      "topHornsColor": genes[10] + genes[11],
      "sideHornsColor": genes[12] + genes[13],
      "animation": genes[14],
      "lastNum": genes[15]
    }
    //console.log(error);

    console.log(storedDragonsObj);
    console.log("dragonIds: " + dragonIds);
    console.log(values);
    console.log("genes[0]: " + genes[0]);
  });
  console.log(storedDragonsObj);
  return renderDragon(storedDragonsObj);
}
