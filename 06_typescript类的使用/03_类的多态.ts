class Animal {
  action() {
    console.log(`animal is actioning...`);
  }
}

class Dog extends Animal {
  action() {
    console.log(`dog is running...`);
  }
}

class Fish extends Animal {
  action() {
    console.log(`fish is swimming`);
  }
}

function getAction(animals:Animal[]) {
  animals.forEach(animal => {
    animal.action();
  })
}

getAction([new Dog(),new Fish()]);