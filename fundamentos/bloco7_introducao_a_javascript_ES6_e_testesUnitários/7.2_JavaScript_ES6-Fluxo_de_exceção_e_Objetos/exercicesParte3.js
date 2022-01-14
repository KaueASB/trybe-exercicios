//1
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* const newKey = (obj, key, value) => {
  obj[key] = value;
};

newKey(lesson2, 'turno', 'noite');
console.log(lesson2); */

//2
const listKey = (obj) => Object.keys(obj);
console.log(listKey(lesson1));

//3
const tamanhoArray = (obj) => Object.keys(obj).length;
console.log(tamanhoArray(lesson3));

//4
const listValue = (obj) => Object.values(obj);
console.log(listValue(lesson1));

//5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);