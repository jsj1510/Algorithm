function solution(h, m) {
    let hour = h;
    let min = m;
    min -= 45;

    if (min < 0) {
        min = 60 + min;
        hour--;

        if(hour === -1) {
            hour = 23;
        }
    }

    return `${hour} ${min}`

}
console.log(solution(0, 30));
console.log(solution(23, 40));