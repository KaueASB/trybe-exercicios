// Exemplo 1: Tratando erros de forma síncrona.

function dividirNumeros(num1, num2) {
  if (num2 == 0) throw new Error("Não pode ser feito uma divisão por zero");

  return num1 / num2;
}

try {
  const resultado = dividirNumeros(2, 1);
  console.log(`resultado: ${resultado}`);
} catch (e) {
  console.log(e.message);
}

// Exemplo 2: Tratando erros de forma assíncrona.

function dividirNumeros(num1, num2) {

    // a chamada da Promisse resolve ou rejeita e sempre sucede o new. Ficandi assim: new Promisse
  const promise = new Promise((resolve, reject) => {

    // o reject substitui o throw
    if (num2 == 0) reject(new Error("Não pode ser feito uma divisão por zero"));

    const resultado = num1 / num2;

    // o resolve substitui o return
    resolve(resultado)
  });

  return promise;
}

dividirNumeros(2, 1)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`erro: ${err.message}`));