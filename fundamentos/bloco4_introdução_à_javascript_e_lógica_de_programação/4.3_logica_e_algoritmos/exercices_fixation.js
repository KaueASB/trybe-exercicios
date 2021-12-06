let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for (i = 0; i < fruits.length; i += 1) {
    soma += fruits[i];
}

if (soma > 15) {
    console.log(soma)
} else {
    console.log('menor que 15')
}

/*  */

const n = 9;

let resultado = 100;
for (i = 0; i <= n; i += 1) {
  resultado -= i;
}
console.log(resultado);

/*  */

const N = 5;

let result = 0;
for (i = 0; i <= N; i += 1) {
  result += i;
}
console.log(result);