var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x97cc6cAc3015899a981D6997d17c17EC285162d4";

$(document).ready(async () => {
  // asks user if they allow the website
  // to use their MetaMask account to interact with the blockchain
  let accounts = await window.ethereum.enable();
  instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
  user = accounts[0];

  //console.log(instance);
  birthEvent();
});

$("#createDragonBtn").click(() => {
  
  $("#createdDragon").css("display", "none");

  let dnaStr = getDragonDna();

  instance.methods.createDragonGen0(dnaStr).send({}, (error, txHash) => {
    if(error) {
      console.log("Failed to send transaction: " + error);
    }
    else {
      $("#txHashModal").modal();
      $("#txHashModalBody").html(`<p>Transaction hash: <br>${txHash}</p>`);
      console.log(txHash);
    }
  });
});

$('#createdDragonClose').click(() => {
  $("#createdDragon").css("display", "none");
});

function birthEvent() {
  instance.events.Birth().on("data", event => {
    $("#createdDragon > p, h5").remove();
    $("#createdDragon").css("display", "block");
    $("#createdDragon").prepend(
      `<h5 id="createdDragonTitle">Dragon successfully created!</h5>
      <p>Owner: ${event.returnValues.owner} &nbsp; &nbsp; &nbsp; &nbsp;
      Genes: ${event.returnValues.genes} &nbsp; &nbsp; &nbsp; &nbsp;
      Token Id: ${event.returnValues.dragonId}</p>`);
  }).on("error", (error, receipt) => {
    console.log(error);
  });
}
