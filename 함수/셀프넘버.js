const maxNum = 10000;
const selfNum = new Array(maxNum + 1);
selfNum.fill(true);

function d(maxNum) {
    const N = maxNum.toString().split('');

    return maxNum + N.reduce((acc, num) => (acc += +num), 0);
}

for (let i = 1; i <= maxNum; i++) {
    selfNum[d(i)] = false;
}

for (let i = 1; i <= maxNum; i++) {
    if (selfNum[i]) {
        console.log(i);
    }
}
