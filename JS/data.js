const Dataset = [
    {
        id:'1',
        nome: 'The Witcher 3',
        image:'img/the witcher 3.png',
        genero:['RPG '],
    },
    {
        id:'2',
        nome: 'Terraria',
        image:'img/terraria.webp',
        genero:['Sandbox '],
    },

    {
        id:'3',
        nome: 'Elden Ring',
        image:'img/elden ring.jpg',
        genero:['RPG ','Ação e Aventura', 'Outros'],
    },
    {
        id:'4',
        nome: 'Grand Theft Auto V',
        image:'img/gtav.jpg',
        genero:['Ação e Aventura'],
    },

    {
        id:'5',
        nome: 'Counter Strike',
        image:'img/cs.jpg',
        genero:['FPS '],
    },

    {
        id:'6',
        nome:'Minecraft',
        image:'./img/minecraft2.webp',
        genero:['Sandbox '],
    },

    {
        id:'7',
        nome:'Rainbow Six Siege',
        image:'./img/r6.png',
        genero:['FPS '],
    },

    {
        id:'8',
        nome:'Red Dead Redemption 2',
        image:'./img/reddead2.jpg',
        genero:['Ação e Aventura '],
    },
    {
        id:'9',
        nome:'Call of Duty - Warzone',
        image:'./img/warzone.jpg',
        genero:['FPS '],
    },

];

// function readAll(){
//     if(!localStorage.getItem('games')){
//         localStorage.setItem('games',JSON.stringify(Dataset));
//     }
//     return JSON
// }
// function create(GameData){
//     const data = JSON.parse(localStorage.getItem('games'));

//     data.push(GameData);

//     localStorage.setItem('games', JSON.stringify(data));
// }

export default Dataset;


