function solution(n) {
    let sum = 0;
    let cnt = 0;
    let temp = n;
    while (true) {
        cnt++;
        if (temp < 10) {
            sum = temp % 10;
        } else {
            sum = Math.floor(temp / 10) + (temp % 10);
        }

        temp = (temp % 10).toString() + (sum % 10).toString();
        temp = Number(temp);
        if (temp === n) {
            true === false;
        }
        console.log(cnt);
    }
}

solution(26);