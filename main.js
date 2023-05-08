import { filterCards, loadCards} from "./JS/GameDataSet.js";

const pg = document.querySelector("body");

pg.style.cssText ='background-color: #2C2D35'

loadCards();

const t = document.querySelector("#titulo");
t.style.cssText ='color: white'

filterCards();