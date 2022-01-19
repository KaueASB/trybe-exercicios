//1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const newEmployees = (myFunction) => {
  const employees = {
    id1: myFunction('Pedro Guerra'),
    id2: myFunction('Luiza Drumond'),
    id3: myFunction('Carla Paiva'),
  }
  return employees;
};


const myFunction = (fullName) => {
  const email = fullName.toLowerCase().replace(" ", "_");
  return {fullName, email: `${email}@trybe.com`}
};

console.log(newEmployees(myFunction));

//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


const resultSorteio = (numbers, callback) => {
  const resultNumbers = Math.floor(Math.random() * 5 + 1);
  return callback(numbers, resultNumbers) //? 'Parabéns, você ganhou' : 'Tente novamente'; maneira que está no gabarito
};

const checkNumber = (n1, n2) => {
  let toF = n1 === n2 ? 'Parabéns, você ganhou' : 'Tente novamente';
  return toF
};
  
console.log(resultSorteio(2, checkNumber));

//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const checkAnswer = (STUDENT_ANSWERS, RIGHT_ANSWERS) => {
//   const acertos = 0;
//   if (STUDENT_ANSWERS === RIGHT_ANSWERS) {
//     return acertos += 1;
//   } if (STUDENT_ANSWERS !== RIGHT_ANSWERS) {
//     return acertos += 0.5;
//   }
//   return acertos;
// };

// const myFunction = (respostaCertas, respostaEstudante, checkAnswer) => {
//   acertos = 0;
//   for (let i = 0; i < respostaCertas.length; i += 1)
// };
// console.log(myFunction(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));
