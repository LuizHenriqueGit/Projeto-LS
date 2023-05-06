import Dataset from "./data.js";
 
const CardGames = document.querySelector('#Game-Cards')

let GamesArray = Dataset

let contador = 9 

export function CreateCard(nome,image,genero){

    let cardgen = ``
    genero.map((element)=> cardgen += `<p class="card-text"><span class="badge text-bg-primary fs-6">${element}</span></p>`)

    const card =`<div class="col">
    <div class="card">
        <img src="${image}" class="card-img-top" alt="..a.">
        <div class="card-body" >
            <h5 class="card-title text-center fs-4">${nome}</h5>
            <hr>
            ${cardgen}  
        </div>
    </div> `;

    CardGames.insertAdjacentHTML('beforeend', card);

}

export function LoadCards(){
    CardGames.innerHTML = " "
    GamesArray.map((element) => CreateCard(element.nome,element.image,element.genero));  
}

export function FilterCards(ident){
    const filtro = Dataset ; 
    const test1 = filtro.filter(filtro => filtro.id == ident);
    //CreateCard(test1.nome,test1.image,test1.genero);

    test1.forEach(({nome,image,genero,preco}) =>ShowBuyCard(nome,image,genero,preco));   
}

function addGame() {
    const nome = document.querySelector("#name-game");
    const url = document.querySelector("#url-img-game");
    const genero = document.querySelector("#genero-game");

    contador += 1

    const novoObjeto = {
        id: contador,
        nome: nome.value,
        genero: genero.value,
        image: url.value,
    }

    GamesArray.push(novoObjeto)

    LoadCards()

    nome.value = ""
    url.value = ""
    genero.value = ""

    console.log(GamesArray)
}

document.querySelector("#btn-add")
.addEventListener("click", (event) => addGame())

