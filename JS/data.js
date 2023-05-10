const Dataset = [
    {
        id:'1',
        nome: 'The Witcher 3',
        image:'img/the witcher 3.png',
        genero:['RPG','Open World'],
        link: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/'
    },
    {
        id:'2',
        nome: 'Terraria',
        image:'img/terraria.webp',
        genero:['Sandbox'],
        link: 'https://store.steampowered.com/app/105600/Terraria/'
    },

    {
        id:'3',
        nome: 'Elden Ring',
        image:'img/elden ring.jpg',
        genero:['RPG','Action','Others'],
        link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/'
    },
    {
        id:'4',
        nome: 'Grand Theft Auto V',
        image:'img/gtav.jpg',
        genero:['Action','Open World'],
        link: 'https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/'
    },

    {
        id:'5',
        nome: 'Counter Strike',
        image:'img/cs.jpg',
        genero:['FPS','Others'],
        link: 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/'
    },

    {
        id:'6',
        nome:'Minecraft',
        image:'./img/minecraft2.webp',
        genero:['Sandbox'],
        link: 'https://www.minecraft.net/pt-pt/get-minecraft'
    },

    {
        id:'7',
        nome:'Rainbow Six Siege',
        image:'./img/r6.png',
        genero:['FPS'],
        link: 'https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/'
    },

    {
        id:'8',
        nome:'Red Dead Redemption 2',
        image:'./img/reddead2.jpg',
        genero:['Action', 'Open World'],
        link: 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/'
    },
    {
        id:'9',
        nome:'Call of Duty - Warzone',
        image:'./img/warzone.jpg',
        genero:['FPS'],
        link: 'https://www.callofduty.com/br/pt/warzone'
    },
    {
        id:'10',
        nome:'Dead Island 2',
        image:'./img/dead-island-2.jpg',
        genero:['Open World','FPS','Others'],
        link: 'https://store.epicgames.com/pt-BR/p/dead-island-2'
    },
    {
        id:'11',
        nome:'Dishonored 2',
        image:'./img/dishonored-2.png',
        genero:['FPS','Action','Others'],
        link: 'https://store.steampowered.com/app/403640/Dishonored_2/'
    },
    {
        id:'12',
        nome:'Dota 2',
        image:'./img/dota-2.jpg',
        genero:['MOBA', 'Others'],
        link: 'https://store.steampowered.com/app/570/Dota_2/'
    },
    {
        id:'13',
        nome:'FIFA 22',
        image:'./img/fifa-22.jpg',
        genero:['Sports', 'Others'],
        link: 'https://store.steampowered.com/app/1506830/FIFA_22/'
    },
    {
        id:'14',
        nome:'God of War - Ragnarok',
        image:'./img/gow-ragnarok.jpg',
        genero:['Action', 'Third Person', 'RPG'],
        link: 'https://store.playstation.com/pt-br/product/UP9000-CUSA34384_00-GOWRAGNAROK00000'
    },
    {
        id:'15',
        nome:'League of Legends',
        image:'./img/lol.jpg',
        genero:['MOBA', 'RPG', 'Others'],
        link: 'https://signup.leagueoflegends.com/pt-br/signup/index?_gl=1*11bhyxi*_ga*OTIyNTk1MjU5LjE2ODM2NzUwMzg.#/'
    },
    {
        id:'16',
        nome:'Uncharted 4',
        image:'./img/uncharted-4.jpg',
        genero:['Third Person', 'FPS', 'Others'],
        link: 'https://store.steampowered.com/app/1659420/UNCHARTED_Coleo_Legado_dos_Ladres/'
    },
    {
        id:'17',
        nome:'Valorant',
        image:'./img/valorant.jpg',
        genero:['FPS', 'Others'],
        link: 'https://playvalorant.com/pt-br/'
    },
    {
        id:'18',
        nome:'Battlefield 1',
        image:'./img/bf-1.jpg',
        genero:['FPS', 'Action', 'Others'],
        link: 'https://store.steampowered.com/app/1238840/Battlefield_1/'
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


