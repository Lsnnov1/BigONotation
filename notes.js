function addUpToFirst(n) {
        
    let total = 0;
    
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    
    return total;
  }

  function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
    }
  }
  