class Person {
  name: string;
  age: number;

  constructor(name: string,age: number) {
    this.name = name;
    this.age = age;
  }

  study() {
    console.log(`${this.name}正在学习...`);   
  }
}

const person = new Person("mx",18);
console.log(person.age);
person.study();



export {}