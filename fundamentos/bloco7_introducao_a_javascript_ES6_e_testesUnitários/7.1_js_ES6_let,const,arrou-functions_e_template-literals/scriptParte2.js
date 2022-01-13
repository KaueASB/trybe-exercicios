//exercicio 1
const fatorial = num => {
  let resultado = 1;
  for (let i = 1; i <= num; i += 1) {
    resultado *= i;
  }
  return resultado;
}
console.log(fatorial(5));

//maneira que está no course
const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

//exercicio 2
const maiorWord = palavra => palavra.split(' ').sort((w1, w2) => w2.length - w1.length)[0];
console.log(maiorWord('Antônio foi no banheiro e não sabemos o que aconteceu')) // retorna 'acmaiorWord

//exercicio 3
let clickCount = 0;
let count = document.getElementById("count");
const btn = document.getElementById('btn').addEventListener('click', () => count.innerHTML = clickCount +=1);