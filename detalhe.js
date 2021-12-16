//Micro desafio - Passo 2 
//Importe o arquivo de consertos E faça as seguintes manipulações: 
//Liste e exiba somente os aparelhos com pronto marcado como true
//Liste e exiba somene os aparecelhos com pronto marcado como false

//************************************************************

//Micro desafio - Passo 3 
//Liste os aparelhos exibindo o modelo do aparelho juntamente dos itens 
//consertados e aplique uma soma nos valor dos consertos e exibir no console somente os 
//aparelhos que estão pronto marcado como true. Exemplo


const consertos = require('./consertos'); // importacao do arquivo



const aparelhosPronto = []; // variavel ira receber os aparelhos marcados com true
const aparelhoAguardando = [];// variavel ira receber os aparelhos marcados com true

consertos.forEach(item => {
    item.statusReparo === true ? aparelhosPronto.push(item) : aparelhoAguardando.push(item);
});

console.log('************************************')
console.log('Aparelhos Disponiveis para Retirada:'); //Liste e exiba somente os aparelhos com pronto marcado como true
console.log('************************************')
aparelhosPronto.forEach(item => {
    console.log(item.aparelho);
});
console.log('************************************');
console.log('Aparelhos Aguardando Aprovação:');     //Liste e exiba somene os aparecelhos com pronto marcado como false
console.log('************************************');
aparelhoAguardando.forEach(item => {
    console.log(item.aparelho);
});

console.log('--------------------');
console.log ('**************************************');
console.log ('Detalhamento dos Equipamentos Prontos');//Lista detalhada aparelhos true
console.log ('**************************************');
aparelhosPronto.forEach(item => {
    console.log(`Caro Cliente: ${item.cliente} sua O.S de Numero: ${item.os} encontra-se pronta, segue abaixo os dados` );
    console.log(`Aparelho: ${item.aparelho}`);
    console.log('Itens consertados:');
    item.intensConserto.forEach(consertado => {
        console.log(`* ${consertado}`);
    })
    let soma = item.valor.reduce((valorA,valorB) => valorA + valorB)
    console.log(`Valor total: R$ ${soma},00 \n`)
});