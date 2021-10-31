// 可选链的使用  可选运算符: ?.
type Person = {
  name:string,
  friend?: {
    name: string,
    girlfriend?: {
      name: string
    }
  }
}

const info:Person = {
  name: "张三"
}
const info2:Person = {
  name: "李四",
  friend: {
    name: "王五"
  }
}

console.log(info.name);
console.log(info.friend?.girlfriend?.name);
console.log(info2.friend?.name);



export {}