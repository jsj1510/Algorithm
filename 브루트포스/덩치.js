const [n, ...arr] = require("fs").readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const person = arr.map((v, i) => ({weight: v.split(" ")[0], height: v.split(" ")[1], rank: 1}));

for (let i = 0; i < person.length; i++) {
    for (let j = 0; j < person.length; j++) {
        if (i !== j && person[i].weight < person[j].weight && person[i].height < person[j].height) person[i].rank++;
    }
}
console.log(person.map(i => i.rank).join(" "));