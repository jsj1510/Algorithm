function solution(n) {
    if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) return true;
    return false;
}

console.log(solution(1900));
console.log(solution(2000));
console.log(solution(1999));