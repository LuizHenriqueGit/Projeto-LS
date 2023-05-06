import Dataset from "./data.js";
 
const CardGames = document.querySelector('#Game-Cards')

let GamesArray = Dataset

let contador = 9 

export function CreateCard(nome,image,genero){

    let cardgen = ``
    genero.map((element)=> cardgen += `<div class="card-text p-3"><span class="badge text-bg-primary fs-6">${element}</span></div>`)

    const card =`<div class="col">
    <div class="card">
        <img src="${image}" class="card-img-top" alt="..a.">
        <div class="card-body" >
            <h5 class="card-title text-center fs-4">${nome}</h5>
            <hr>
            <div class="d-flex justify-center align-items-center">${cardgen}</div>
        </div>
    </div> `;

    CardGames.insertAdjacentHTML('beforeend', card);

}

export function LoadCards(){
    CardGames.innerHTML = " "
    GamesArray.map((element) => CreateCard(element.nome,element.image,element.genero));  
}
function addGame() {
    const nome = document.querySelector("#name-game");
    const url = document.querySelector("#url-img-game");
    const genero = document.querySelectorAll("input[id='gridCheck']:checked");

    let gen = [] 

    for(let i=0; i<3;i++) {
        gen.push(genero[i].value)
    }

    contador += 1

    const novoObjeto = {
        id: contador,
        nome: nome.value,
        genero: gen,
        image: url.value,
    }

    GamesArray.push(novoObjeto)

    LoadCards()

    nome.value = ""
    url.value = ""
    genero.value = ""
}

export function filter(g="RPG") {
    const result = GamesArray.filter(word => word.genero == g)
    console.log(result)
}

export function FilterCards(genero){
    result =GamesArray.filter(function filtrog(){
      for(g of GamesArray.genero){if(g == genero){return true}}
    });
    console.log(result);
  }

document.querySelector("#btn-add")
.addEventListener("click", (event) => addGame())

