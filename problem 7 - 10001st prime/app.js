function isPrime(num) {
    if(num === 1) {
        return false;
    }
    if(num === 2) {
        return true;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}

let allPrimes = [];
let added = 0;

for(let i = 1; allPrimes.length <= 10001; i++) {
    if(isPrime(i)) {
        console.log("the " + allPrimes.length + " prime is " + i);
        allPrimes.push(i);
    }
}

console.log(allPrimes);

console.log(allPrimes[allPrimes.length]);



