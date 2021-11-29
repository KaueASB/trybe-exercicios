let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('dormir')

console.log(tasksList.length);

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.unshift('acordar')
// tasksList.push('dormir')

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop(tasksList.length - 1);
console.log(tasksList);

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.shift(0);
// console.log(tasksList);

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let positionOfTask = tasksList.indexOf('Tomar café');
console.log(positionOfTask);