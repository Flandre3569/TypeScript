// 类型别名，可以用type自己创建新的类型。
type IdType = string|number|boolean;
type PointType = {
  x: number,
  y: number,
  z?: number
};

function printId(ID:IdType) {
  console.log(ID);
}

function printPoint(point:PointType) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}

printId(123);
printPoint({x:123,y:321,z:555});