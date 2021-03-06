const readline = require('readline-sync');

function calculaElemento(quantity) {
  // a armazena o último número que calculamos
  let a = 1;
  // b armazena o penúltimo número que calculamos
  let b = 1;

  // Repetimos o loop enquanto `n` for maior que 0
  for (let n = quantity; n >= 0; n -= 1) {
    if (b) console.log("primeiro console", b);
    // Armazenamos o último valor calculado em uma variável temporária
    const temp = a;
    console.log("console temp", temp);
    // Para calcular o novo valor, somamos o último valor com o penúltimo valor
    // O novo valor é armazenado em `a`, já que ele passa a ser o último valor calculado
    a += b;
    console.log("console a += b", a += b);

    // O valor antigo de `a`, que estava armazenado na variável temporária
    // agora se torna o penúltimo número e, por isso, é armazenado em `b`
    b = temp;
    console.log("console b", b);
  }

  console.log("segundo console", b);
  return b;
}

function main() {
  const n = readline.questionInt('Digite o valor de n: ');

  if (n <= 0) {
    console.log('Digite um número maior que 0!');
    return;
  }

  console.log(`n: ${n}`);

  calculaElemento(n - 2);
}

main();