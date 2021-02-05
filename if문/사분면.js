function solution(n, m) {
    if (n > 0 && m > 0 ) {
        console.log("제1사분면");
    } else if (n < 0 && m > 0 ) {
        console.log("제2사분면");
    }  else if (n <  0 && m < 0 ) {
        console.log("제3사분면");
    }  else if (n > 0 && m < 0 ) {
        console.log("제4사분면");
    } else {
        console.log("잘못입력");
    }
}

console.log(solution(12,5));
console.log(solution(-12,5));
console.log(solution(-12,-5));
console.log(solution(12,-5));
