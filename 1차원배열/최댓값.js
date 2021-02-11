function sol() {
    const numbers = [3, 29, 38, 12, 57, 74, 40, 85, 61];
    let max = numbers[0];
    let cnt = 0;

    for (let i in numbers) {
        if (max < numbers[i]) {
            max = numbers[i];
            cnt = i;
            cnt++;
        }
    }

    console.log(max, cnt);
}

sol();