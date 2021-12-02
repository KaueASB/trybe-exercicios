// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
let word1 = "arara";
let wordReverse1 = word1.split("").reverse().join("");
let word2 = "desenvolvimento";
let wordReverse2 = word2.split("").reverse().join("");

function palindromoCheck(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(palindromoCheck(word1, wordReverse1));
console.log(palindromoCheck(word2, wordReverse2));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Valor esperado no retorno da função: indice 4 (numero 10)
let array = [2, 3, 6, 7, 10, 1];
let auxMaior = 0;
function iMaior(array) {
  for (let i in array) {
    if (array[auxMaior] < array[i]) {
      /* if (auxMaior < array[1]){ */
      auxMaior = i; /* auxMaior = array[i] */
    }
  }
  return auxMaior;
}
console.log(iMaior(array));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. Valor esperado no retorno da função: 6.
let array2 = [2, 4, 6, 7, 10, 0, -3];
let auxMenor = 0;
function iMenor(array2) {
  for (let i in array2) {
    if (array2[auxMenor] > array2[i]) {
      auxMenor = i;
    }
  }
  return auxMenor;
}
console.log(iMenor(array2));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. Valor esperado no retorno da função: Fernanda
const array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
let auxNome = '';
function maiorNome(array) {
  for (let i in array) {
    if (auxNome.length < array[i].length) {
      auxNome = array[i]
    }
  }
  return auxNome
}
console.log(maiorNome(array));

