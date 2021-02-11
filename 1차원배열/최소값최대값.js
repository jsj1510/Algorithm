function sol() {
    const numbers = [20, 10, 35, 30, 7];
    let min;
    let max;

    numbers.sort((a, b) => a - b);
    for (let i in numbers) {
    min = numbers[0];
    max = numbers[i];
    }
    console.log(min, max);
}

sol();