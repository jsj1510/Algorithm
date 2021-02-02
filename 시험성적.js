function solution(n) {
    if (90 < n&& n<= 100) {
        console.log("A");
    } else if (80 < n&& n < 90) {
        console.log("B");
    } else if (70 < n&& n < 80) {
        console.log("C");
    } else if (60 < n && n < 70) {
        console.log("D");
    } else {
        console.log("F");
    }

}

solution(100);
solution(89);
solution(79);
solution(69);