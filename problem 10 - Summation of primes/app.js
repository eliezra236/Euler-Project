function isPrime(num) {
    if(num <= 1) {
        return false;
    }
    if(num === 2) {
        return true
    }
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumPrimes(endPoint) {
    let sum = 0;
    for(let i = 1; i < endPoint; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}


console.log(sumPrimes(2000000));