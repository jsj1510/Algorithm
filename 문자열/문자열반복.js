let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let result = '';

for (let i = 0; i <= n; i++) {
  let count = Number(input[i].split(' ')[0]);
  let cases = input[i].split(' ')[1];
  
  for (let j in cases) {
    for (let k = 0; k < count; k++) {
      result += cases[j];
    }
  }
  result += '\n';
}

console.log(result);