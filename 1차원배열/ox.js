const input = ["O", "O", "X", "X", "O", "X", "X", "O", "O", "O"];


for (let i = 1; i <= input.length; i++) {
  let count = 0;
  let sum = 0;

  for(let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}