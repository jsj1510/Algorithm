function sol() {
    const input = [39,
        40,
        41,
        42,
        43,
        44,
        82,
        83,
        84,
        85]
    const userNum = [];

    input.forEach(el => {
        const num = el % 42;
        
        if (userNum.indexOf(num) === -1) {
            userNum.push(num);
        }
    });

    console.log(userNum.length);
}

sol();