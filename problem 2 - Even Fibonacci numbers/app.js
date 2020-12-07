function generateFib(maxValue) {
  let newValue = 0;
  let fib = [1, 2];
  while (newValue < maxValue) {
    lastIndex = fib.length - 1;
    newValue = fib[lastIndex] + fib[lastIndex - 1];
    if (newValue < maxValue) {
      fib.push(newValue);
    }
  }
  return fib;
}

let solFib = generateFib(4000000);

let sumEven = solFib.reduce((total, currNum) => {
    if(currNum % 2 === 0) {
        return (total += currNum);
    } else {
        return total;
    }
}, 0)

console.log(sumEven)
