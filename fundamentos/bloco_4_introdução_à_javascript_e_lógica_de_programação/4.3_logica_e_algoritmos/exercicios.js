// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:// O fatorial é representado pelo sinal !.  != 4 x 3 x 2 x 1 = 24
let fatorial = 10;
let resultFator = fatorial;

for (let i = 1; i < fatorial; i += 1) {
  resultFator *= i;
}
console.log(resultFator);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = "tryber";
let wordReverse = word.split("").reverse().join("");
console.log(wordReverse);

// 3- Considere o array de strings abaixo:
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ["java", "javascript", "python", "html", "css"];
let maiorNome = array[0];
let menorNome = array[0];

for (i = 0; i < array.length; i += 1) {
  if (array[i].length > maiorNome.length) {
    maiorNome = array[i];
  }
}
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < menorNome.length) {
    menorNome = array[i];
  }
}
console.log(maiorNome);
console.log(menorNome);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let maiorNumPrimo = 0;

for (let numero = 2; numero <= 50; numero += 1) {
  let ePrimo = true;

  for (let divisor = 2; divisor <= 50; divisor += 1) {
    if (numero % 2 === 0) {
      ePrimo = false;
    }
  }
  if (ePrimo) {
    maiorNumPrimo = numero;
  }
}
console.log(maiorNumPrimo);