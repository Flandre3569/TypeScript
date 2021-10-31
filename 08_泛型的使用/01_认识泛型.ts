function getNum<Type>(num: Type): Type {
  return num;
}

getNum<number>(20);
getNum<string>("mx");
getNum<any[]>(['123','321','213']);

console.log(getNum<number>(20));
console.log(getNum<string>("mx"));
console.log(getNum<any[]>(['123','321','213']));
