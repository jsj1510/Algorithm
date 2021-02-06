function solution(n) {
    for (let i = 0; i < n; i++) {
      let result = '';

      for (let j = n - 1; j >= 0; j--) {
      result += j <= i ? '*' : ' ';
      }
    console.log(result);
    }
}


solution(5);