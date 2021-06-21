let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n] = input[0].split(' ');


function solution(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return solution(n - 1) + solution(n - 2);
}

console.log(solution(n));