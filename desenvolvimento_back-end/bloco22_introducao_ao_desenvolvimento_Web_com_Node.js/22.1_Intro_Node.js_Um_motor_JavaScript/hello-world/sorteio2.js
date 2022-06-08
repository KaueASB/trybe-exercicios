const readline = require('readline-sync');

const resultado = () => {
  const numSorteado = Math.floor(Math.random() * (10 + 1));
  const numEscolhido = readline.questionInt('Digite um número: ');
  if(numSorteado != numEscolhido) {
    return console.log("Não foi dessa vez. O número sorteado era", numSorteado);
  }  
  return console.log("Parbéns. Você acertou!")  
}

const main = () => {
  resultado();
  const novoJogo = readline.question("Deseja jogar novamente? (Digite 's' para sim, e qualquer outra coisa para não) ");
  if(novoJogo != 's') return console.log("OK, até a próxima!");
  main();
}

main();
