// 使用字面量类型限制范围
type aliment = 'left'|'right'|'center';

let align:aliment = 'left';
align = 'right';
align = 'center';


// 字面量类型的推理
type Method = 'POST'|'GET';
function request(url: string,method: Method) {
  console.log(`url:${url}`);
  console.log(`method:${method}`);
}

type Request = {
  url: string,
  method: Method
}

const options:Request = {
  url: "www.baidu.com",
  method: 'POST'
}
request(options.url,options.method);


export {}
