import { LoadCards } from "./JS/GameDataSet.js";

const pg = document.querySelector("body");

pg.style.cssText ='background-color: #2C2D35'

LoadCards();

let btnbuy = document.querySelector('#btn');
btnbuy.addEventListener('click',function(){
location.assign('./compra.html')

})

const t = document.querySelector("#titulo");
t.style.cssText ='color: white'

