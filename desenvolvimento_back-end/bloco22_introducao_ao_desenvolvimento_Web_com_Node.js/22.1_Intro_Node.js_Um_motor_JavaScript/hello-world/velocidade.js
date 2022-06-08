const readline = require('readline-sync');

const distancia = readline.questionInt('Digite a distância em metros: ');
const tempo = readline.questionInt('Digite a velocidade em segundos: ');

const velocidadeMedia = distancia / tempo;

console.log(`A velocidade média é ${velocidadeMedia} m/s`);