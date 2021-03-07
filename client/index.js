var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0xF086d3a5f7485F576b47E08bf2A579cbe1EF2A48";

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
  let dnaStr = getDragonDna();

  instance.methods.createDragonGen0(dnaStr).send({}, (error, txHash) => {
    if(error) {
      console.log("Failed to send transaction: " + error);
    }
    else {
      $("#txHashModal").modal();
      $("#txHashModalBody").prepend(`<p>Transaction hash: ${txHash}</p>`);
      console.log(txHash);
    }
  });
});

  $("#txHashCloseBtn").click(() => {
    $("#txHashModalBody > p").remove();
  });

  $('#createdDragonClose').click(() => {
    $("#createdDragon").css("display", "none");
    $("#createdDragon > p, h5").remove();
  });

function birthEvent() {
  instance.events.Birth().on("data", event => {
    $("#createdDragon > p, h5").remove();
    $("#createdDragon").css("display", "block");
    $("#createdDragon").prepend(
      `<h5><b>Dragon successfully created!</b></h5>
      <p>Owner: ${event.returnValues.owner} &nbsp; &nbsp; &nbsp; &nbsp;
      Genes: ${event.returnValues.genes} &nbsp; &nbsp; &nbsp; &nbsp;
      Token Id: ${event.returnValues.dragonId}</p>`);
  }).on("error", error => {
    console.log(error);
  });
}
