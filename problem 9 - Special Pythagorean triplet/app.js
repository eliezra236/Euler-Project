function isNatural(num) {
    if(num <= 0) {
        return false;
    }
    return (num === parseInt(num));
}

function findPythTiplet(total) {
    for (let a = 1; a <= total; a++) {
      for (let b = 1; b <= total; b++) {
        let c = Math.sqrt((a * a) + (b * b));
        if(!isNatural(c)) {
            continue;
        }
        let sum = a + b + c;
        if (sum > total) {
          break;
        }
        else if (sum === total) {
          console.log("Found a match");
          console.log("a = " + a);
          console.log("b = " + b);
          console.log("c = " + c);
          return [a, b, c];
        } 
      }
    }

    return [-1, -1, -1];
}


findPythTiplet(1000);
console.log(200 * 375 * 425)


