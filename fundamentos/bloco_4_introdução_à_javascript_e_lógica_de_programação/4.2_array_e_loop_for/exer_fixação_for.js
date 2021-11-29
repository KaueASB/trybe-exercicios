var number = 2

for (index = 0; index <= 10; index += 1) {
    console.log(number * index)
}

// let cars = ['Saab', 'Volvo', 'BMW'];
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])

// Maneira correta de se fazer utilizando o for
// let cars = ["Saab", "Volvo", "BMW"];
// for (let index = 0; index < cars.length; index += 1) {
//     console.log(cars [index])
// }

let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList [index]);
}

// FOR/OF

let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
  console.log(numero);
}

// let groceryList = ["Arroz", "Feijão", "Alface", "Melancia"];
// for (let comida of groceryList) {
//   console.log(comida);
// }

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

// let arrOfNumbers = [10, 20, 30];
// for (let sum of arrOfNumbers) {
//   sum += 1;
//   console.log(sum);
// }

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (name of names) {
  console.log(name)
}