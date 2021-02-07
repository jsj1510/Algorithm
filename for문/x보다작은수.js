function solution(n){
    const numbers = [1, 10, 4, 9, 2, 3, 8, 5, 7, 6]
    const small = [];
    for (let i of numbers) {
        if (i < n) {
            small.push(i);
        }
    }
    console.log(small);
}

solution(5);

