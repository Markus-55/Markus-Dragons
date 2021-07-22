let dragonContractAddress = "0xaDcE6A637661BEdC809312431bB23531cEe828f6";
let marketplaceAddress = "0x504909a6B6a7cd5dcA48Bb5767ab169942281C18";

function toReadableTime(convertNumb) {
  return new Date(convertNumb * 1000).toLocaleString("en-GB");
}

function dragonDetails(dragonData, id, offerData) {
  $(`#dragonId${id} #generation`).text(`Generation: ${dragonData.generation}`);
  $(`#dragonId${id} #birthTime`).text(`Birth time: ${toReadableTime(dragonData.birthTime)}`);
  $(`#dragonId${id} #dadId`).text(`Dad ID: ${dragonData.dadId}`);
  $(`#dragonId${id} #momId`).text(`Mom ID: ${dragonData.momId}`);
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

function renderOwnedDragons(dnaObject, id) {
  let eyeShapeNum = parseInt(dnaObject.eyeShape);
  let hornShapeNum = parseInt(dnaObject.hornShape);
  let animationNum = parseInt(dnaObject.animation);

  headBodyColor(colors[dnaObject.headBodyColor], dnaObject.headBodyColor, id);

  wingsTailColor(colors[dnaObject.wingsTailColor], dnaObject.wingsTailColor, id);

  legsArmsColor(colors[dnaObject.legsArmsColor], dnaObject.legsArmsColor, id);

  eyesColor(colors[dnaObject.eyesColor], dnaObject.eyesColor, id);

  eyeVariation(eyeShapeNum, animationNum, id);

  hornVariation(hornShapeNum, animationNum, id);

  topHornsColor(colors[dnaObject.topHornsColor], dnaObject.topHornsColor, id);

  sideHornsColor(colors[dnaObject.sideHornsColor], dnaObject.sideHornsColor, id);

  if(animationNum === 5) {
    eyeAnimationVariations(eyeShapeNum, id);
  }
  else {
    animationVariations(animationNum, hornShapeNum, id);
  }

  specialNum(dnaObject.lastNum, id);
}
