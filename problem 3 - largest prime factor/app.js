function isPrime(num) {

    if(num === 1 || num === 2) {
        return true;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        } 
    }
    return true;
}

function getLargestPrime(num) {
    for (let j = Math.floor(Math.sqrt(num)); j > 1; j--) {
      if (num % j === 0 && isPrime(j)) {
        return j;
      }
    }
    return 0;
}

console.log(getLargestPrime(600851475143));