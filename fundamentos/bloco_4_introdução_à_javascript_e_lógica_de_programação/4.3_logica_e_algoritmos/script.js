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