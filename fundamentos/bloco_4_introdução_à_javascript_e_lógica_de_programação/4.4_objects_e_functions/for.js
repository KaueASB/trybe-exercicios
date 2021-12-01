// Depois de conhecer o laço for/in , o código que mostra as marcas de carros presentes em um Array é:
let cars = ['Saab', 'Volvo', 'BMW'];

for (let valor in cars) {
  console.log(cars[valor]);
}

// Um outro exemplo é a iteração nas chaves de um objeto:
let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(car[index]);
  }

  // Entretanto, é importante ressaltar que existe uma diferença entre o For/in e o For/of , que vimos anteriormente. Como dito no vídeo, o For/in percorre as propriedades dos objetos que forem enumeráveis com base na ordem de inserção, e não nos valores das propriedades. Por exemplo, se tivermos um array com três strings dentro:
  let food = ['hamburguer', 'bife', 'acarajé'];
  for (i in food) {
    console.log(i)
  }

  // Se percorrermos um objeto, também teremos o mesmo resultado. O For/in irá percorrer a propriedade declarada, e não o seu valor em si. Já o For/of percorre os elementos dos objetos iteráveis através dos seus respectivos valores, e não dos índices como o For/in . Vejamos o exemplo:
  let food = ['hamburguer', 'bife', 'acarajé'];
  for (let value of food) {
    console.log(value);
};