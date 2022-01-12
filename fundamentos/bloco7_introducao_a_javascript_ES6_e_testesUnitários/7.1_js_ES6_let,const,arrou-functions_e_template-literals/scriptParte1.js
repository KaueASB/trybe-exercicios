//exercicio 1
const teste = escopo => (escopo === true ? `Não devo ser utilizada fora do meu escopo ${'(if)'}` : `Não devo ser utilizada fora do meu escopo ${'(else)'}`
);
console.log(teste(1));

//exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//uma maneira de fazer
const comparaNumeros = (a,b) => { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
oddsAndEvens.sort(comparaNumeros)
console.log(oddsAndEvens); // será necessário alterar essa linha 😉

//outra maneira de fazer
const ordenado = oddsAndEvens.sort((a, b) => a - b);
console.log(ordenado);
