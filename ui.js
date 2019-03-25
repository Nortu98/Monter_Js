
export function log(message) {
  let div = document.querySelector("div#actionbox");
  let p = document.createElement("P");
  let t = document.createTextNode(message);
  p.appendChild(t);
  div.appendChild(p);
  console.log(message);
}

export function displayStatus(etat) {
  let li = document.querySelectorAll("ul#status>li");
  for (var i = 0; i < li.length; i++) {
    li[i].remove();
  }
  let li1 = document.createElement("LI");
  let li2 = document.createElement("LI");
  let li3 = document.createElement("LI");


  let ul = document.querySelector("ul#status");
  li1.appendChild(document.createTextNode("life:"+etat.life));
  li2.appendChild(document.createTextNode("money:"+etat.money));

  function afficherAwake() {
    if(etat.awake) {
      return "awake";
    } else {
      return "sleeping";
    }
  }

  li3.appendChild(document.createTextNode(afficherAwake()));

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  showLifeColore(etat.life);
  showMoney(etat.money);
}

function showLifeColore(nbLife) {
  if(nbLife<15){
    document.getElementById("monster").style.backgroundColor="yellow";
  }
  if(nbLife<10){
    document.getElementById("monster").style.backgroundColor="orange";
  }
  if(nbLife<5){
    document.getElementById("monster").style.backgroundColor="red";
  }
  if(nbLife>=15){
    document.getElementById("monster").style.backgroundColor="green";
  }

}

function showMoney(nbMoney) {
  if(nbMoney<100){
    document.getElementById("monster").style.borderWidth = nbMoney+'px';
  }
}
