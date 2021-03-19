var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var dragonIds;
var contractAddress = "0x96BCF44184c94C26D30a2d3d06dacAdafc8abD90";

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
        let dragonStr = `<div class="myDragonBox" id="dragonId ${i}">${getStoredDragons()}</div>`
        $("#dragonObject").append(dragonStr);
        console.log(dragonStr);
      }
    }
  });
}

function getStoredDragons() {
  instance.methods.getDragon(dragonIds).call({}, function(error, values) {
    if(error) {
      console.log(error);
    }
    else {
      renderDragon(values.genes);
      console.log(values);
    }
  });
}
