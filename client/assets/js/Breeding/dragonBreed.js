/* dragonBreed.js is calling the smart contract with the given information
  to breed the dragons and displaying all the errors and notifications */

let web3 = new Web3(Web3.givenProvider);

let dragonContractInstance;
let user;

$(document).ready(async () => {
  let accounts = await window.ethereum.enable();
  dragonContractInstance = new web3.eth.Contract(abiDragoncontract, dragonContractAddress, {from: accounts[0]});
  user = accounts[0];

  console.log(dragonContractInstance);

  ownedDragons().catch(error => console.log(error));
  birthEvent();
});

async function ownedDragons() {
  let ownedDragonIds = await dragonContractInstance.methods.allOwnedDragons().call();
  for(let i = 0; i < ownedDragonIds.length; i++) {
    let id = ownedDragonIds[i];
    getMyDragons(id).catch(error => console.log(error));
  }
}

async function getMyDragons(id) {
  let dragonData = await dragonContractInstance.methods.getDragon(id).call();
  ControlFunction(dragonData, id);
}

function ControlFunction(dragonData, id) {
  dragonHtml(id);

  let dnaObject = dragonObj(dragonData);

  breedDragonDetails(dragonData, id);

  renderOwnedDragons(dnaObject, id);
}

function birthEvent() {
  dragonContractInstance.events.Birth().on("data", event => {
    $(".babyModalBody > p, h5").remove();
    $(".babyModalBody").css("display", "block");
    $(".babyModalBody").prepend(
      `<span class="createdDragonTitle"><h5>Dragon successfully bred!</h5></span>
       <span class="addedTokenText">The MD token has been added to your account!</span>
       <span class="ownerDetail">Owner: ${event.returnValues.owner}</span>
       <span class="idDetail">Token Id: ${event.returnValues.dragonId}</span>
       <span class="geneDetail">Genes: ${event.returnValues.genes}</span>`
      );

      getNewDragon(event.returnValues.dragonId);
  }).on("error", (error, receipt) => {
      console.log(error, receipt);
  });
}

$(".breedBtn").click(async () => {
  if(dadId == undefined || momId == undefined) {
    $("#breedModal").modal("hide");
  }
  else if(dadId != momId) {
    await dragonContractInstance.methods.breed(dadId, momId).send({}, (error, txHash) => {
      if(error) {
        $("#breedModalTitle").text("Transaction was not successful").css("color", "black");
        $(".breedModalBody").text("Failed to send transaction: " + error.message).css("color", "black");
      }
      else {
        $("#breedModalTitle").text("Transaction successfully sent!").css("color", "#007400");
        $(".breedModalBody").html(`<p>Transaction hash: <br>${txHash}</p>`).css("color", "#007400");
      }
      $("#breedModal").modal();
    });
  }
});
