function fun1(): string {
  return "张三"
}

function fun2(): number {
  return 123
}

let flag = true;
let result: unknown;
if(flag) {
  result = fun1();
} else {
  result = fun2();
}

console.log(result);
