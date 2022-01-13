const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

//uma maneira
for (const property in coolestTvShow) {
  console.log(property);
}
//outra maneira
console.log(Object.keys(coolestTvShow))

//2
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};
/* outra maneira de fazer */
// const habilidades = (estudante) => {
//   for (let key of Object.keys(estudante)) {
//     console.log(`${key}, Valor: ${estudante[key]}`);
//   }
// }

const habilidades = (estudante) => {
  const array = Object.keys(estudante);
  const arrayValor = Object.values(estudante)
  for (let key in array) {
    console.log(`${array[key]}, Valor: ${arrayValor[key]}`);
  }
}
console.log('Estudante 1');
habilidades(student1);

console.log('Estudante2');
habilidades(student2);