let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];

let croatia = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;

const result = n.replace(croatia, ' ');

console.log(result.length);