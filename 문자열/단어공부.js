let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let word = input[0].toUpperCase();
let resultObj = {}; 

for (let i in word) {
  let count = 0;
  for (let j in word) {
    if (word[i] === word[j]) {
      count++;
    }
    resultObj[word[i]] = count;
  }
}
delete resultObj['\n'];

let result = '';
let count = 0;

for(k in resultObj) {
  if (resultObj[k] > count) {
    count = resultObj[k];
    result = k.toUpperCase();
  } else if (resultObj[k] === count) {
    result = '?';
  }
}

console.log(result);