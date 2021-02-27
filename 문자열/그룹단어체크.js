let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = input[0];

let cnt = 0;

for (let i = 0; i < n; i++) {
    const word = input[i];
    const result = []

    let isGroupWord = true;

    for (let j = 0; j < word.length; j++) {
      if (result.indexOf(word[j]) === -1) {
        result.push(word[j]);
      } else {
        if (result.indexOf(word[j]) !== result.length - 1) {
          isGroupWord = false;
          break;
        }
      }
    }
  
    if (isGroupWord) {
      cnt++;
    }
}

console.log(cnt);
