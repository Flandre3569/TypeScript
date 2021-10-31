interface IInfo {
  name: string,
  age: number,
  girlfriend?: {
    name: string,
    age: number
  }
}

const info:IInfo = {
  name: "mx",
  age: 18,
  girlfriend: {
    name: 'mm',
    age: 18
  }
}

console.log(info.girlfriend?.name);
console.log(info.name);


export {}
