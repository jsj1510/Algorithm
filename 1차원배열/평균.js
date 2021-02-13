const score = [40, 80, 60];

const max = Math.max(...score);

let sum = 0;

for (let i = 0; i < score.length; i++) {
	sum += score[i] / max * 100;
}

console.log(sum / score.length);