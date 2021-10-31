// 联合类型实现
// function getLength(arg: any[] | string) {
//   return arg.length;
// }

// console.log(getLength("hello world"));
// console.log(getLength([123,321,321223]));

// 重载实现
function getLength(arg: string): number;
function getLength(arg: any[]): number;

function getLength(arg: any): number {
  return arg.length;
}

console.log(getLength("hello world"));
console.log(getLength([123,321,12312]));

// 二者如果都能实现的时候，如果使用联合类型能够方便简单的实现的话，
// 尽量使用联合类型实现
// 如果联合类型使用较为麻烦的时候，或者不能用联合类型的时候，就用函数的重载


export {}