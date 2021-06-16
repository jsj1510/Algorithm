let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0].split(' ');


function solution(n) {
  if (n === 0 || n === 1) return 1;
  return solution(n - 1) * n;
}

console.log(solution(n));