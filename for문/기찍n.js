function solution(n) {
    let cnt = n + 1;
    for (let i = 0; i < n; i++) {
        cnt--;
        console.log(cnt);
    }
}

solution(5);