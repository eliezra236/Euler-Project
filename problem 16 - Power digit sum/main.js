
// the dirty way by converting to string and then to array
function powerToString(num, pow) {
  let powResult = BigInt(Math.pow(num, pow));
  console.log(Math.pow(num, pow));
  let resAsArray = Array.from(powResult.toLocaleString('fullwide', {useGrouping: false}));
  return resAsArray.reduce((total, num) => (total += Number(num)), 0);
}

let test = powerToString(2, 1000);
console.log(test);

console.log("---------------------------------")

// mathemathic way
function fixedPowerToString(num, pow) {
    let powResult = BigInt(Math.pow(num, pow));
    let sum = 0n;
    let result = powResult;
    while(result >= 10n) {
       sum += result % 10n;
       result = result / 10n; 
    }
    sum += result;
    return sum;
}

console.log(fixedPowerToString(2, 1000));
