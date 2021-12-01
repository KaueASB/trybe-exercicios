// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24

let fatorial = 10;
let resultFator = 0;
let aux = 0;

for (i = 0; i < fatorial; i += 1) {
  aux += i;
  resultFator = fatorial * aux;
}
console.log(resultFator);