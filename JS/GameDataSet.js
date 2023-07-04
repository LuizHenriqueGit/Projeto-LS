// import Dataset from "./data.js";
 
const CardGames = document.querySelector('#Game-Cards') // div onde os cards serão inseridos

// let GamesArray = Dataset // Cópia do array no data.js

// let contador = 18 // Número inicial de objetos no array Dataset

// Função que cria cards utilizando os objetos do data.js
const regex = /^[a-zA-Z0-9]{1,30}$/;
const response = await fetch('http://localhost:3000/Dataset') 
const games =  await response.json();

export async function CreateCard(element){
    let cardgen = ``;
    element.genero.map(
      (element) =>
        (cardgen += `<div class="text-center card-text col p-2"><span class="fs-6 text badge text-bg-primary ">${element}</span></div>`)
    );
  
    const card = `<div class="col">
      <div class="card border-dark text-bg-dark mb-3">
          <img src="${element.image}" class ="card-img-top w-100" style ="height: 250px">
          <div class="card-body" >
              <h5 class="card-title text-center fs-4">${element.nome}</h5>
              <hr>
              <div class="row row-cols-md-3 row-cols-lg-3 row-cols-1 justify-content-around align-items-center">${cardgen}</div>
          </div>
          <div id="remove" style="position: absolute; right: 0; margin-top:4px; margin-right:4px;"><button onclick ="confirmRemove(${element.id})"id="${element.id}"type="button" class="rounded btn btn-danger"><i class="bi bi-trash3-fill"></i></button></div>
          <div class ="position-absolute top-0 start-0" style ="margin-top:4px; margin-left:4px;">
          <a href ="${element.link}" target ="_blank"><button type="button" class="rounded btn btn-success"><i class="bi bi-cart3"></i></button></a>
          </div>
      </div>`;
  
     CardGames.insertAdjacentHTML('beforeend', card);
  
}

// Função para carregar cards

export async function loadCards(data = games){
    CardGames.innerHTML = " "
    // lista.map((element) => CreateCard(element)); 
    // const response = await fetch('http://localhost:3000/Dataset') 
    // const data =  await response.json();
    data.map((element) => CreateCard(element))

}

// Função para adicionar jogos(objetos) ao data.js

async function  addGame() {
    const nome = document.querySelector('#name-game');
    const url = document.querySelector('#url-img-game');
    const compra =document.querySelector('#url-game');
    const genero = document.querySelectorAll("input[id='gridCheck']:checked");
  
    let gen = [];

    let cont =0;
   while(genero[cont] != undefined && cont < 3){
    gen.push(genero[cont].value);
    cont += 1 ;
   };

  
    const novoObjeto = {
      nome: nome.value,
      genero: gen,
      image: url.value,
      link: compra.value,
    };
  
    const res = await fetch('http://localhost:3000/Dataset',{
      method: 'post',
      body: JSON.stringify(novoObjeto),
      headers:{
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    
    
  
    loadCards();
  
    nome.value = '';
    url.value = '';
    compra.value ='';
    for(let i=0;i<genero.length;i++) {
      genero[i].checked = gridCheck.unchecked
    }
    return await res.json();
  }

// Função para remover o jogo(objeto) através do seu id

export async function removeGame(id) {
   const response = await fetch(`http://localhost:3000/Dataset/${id}`,{
    method: 'delete'
   });
    // GamesArray = GamesArray.filter((element) => element.id != id);
    loadCards();
  }
  
document.querySelector('.dropdown-menu')
.addEventListener('click', (event) => {
  filterCards(event.target.innerHTML);
  console.log(event.target.innerHTML);
});
  
// EventListener que será acionado ao clicar no botão Adicionar jogo,

document
.querySelector('#btn-add')
.addEventListener('click', (event) => addGame());
  
  window.removeGame = removeGame;
  window.confirmRemove =confirmRemove;


// Função para confirmar a remoção do jogo(card) e chamar a a função de remover

function confirmRemove(id){
    const response = window.confirm("Deseja mesmo remover esse jogo?")

    if (response){
        removeGame(id)
    }
}

// Função para filtrar os jogos pelo gênero
function filtergeneros(element,genero){
  for(let i=0;i<element.genero.length;i++){
    if(element.genero[i] == genero){return element}
  }
}
export async function filterCards(genero){
let res = games.filter(element => filtergeneros(element,genero) == element);
// let filter = []
// for(let element of Dataset){
//   let res
//  res = filtergeneros(element,genero)
//  if(res != undefined){
//   filter.push(res);
//loadCards(res);
CardGames.innerHTML =''
res.map(ele => CreateCard(ele));
 //}
//}
//GamesArray = filter
//loadCards()
}
document.querySelector("#homepage").addEventListener("click",(event) =>loadCards())
document.querySelector('#AtSearch').addEventListener('click',(event) => { 
let texto =document.querySelector("#search").value
console.log(texto)
if(regex.test(texto) ==false){
window.alert("digite apenas caracteres validos!!");
}
else{
  // res =games.filter(ele =>)
}
})


window.removeGame = removeGame;
window.confirmRemove =confirmRemove;
window.loadCards =loadCards