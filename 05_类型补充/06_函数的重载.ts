// 函数声明
function add(num1: number,num2: number): number;
function add(str1: string,str2: string): string;

// 函数实现
function add(item1: any,item2: any): any {
  return item1 + item2;
}

console.log(add(10,20));
console.log(add("hello","world"));


export {}