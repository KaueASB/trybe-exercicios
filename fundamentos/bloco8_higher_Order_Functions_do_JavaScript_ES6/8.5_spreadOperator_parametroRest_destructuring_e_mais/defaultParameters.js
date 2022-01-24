//O que acontece quando você chama a função sem passar o argumento que ela espera? Faça esse teste com o exemplo no seu editor de códigos!

const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!


const greeting1 = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting1(); // Welcome usuário!

const greeting2 = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting2(); // Welcome usuário!

//==================================================================================

// PARA FIXAR

// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (param1, param2 = 1) => param1 * param2
console.log(multiply(2));
