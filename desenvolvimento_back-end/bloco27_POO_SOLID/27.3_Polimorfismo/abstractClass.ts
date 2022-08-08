abstract class Animal2 {
  constructor(public name: string) { }
  abstract move(): void
}

class Fish extends Animal2 {
  move() { console.log(`${this.name} está nadando.`); }
}

class Bird2 extends Animal2 {
  move() { console.log(`${this.name} está voando.`); }
}

class Mammal2 extends Animal2 {
  move() { console.log(`${this.name} está andando.`); }
}

const a2 = new Fish('Tubarão');
const b2 = new Bird2('Papagaio');
const m2 = new Mammal2('Tatu');

const myMove2 = (animal: Animal2) => {
  animal.move();
}
myMove2(a2);
myMove2(b2);
myMove2(m2);


/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/