const readline = require("readline"); 
const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); 

let input = [];
rl.on("line", (line) => { 
    input.push(line); 
}).on("close", () => { 
let [n, m] = input[0].split(" ").map((el) => parseInt(el));
    solution();
});
function solution(n, m) {
    let sum = 0;
    while (true) {
        if (n > m) {
            return sum = n + m;
        } else if (n === 0 && m === 0){
          break;  
        }
         break;
    }
}

