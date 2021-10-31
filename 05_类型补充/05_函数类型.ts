// 函数类型
type fnType = (num1: number,num2: number) => number;

function calc(num1: number,num2: number,fn:fnType) {
  return fn(num1,num2);
}

let num = calc(10,20,function fn1(num1,num2) {
  return num1+num2;
})
console.log(num);

num = calc(20,10,function fn2(num1,num2) {
  return num1-num2;
})

console.log(num);


// 可选函数类型
function add(num1: number,num2?: number) {
  if(num2!=null) {
    return num1 + num2;
  } else {
    return `num1:${num1},没有传入num2`;
  }
}

console.log(add(10));

// 设置默认值
function mul(num1: number,num2: number = 100) {
  return num1*num2;
}

console.log(mul(10));


