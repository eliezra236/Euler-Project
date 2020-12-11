function addAll(topNum) {
    let sum = 0;
    for(let i = 1; i <= topNum; i++) {
        sum += i;
    }
    return sum;
}

function addAllSqr(topNum) {
    let sum = 0;
    for(let i = 1; i <= topNum; i++) {
        sum += (i * i);
    }
    return sum;
}

let sumAll = addAll(100);
let sumAllSqr = addAllSqr(100);

console.log(sumAll);
console.log(sumAllSqr);

console.log((sumAll * sumAll) - sumAllSqr);

