import { filterCards, loadCards} from "./JS/GameDataSet.js";

const pg = document.querySelector("body");


loadCards();

const t = document.querySelector("#titulo");
t.style.cssText ='color: white'

filterCards();