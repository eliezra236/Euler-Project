function highestDivisable(numOfDivisors) {
    let divCounter = 0;
    let num = 1;
    let numToAdd = 2;

    while(num < numOfDivisors) {
        num += numToAdd;
        numToAdd++;
    }
    while(true) {
        // checks each number
        for(let i = 1; i < Math.sqrt(num); i++) {
            if(num % i === 0) {
                divCounter++;
            }
            if(divCounter >= (numOfDivisors / 2)) {
                return num;
            }
        }
        divCounter = 0;
        num+= numToAdd;
        numToAdd++;
    }
}

console.log(highestDivisable(501));