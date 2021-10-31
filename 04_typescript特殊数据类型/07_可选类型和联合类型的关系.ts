// 可选类型
function foo1(message?:string) {
  console.log(message);
  
}

// 可以传也可以不传,也可以传入undefined
foo1();
foo1(undefined);
foo1("123");

// 当一个类型是可选类型的时候，可以表示为其他类型和undefined的联合类型
function foo2(message: string|undefined) {
  console.log(message);
}

foo2(undefined);
foo2("321");

