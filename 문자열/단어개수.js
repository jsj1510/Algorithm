let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0].split(' ');

let count = 0;
let space = ' ';

for (let i in n) {
    if (n[i] !== space) {
        count++;
    }
}

console.log(count);