let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let arr = [];

for (let i = 97; i <= 122; i++) {
  let alphabet = String.fromCharCode(i);

  for (let j = 0; j < input.length; j++) {
    arr.push(input[j].indexOf(alphabet));
  }
}

let result = arr.join(' ');

console.log(result);