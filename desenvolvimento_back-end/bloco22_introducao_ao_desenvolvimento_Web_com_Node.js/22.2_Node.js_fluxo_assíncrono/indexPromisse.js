const fs = require('fs');

const readFilePromise = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data.toString('utf8'));
      }
    });
  });
};

readFilePromise('./arquivo.txt')
  .then((resolved) => console.log(`Conteúdo do arquivo: ${resolved}`))
  .catch((err) => console.log(err.message));

////////////////////////////////////////////////////////////////////////

const fs = require('fs');

const readFileMyPromisse = (fileName) => {
  const promisse = new Promise((resolved, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) reject(new Error(`Não foi possível ler o arquivo ${fileName}`));
      resolved(data.toString('utf8'));
    })
  })
  return promisse;
}

readFileMyPromisse('./arquivo.txt')
  .then((resolved) => console.log(`Conteúdo do arquivo: ${resolved}`))
  .catch((err) => console.log(err.message));

////////////////////////////////////////////////////////////////////////

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('arquivo.txt') // A função me promete que vai ler o arquivo
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido arquivo.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file1.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then((content) => { // Caso arquivo 1 seja lido,
    console.log(`Lido file1.txt com ${content.byteLength} bytes`); // Escrevo o resultado no console
    return readFilePromise('file2.txt'); // Chamo novamente a função, que me retorna uma nova Promise
  })
  .then(content => { // Caso a Promise retornada pelo `then` anterior seja resolvida,
    console.log(`Lido file2.txt com ${content.byteLength} bytes`); // Escrevemos o resultado no console
    return readFilePromise('file3.txt'); // E chamamos a função novamente, recebendo uma nova promessa
  })
  .then((content) => { // Caso a promessa de leitura do `file3.txt` seja resolvida,
    console.log(`Lido file3.txt com ${content.byteLength} bytes`); // Logamos o resultado no console
  })
  .catch((err) => { // Caso qualquer uma das promessas ao longo do caminho seja rejeitada
    console.log(`Erro ao ler arquivos: ${err.message}`); // Escrevemos o resultado no console
  });
