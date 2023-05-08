import { filterCards, loadCards} from "./JS/GameDataSet.js";


loadCards();

const t = document.querySelector("#titulo");
t.style.cssText ='color: black'

filterCards();