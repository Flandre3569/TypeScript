class Person {
  name: string;
  age: number;
  constructor(name: string,age: number) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log('person在吃饭...');  
  }
}

class student extends Person {
  sno: number;
  constructor(name: string,age: number,sno: number) {
    super(name,age);
    this.sno = sno;
  }
  eating() {
    super.eating();
    console.log(`学生${this.name}在吃饭...`);    
  }
}

class teacher extends Person {
  tno: number;
  constructor(name: string,age: number,tno: number) {
    super(name,age);
    this.tno = tno;
  }

  eating() {
    super.eating();
    console.log(`老师${this.name}在吃饭...`); 
  }
}

const stu = new student("mx",21,2016);
const tch = new teacher("mr",28,2009);

stu.eating();
tch.eating();

export {}