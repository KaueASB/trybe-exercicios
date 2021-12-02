// Sem função
let nome = 'João';

console.log('Bom dia, ' + nome);


// Com função
function saudacao(nome) {
  console.log('Bom dia, ' + nome);
}

saudacao('João'); // Bom dia, João
saudacao('Julia'); // Bom dia, Julia
saudacao('Marcelo'); // Bom dia, Marcelo

// Veja dois exemplos de funções sem parâmetros:
// 1º exemplo
function bomDia() {
  return 'Bom dia!';
}
console.log(bomDia()); // Bom dia!

// 2º exemplo
let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado

// E agora exemplos de funções usando parâmetros:
// Com função
// 1º exemplo
function soma(a, b) {
  return a + b;
  console.log(soma)
}

console.log(soma(5, 2)); // 7

// 2º exemplo
function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else if (segundoNum > primeiroNum) {
    return segundoNum + ' é maior que ' + primeiroNum;
  } else {
    return 'Os números são iguais';
  }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais

// Reverter a posição dos itens de um array
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);

const reversed = array1.reverse();
console.log('reversed:', reversed);

// Reverter a posição dos itens de uma string
const word1 = 'arara';
const wordReverse1 = word1.split('').reverse().join('');