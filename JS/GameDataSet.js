import Dataset from "./data.js";
 
const CardGames = document.querySelector('#Game-Cards')

export function CreateCard(nome,image,genero){

    const card =`<div class="col">
    <div class="card">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${nome}</h5>
            <p class="card-text">Genero: ${genero}</p>
            <button id="btn" type="button" class="btn btn-primary rounded-circle text-right">+</button>
        </div>
    </div>
    </div> `;

    CardGames.insertAdjacentHTML('beforeend', card);

}

export function LoadCards(){
    Dataset.forEach(({nome,image,genero}) => CreateCard(nome,image,genero));  
}

export function FilterCards(ident){
    const filtro =Dataset ; 
    const test1 = filtro.filter(filtro => filtro.id == ident);
    //CreateCard(test1.nome,test1.image,test1.genero);

    test1.forEach(({nome,image,genero,preco}) =>ShowBuyCard(nome,image,genero,preco));   
}

export function ShowBuyCard(nome,image,genero,preco){

    const buycard =`<div class="col">
    <div class="card">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${nome}</h5>
            <h6 class="card-text">Genero: ${genero}</h6>
            <p id ="preco">$: ${preco}</p>
            <button id="btn-buy" type="button" class="btn btn-primary rounded-circle text-right">%</button>
        </div>
    </div>
    </div>`

    CardGames.insertAdjacentHTML('beforeend', buycard);
}

//função para dar um desconto no preço usando map ,não consegui implementar
function dicount(){
    
}

