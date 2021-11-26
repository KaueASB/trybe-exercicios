/* variáveis */
// const myName = 'Kaue';
// const birthCity = 'mauá';
// let birthYear = 1995;

// birthYear = 2030;

// console.log(myName);
// console.log(birthCity);
// console.log(birthYear);

// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);
// console.log(typeof patientAge);

/* operadores aritméticos */
// const base = 5;
// const height = 8;
// const area = (base*height);
// const perimeter = (2*base + 2*height);

// console.log(base);
// console.log(height);
// console.log(area);
// console.log(perimeter);

/* if/else */
// const note = 79;

// if (note >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!");
// }
// else if (note<80 && note>=60) {
//   console.log("Você está na nossa lista de espera");
// }
// else {
//   console.log("Você foi reprovada(o)");
// }

/* and (&&)*/
// const comida = 'pão na chapa';
// const bebida = 'caldo de cana';

// if (bebida === 'cafézinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

// const conditionOne = true;
// const conditionTwo = false;

// console.log(conditionOne && conditionTwo);

// const cenouras = true;
// const leite = true;
// const arroz = true;
// const feijao = true;

// const listaDeCompras = cenouras && leite && arroz && feijao;

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// const currentHour = 12;
// let message = null; /* Pode ser null ou "" */

// if (currentHour >= 22) {
//  message = "Não deveríamos comer nada, é hora de dormir";
// }
// else if (currentHour >= 18 && currentHour < 22){
//  message = "Rango da noite, vamos jantar :D";
// }
// else if (currentHour >= 14 && currentHour < 18){
//  message = "Vamos fazer um bolo pro café da tarde?" ;
// }
// else if (currentHour >= 11 && currentHour < 14){
//  message = "Hora do almoço!!!";
// }
// else if (currentHour >= 4 && currentHour <= 11){
//  message = "Hmmm, cheiro de café recém passado";
// }
// else {
//  message = 'Hora de Dormir';
// }

// console.log(message);

// Or (||)
// const bebidaPrincipal =  'cafezinho';
// const bebidaAlternativa = 'suco de laranja';

// if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
//   console.log("Obrigado por me atender :D")
// } else {
//   console.log("Ei, eu não pedi isso!");
// }

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// let weekDay = 'segunda-feira'

// if (weekDay === 'segunda-feira' || weekDay === "terça-feira" ||  weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//   console.log("Oba, mais um dia de aprendizado na Trybe >:D")
// }
// else {
//   console.log("FINALMENTE, descanso merecido UwU");
// }

// not (!)
// console.log((2 + 2) === 4);
// console.log(!(2 + 2) === 4);

// const squirtle = "melhor pokemon inicial";
// console.log(!squirtle); // false

// console.log(!42); // false
// console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

// console.log(!null); // true
// console.log(!undefined); // true