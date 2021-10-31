// 对象类型
// function getPoint(point: {x: number,y: number}) {
//   console.log(`x轴坐标:${point.x}`);
//   console.log(`y轴坐标:${point.y}`);
  
// }

// getPoint({x:111,y:222})

// z轴坐标可有可无，用可选类型进行type annotation
function getPoint(point: {x: number,y: number,z?: number}) {
  console.log(`x轴坐标:${point.x}`);
  console.log(`y轴坐标:${point.y}`);
  console.log(`z轴坐标:${point.z}`);
}

getPoint({x:111,y:222});
getPoint({x:222,y:333,z:444});

export {}