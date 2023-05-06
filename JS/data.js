const Dataset = [
    {
        id:'1',
        nome: 'the witcher',
        image:'img/the witcher 3.png',
        genero:'mundo aberto',
        preco:'100',
    },
    {
        id:'2',
        nome: 'terraria',
        image:'img/terraria.webp',
        genero:'sandbox',
        preco:'35',
    },

    {
        id:'3',
        nome: 'elden ring',
        image:'img/elden ring.jpg',
        genero:'mundo aberto',
        preco:'250',
    },
    {
        id:'4',
        nome: 'gta V',
        image:'img/gtav.jpg',
        genero:'mundo aberto',
        preco:'150',
    },

    {
        id:'5',
        nome: 'counter strike',
        image:'img/cs.jpg',
        genero:'fps',
        preco:'45',
    },

    {
        id:'6',
        nome:'minecraft',
        image:'./img/minecraft2.webp',
        genero:'sandbox',
        preco:'85',
    },

    {
        id:'7',
        nome:'raibow six',
        image:'./img/r6.png',
        genero:'fps',
        preco:'45',
    },

    {
        id:'8',
        nome:'red dead 2',
        image:'./img/reddead2.jpg',
        genero:'mundo aberto',
        preco:'200',
    },
    {
        id:'9',
        nome:'warzone',
        image:'./img/warzone.jpg',
        genero:'fps',
        preco:'0',
    },

];

function readAll(){
    if(!localStorage.getItem('games')){
        localStorage.setItem('games',JSON.stringify(Dataset));
    }
    return JSON
}
function create(GameData){
    const data = JSON.parse(localStorage.getItem('games'));

    data.push(GameData);

    localStorage.setItem('games', JSON.stringify(data));
}

export default Dataset;

