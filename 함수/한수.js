function sol(n) {
    let num = 0;
    for (let i = 1; i <=n; i++) {
        if (i < 100) {
            num++;
        } else {
            const numArr = i.toString().split("").map(el =>parseInt(el));
            if (numArr[0] - numArr[1] === numArr[1] - numArr[2]) {
                num++;
            }
        }
    }
    console.log(num);
}

sol(1);
sol(110);
sol(210);