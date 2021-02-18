const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0].split('');
const k = input[1].split('');
let sum = 0;

for (let i = 0; i < n; i++) {
    sum = sum + Number(k[i]);
}

console.log(sum);