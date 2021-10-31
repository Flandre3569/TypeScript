// 声明模块
declare module ladash {
  export function foo() {
    return `lodash模块的已被调用.` 
  }
}

// 声明变量
declare const num1: number;

// 声明函数
declare function getLength(args: string): string;

// 声明类
declare class Person {
  name: string;
  age: number;
  girlfriend?: {
    name: string;
    age: number;
  }
}

// 声明文件
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'

// 声明命名空间  例如：在ts中使用jquery
declare namespace $ {
  export function ajax(params:any) {
    
  }
}