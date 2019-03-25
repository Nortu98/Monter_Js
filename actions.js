import * as ui from './ui.js';

let name;
let life;
let money;
let awake;

let defaultLife;

export function get() {
  // exporter l'étata du monstre
  return {
    name:name,
    life:life,
    money:money,
    awake:awake
  };
}

export function init(n,l,m,a) {
  name = n;
  life = l;
  money = m;
  awake = a;
  defaultLife = l;
}

function testMonstre(awakeStatus, lifeMin, moneyMin) {
  let res = true;
  if(awakeStatus != awake){
    ui.log("Le montre n'est pas disponible !!!")
    res = false;
  }
  if(lifeMin >= life){
    ui.log("Le montre n'a pas assez de vie !!!")
    res = false;
  }
  if(moneyMin >= money){
    ui.log("Le montre n'a pas assez d'argnt !!!")
    res = false;
  }

  return res;
}

export function run() {
  if(testMonstre(true, 1, 0)){
    life--;
    ui.log("run");
    ui.displayStatus(get());
  }
}

export function fight() {
  if(testMonstre(true, 3, 0)){
    life = life - 3;
    ui.log("fight");
    ui.displayStatus(get());
  }
}

export function work() {
  if(testMonstre(true, 1, 0)){
    life--;
    money = money + 2;
    ui.log("work");
    ui.displayStatus(get());
  }
}

export function eat() {
  if(testMonstre(true, 0, 3)){
    life = life + 2;
    money = money - 3;
    ui.log("eat")
    ui.displayStatus(get());
  }
}
function fawake(){
  awake = true;
  ui.log("awake")
  ui.displayStatus(get());
}

export function sleep() {
  awake = false;
  ui.log("sleep")
  ui.displayStatus(get());
  setTimeout(fawake, 10000);
  life++;
}

export function actionRandom() {
  let nb = Math.floor(Math.random() * Math.floor(5));
  if(nb == 0){
    run();
  }
  if(nb == 1){
    fight();
  }
  if(nb == 2){
    work();
  }
  if(nb == 3){
    sleep();
  }
  if(nb == 4){
    eat();
  }
}

export function kill() {
  life = 0;
  ui.log("kill")
  ui.displayStatus(get());
}

export function newLife() {
  life = defaultLife;
  ui.log("newLife")
  ui.displayStatus(get());
}
