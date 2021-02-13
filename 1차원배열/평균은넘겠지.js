const score = [50, 50, 70, 80, 100];
const sum = score.reduce((a, b) => a + b);
const avg = sum / score.length;

let cnt = 0;

for (let i in score) {
    if (score[i] > avg) {
        cnt++
    }
}

let result = (cnt / score.length * 100).toFixed(3);
console.log(result);