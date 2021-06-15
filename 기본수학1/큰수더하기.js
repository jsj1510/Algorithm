const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  // BigInt를 사용하면 에러가 나온다 number , parseInt는 크기가 모자르다
    input = line.split(' ').map(e => Number(e));
    const result = input[0] + input[1];
    console.log(result);
  })
  .on('close', function () {
    process.exit();
});