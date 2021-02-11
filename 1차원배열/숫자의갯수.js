function sol() {
    const a = [150];
    const b = [266];
    const c = [427];
    let num = String(a * b * c);
  
    for (let i = 0; i < 10; i++) {
      let count = 0;
        for (let j = 0; j < num.length; j++) {
            if (Number(num[j]) === i) {
                count++;
            }
        }
        
        console.log(count);
    }
  }
  
  sol();