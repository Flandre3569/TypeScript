class Person {
  // 类的成员修饰符，有private protected public三种
  private _name: string;
  // 构造器 进行初始化
  constructor(name: string) {
    this._name = name
  }
  // 访问器getter/setter方法
  set name(newName: string) {
    this._name = newName;
  }
  get name() {
    return this._name
  }
}

const person = new Person("mx");
person.name = "xx";

console.log(person.name);


export {}