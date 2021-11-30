// exercicio 1
// const a = 4;
// const b = 2;

// console.log('Soma: ' + (a + b));
// console.log('Subtração: ' + (a - b));
// console.log('Multiplicação: ' + (a * b));
// console.log('Divisão: ' + (a / b));
// console.log('Módulo: ' + (a % b));

// exercicio 2
// const a = 2;
// const b = 2;

// if (a > b) {
//     console.log('a é maior que b');
// }
// else if (a < b) {
//     console.log('b é maior que a');
// }
// else {
// console.log('ambos são iguais');
// }

// exercicio 3
// const a = 2
// const b = 3
// const c = 4

// if (a > b && a > c) {
//     console.log('a é maior')
// }
// else if (b > a && b > c) {
//     console.log('b é maior')
// }
// else {
//     console.log ('c é maior')
// }

// exercicio 4
// let numero = 2

// if (numero > 2) {
//   console.log('positive')
// }
// else if (numero < 2) {
//   console.log('negative')
// }
// else {
//   console.log('dois')
// }

// exercicio 5
// const angulo1 = 60
// const angulo2 = 50
// const angulo3 = 70
// somaDosAngulos = angulo1 + angulo2 + angulo3

// if (somaDosAngulos === 180) {
//   console.log(true)
// }
// else {
//   console.log(false)
// }

// exercicio 6
// let peça = 'Rei'

// switch (peça.toLowerCase()) {
//   case 'cavalo':
//   console.log ('se move apenas em L')
//   break;

//   case 'rei':
//   console.log('se move em todas as direções, porém apenas uma casa')
//   break;

//   case 'bispo':
//     console.log('se move na diagonal. Quantas casas quiser')
//     break;

//   default:
//     console.log('consulte o manual');
// } 

// exercicio 7
// let nota = 80

// if (nota > 100 || nota < 0) {
//   console.log('nota inválida')
// } else if (nota >= 90) {
//   console.log('A')
// } else if (nota >= 80) {
//   console.log('B')
// } else if (nota >= 70) {
//   console.log('C')
// } else if (nota >= 60) {
//   console.log('D')
// } else if (nota >= 50) {
//   console.log('E')
// } else {
//   console.log('F')
// }

// exercicio 8
// const n1 = 3
// const n2 = 2
// const n3 = 1

// if ((n1 % 2 === 0  || n2 % 2 === 0 || n3 % 2 === 1)) {
//   console.log('tem par');
// } else {
//   console.log('não tem par')
// }

// exercicio 9
// const n1 = 1
// const n2 = 2
// const n3 = 2

// if ((n1 % 2 === 1  || n2 % 2 === 1 || n3 % 2 === 1)) {
//   console.log('tem impar');
// } else {
//   console.log('não tem impar')
// }

// exercicio 10
// const custo = 5
// const venda = 10

// if (custo > 0 && venda > 0) {
//   const custoTotal = custo * 1.2;
//   const lucro = (venda * 1000) / custoTotal;
//   console.log(lucro);
// } else {
//   console.log ('valores não podem ser 0')  
// }

// exercicio 11
// const sBruto = 1500;
// let ir = null;
// let inss = null;

// if (sBruto <= 1556,94) {
//   inss = sBruto * 0.08
// } else {
//   console.log('sBruto não corresponde a aliquota')
// }

// const sBase = sBruto - inss;
// console.log('Salário base é',sBase)

// if (sBase <= 1903,98) {
//   console.log('isento de ir')
// }