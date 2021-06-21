let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input); // 원판의 갯수
let count = 0;
let answer = [];

function Hanoi(N, from, other, to){
  if(N !== 0) {
    Hanoi(N - 1 , from, to, other);

    answer.push([from, to]);
    count++;

    Hanoi(N - 1, other, from, to);
  }
}
Hanoi(N, '1','2','3');
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));