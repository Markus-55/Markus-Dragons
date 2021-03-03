var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xc7f59898832a6A61dA4f88f760E08D82a90D5F65";

$(document).ready(async () => {
  // asks user if they allow the website
  // to use their MetaMask account to interact with the blockchain
  let accounts = await window.ethereum.enable();
  instance = await new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
  user = await accounts[0];

  //console.log(instance);
  birthEvent();
});

$("#createDragonBtn").click(() => {
  let dnaStr = getDragonDna();

  instance.methods.createDragonGen0(dnaStr).send({}, (error, txHash) => {
    if(error) {
      console.log("Failed to send transaction: " + error);
    }
    else {
      alert("transaction successfully sent: " + txHash);
    }
  });
});

  $('.alert').alert();

function birthEvent() {
  instance.events.Birth((error, event) => {
    $("#createdDragon").css("display", "block")
    $("#createdDragon").text(
      `Dragon Successfully created
      by Owner: ${event.returnValues.owner},
      Genes: ${event.returnValues.genes},
      Token Id: ${event.returnValues.dragonId},
      Dad id: ${event.returnValues.dadId},
      Mom id: ${event.returnValues.momId}`);

      /*alert(
        `Dragon Successfully created
        by Owner: ${event.returnValues.owner},
        Genes: ${event.returnValues.genes},
        Token Id: ${event.returnValues.dragonId},
        Dad id: ${event.returnValues.dadId},
        Mom id: ${event.returnValues.momId}`);*/
  });
}
