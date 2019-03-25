import * as actions from './actions.js';
import * as ui from './ui.js';

let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let b4 = document.querySelector('#b4');
let b5 = document.querySelector('#b5');
let b6 = document.querySelector('#b6');
let b7 = document.querySelector('#b7');
let k = document.querySelector('#k');

function showme() {
  let monstre = actions.get();
  alert("name: "+monstre.name+"\nlife: "+monstre.life+"\nmoney: "+monstre.money+"\nawake: "+monstre.awake);
  console.log(actions.get());
}



export function start() {
  actions.init('Bob',20,20,true);

  b6.addEventListener("click",showme);
  b2.addEventListener("click",actions.run);
  b3.addEventListener("click",actions.fight);
  b4.addEventListener("click",actions.sleep);
  b5.addEventListener("click",actions.eat);
  b7.addEventListener("click",actions.work);
  b1.addEventListener("click",actions.newLife);
  k.addEventListener("click",actions.kill);

  let monstre = actions.get();
  ui.log("name: "+monstre.name+"\nlife: "+monstre.life+"\nmoney: "+monstre.money+"\nawake: "+monstre.awake);

  ui.displayStatus(monstre);

  window.setInterval(actions.actionRandom, 12000);
}
