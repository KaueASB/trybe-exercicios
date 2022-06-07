const readline = require('readline-sync');

const peso = readline.questionFloat('Digite seu peso: ');
const altura = readline.questionFloat('Digite sua altura: ');

const imc = peso / (altura * altura);

console.log(`Seu IMC é ${Math.floor(imc)}`);
console.log(`Seu IMC é ${Math.round(imc)}`);
console.log(`Seu IMC é ${imc.toFixed(2)}`);
