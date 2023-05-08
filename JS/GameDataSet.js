import Dataset from "./data.js";
 
const CardGames = document.querySelector('#Game-Cards')

let GamesArray = Dataset

let contador = 9 

export function CreateCard(element){

    let cardgen = ``
    element.genero.map((element)=> cardgen += `<p class="card-text"><span class="badge text-bg-primary fs-6">${element}</span></p>`)

    const card = `<div class="col">
    <div class="card">
        <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body" >
            <h5 class="card-title text-center fs-4">${element.nome}</h5>
            <hr>
            <div class="row row-cols-md-3 row-cols-lg-3  row-cols-1 justify-content-around align-items-center ">${cardgen}</div>
        </div>
        <div id="remove" style="position: absolute; right: 0;"><button onclick ="removeGame(${element.id})"id="${element.id}"type="button" class="rounded btn btn-danger "><i class="bi bi-trash3-fill"></i></button></div>
    </div> `;


    CardGames.insertAdjacentHTML('beforeend', card);

}

export function LoadCards(){
    CardGames.innerHTML = " "
    GamesArray.map((element) => CreateCard(element));  
}

// export function FilterCards(genero){
//   result =GamesArray.filter(function filtrog(){
//     for(g of GamesArray.genero){if(g == genero){return true}}
//   });
//   console.log(result);
// }
// function para adicionar um novo jogo na blibioteca
function addGame() {
    const nome = document.querySelector('#name-game');
    const url = document.querySelector('#url-img-game');
    const genero = document.querySelectorAll("input[id='gridCheck']:checked");
  
    let gen = [];
  
    for (let i = 0; i < 3; i++) {
      gen.push(genero[i].value);
    }
  
    contador += 1;
  
    const novoObjeto = {
      id: contador,
      nome: nome.value,
      genero: gen,
      image: url.value,
    };
  
    GamesArray.push(novoObjeto);
  
    LoadCards();
  
    nome.value = '';
    url.value = '';
    genero.value = '';
  }

  export function removeGame(id) {
    GamesArray = GamesArray.filter((element) => element.id != id);
    LoadCards();
  }
  
  document.querySelector('.dropdown-menu').addEventListener('click', (event) => {
    FilterCards(event.target.id);
    console.log(event.target.id);
  });
  
  document
    .querySelector('#btn-add')
    .addEventListener('click', (event) => addGame());
  
  window.removeGame = removeGame;
  