let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [A, B, C] = input[0].split(' ');


const profit = C - B;

if(profit <= 0) {
    console.log(-1);
} else {
    console.log(Math.floor(A / profit) + 1);
}
