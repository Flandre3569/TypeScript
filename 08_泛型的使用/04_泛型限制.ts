interface ILength {
  length: number;
}

// 对泛型进行限制，只有传入内置属性有length的类型，才能通过类型检测。
function getLength<T extends ILength>(arg: T) {
  return arg.length;
}

let len = getLength("abc");
console.log(len);

export {}
