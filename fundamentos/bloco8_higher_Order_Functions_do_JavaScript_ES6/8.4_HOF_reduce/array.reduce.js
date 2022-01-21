//A função soma todos os valores de um array:
// Apenas com o for :

const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

//=======================================================================================================

// Com .reduce :

const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers2 = numbers2.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers2); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers3 = numbers2.reduce(getSum);
console.log(sumNumbers3); // 113

//===========================================================================================

const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers); // 15

//============================================================================================

//O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função .
// Pode ver que mudou em nada o resultado da função. Mas veja que o primeiro valor do result não foi 32 , mas sim 0 .

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
};
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

const numbers = [32, 15, 3, 2, -5, 56, 10];

//==============================================================================================

// Agora mude o 0 para 10 ou qualquer outro valor.
const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123

//===============================================================================================

// Hora de olhar outro exemplo para fixar e mostrar outras formas de se usar o reduce . Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce . Caso não consiga, olhe a solução abaixo:

const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

//===============================================================

// Solução usando filter e reduce :
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

//================================================================

// Solução usando apenas reduce :
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const isEven = (result, number) => ((number % 2 === 0) ? result + number : result);
console.log(numbers.reduce(isEven));

//================================================================

//outra maneira
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152

//======================================================================================================