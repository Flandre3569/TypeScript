// 命名空间的使用
export namespace time {
  export function format(date:number) {
    return date;
  }

  export function foo() {
    return `time命名空间的foo已被调用`
  }

  export const num:number = 100;
}

export namespace price {
  export function format(price: number) {
    return price;
  }
  
  export function foo() {
    return `price命名空间的foo已被调用`
  }

  export const num: number = 1000;
}







