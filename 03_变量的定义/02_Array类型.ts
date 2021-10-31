const names: Array<string> = ["张三","李四","王五","赵六"];//不推荐
const habits: string[] = ["篮球","足球","乒乓球","跳绳"];//推荐

for(let name of names) {
  console.log(`姓名: ${name}`);
}

for(let habit of habits) {
  console.log(`爱好：${habit}`);
}