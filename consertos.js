//Micro desafio - Passo 1 
//Crie um array de objetos consertos que tenha como atributos: aparelho (string),
//itens consertados (array de strings), valores (array de números) e pronto (booleano). Deve 
//ter ao menos 15 itens dentro de consertos salve o arquivo como consertos.js e exporte 
//este módulo. Módelo de exemplo do array de consertos
const consertos = [
    {
        cliente:"Fabio Perez",
        os: 1313,
        aparelho:"motorola G2",
        intensConserto: ["tela", "placa","touch"],
        valor: [200, 150,100],
        statusReparo: true   
    },

    {
        cliente:"Eduardo Petenussi",
        os: 1314,
        aparelho:"motorola G5",
        intensConserto: ["tela", "cabo","pelicula"],
        valor: [200, 50, 52],
        statusReparo: true   
    },

    {
        cliente:"Ricardo Petenussi",
        os: 1315,
        aparelho:"Samsung Galaxy",
        intensConserto: ["cabo", "sistema"],
        valor: [50, 30],
        statusReparo: false   
    },

    {
        cliente:"Luana Clemente",
        os: 1316,
        aparelho:"samsung a10",
        intensConserto: ["tela", "sistema","placa"],
        valor: [200, 50, 250],
        statusReparo: true   
    },

    {
        cliente:"Jose da Silva",
        os: 1317,
        aparelho:"lg k10",
        intensConserto: ["touch", "sistema","placa"],
        valor: [200, 50, 150],
        statusReparo: false   
    },

    {
        cliente:"Maria Aparecida",
        os: 1318,
        aparelho:"motorola g30",
        intensConserto: ["touch", "sistema","placa"],
        valor: [200, 50, 150],
        statusReparo: false   
    },

    {
        cliente:"Catia Cilene",
        os: 1319,
        aparelho:"xaomi ",
        intensConserto: ["touch", "sistema","placa"],
        valor: [230, 20, 150],
        statusReparo: true  
    },

    {
        cliente:"Julia Perez",
        os: 1320,
        aparelho:"Nexus ",
        intensConserto: ["placa", "sensor carregador","touch"],
        valor: [230, 80, 160],
        statusReparo: true  
    },

    {
        cliente:"Mario Cardoso",
        os: 1321,
        aparelho:"samsung A20 ",
        intensConserto: ["sensor", "carregador","tela"],
        valor: [80, 50, 230],
        statusReparo: true  
    },

    {
        cliente:"Rodrigo Vieira",
        os: 1322,
        aparelho:"samsung A30 ",
        intensConserto: ["tela", "carregador","cabo"],
        valor: [220, 50, 60],
        statusReparo: true  
    },

    {
        cliente:"Wilian Matos",
        os: 1323,
        aparelho:"Motorola g20 ",
        intensConserto: ["sistema", "carregador","tela"],
        valor: [80, 50, 230],
        statusReparo: true  
    },

    {
        cliente:"Gabriel Arantes",
        os: 1324,
        aparelho:"lg k20 ",
        intensConserto: ["sensor", "carregador","touch"],
        valor: [80, 50, 230],
        statusReparo: true  
    },

    {
        cliente:"Lucas Pereira",
        os: 1325,
        aparelho:"lg k60 ",
        intensConserto: ["tela", "sensor","sistema"],
        valor: [200, 150, 30],
        statusReparo: true  
    },

    {
        cliente:"Dirce Morales",
        os: 1326,
        aparelho:"Azus ",
        intensConserto: ["tela", "sensor","sistema"],
        valor: [200, 150, 30],
        statusReparo: true  
    },

    {
        cliente:"Lucelia Arantes",
        os: 1327,
        aparelho:"lg k15 ",
        intensConserto: ["tela", "sensor","sistema"],
        valor: [200, 150, 30],
        statusReparo: false  
    },
]
module.exports = consertos;

