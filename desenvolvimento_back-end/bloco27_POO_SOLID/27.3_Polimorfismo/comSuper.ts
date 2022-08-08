class Animal1 {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}

class Bird1 extends Animal1 {
  move() {
    super.move();
    console.log(`${this.name} está voando.`);
  }
}

class Mammal1 extends Animal1 {
  move() {
    super.move()
    console.log(`${this.name} está andando.`);
  }
}

const tubarão = new Animal1('Tubarão');
const papagaio = new Bird1('Papagaio');
const tatu = new Mammal1('Tatu');

const myMove1 = (animal: Animal1) => {
  animal.move();
}
myMove1(tubarão);
myMove1(papagaio);
myMove1(tatu);

/*
Saída:
Tubarão está se movendo.
Papagaio está se movendo.
Papagaio está voando.
Tatu está se movendo.
Tatu está andando.
*/