function divided(id: string|number|boolean) {
  // 进行类型缩小  narrow
  if(typeof id === 'string') {
    id = id.toUpperCase();
    console.log(id);
  }else {
    console.log(id);
  }
}

let num:number = 123;
let str:string = "abc";
divided(num);
divided(str);

export {}