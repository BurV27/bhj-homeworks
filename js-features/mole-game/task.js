let holeElem = document.getElementsByClassName('hole')
let clickDead = document.getElementById("dead");
let clickLost= document.getElementById("lost");


for (let i = 0; i < holeElem.length; i++){
  let giveHoleElem = holeElem[i]
  giveHoleElem.onclick = () => {
    if(giveHoleElem.className.includes("hole_has-mole")){
    clickDead.textContent = `${+clickDead.textContent + 1}`;
  } else {
    clickLost.textContent = `${+clickLost.textContent + 1}`
  }
  if (+clickDead.textContent === 10){
    alert("Вы победили!");
    location.reload();
  }

  if (+clickLost.textContent === 10){
    alert("Вы проиграли!");
    location.reload();
  }
  }
}