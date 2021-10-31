class Person {

};

class Student extends Person {
  study() {
    console.log(`正在学习中...`);
  }
}

function sayHello(p: Person) {
  (p as Student).study();
}

const stu = new Student();
sayHello(stu);
