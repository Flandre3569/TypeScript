function select(message:string|number) {
  switch(typeof message) {
    case 'string':
      console.log(`string类型的处理`);
      break;

    case 'number':
      console.log(`number类型的处理`);
      break;
    default:
      // 绝对不会进行到这一步，如果产生多余的没有处理的数据类型，就会报错
      const info:never = message;
  }
}

let message:string = "张三";
select(message);


export {}