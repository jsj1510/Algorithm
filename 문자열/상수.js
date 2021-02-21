let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];
const m = input[1];

const result = [];
let reversN = n.split('').reverse().join('');
let reversM = m.split('').reverse().join('');

if (n > m) result.push(reversN);
else result.push(reversM);


console.log(result);


