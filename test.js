let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

for (let i = 0; i < numbers.length; i++){
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);

  console.log(num1 + num2);
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  console.log(input);
  process.exit();
});


function solution(input) { 
  console.log(list); 
}
 const readline = require("readline");
  const rl = readline.createInterface({ 
    input: process.stdin, output: process.stdout, 
  }); 
  let input = []; 
  let list = []; 
  rl.on("line", function (line) { 
    //여러줄 입력 
    input.push(line) 
    //rl.close()가 없어서 계속입력 
    //로컬에서 입력을 중지할려면 입력을 한 후 'ctrl + D'을 통해 입력 종료 
  }).on("close", function () { 
    // 이런식으로 적절하게 입력값을 처리해줘야한다. 
    let n = parseInt(input[0]); 
    //띄어쓰기 기준으로 배열에 넣기 
    let list = input[1].split(' ').map((el) => parseInt(el)); solution(list); 
    //프로세스 종료 
    process.exit();
   });