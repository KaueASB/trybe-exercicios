// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra "a" maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = names.map((name) => {
  const quantityA = name.toLowerCase().split('').reduce((acc, name) => (name === 'a') ? acc + 1 : acc, 0);
  return quantityA;
}).reduce((acc, curr) => acc + curr, 0);

console.log(containsA);

// .reduce((acc, item) => acc + item);
