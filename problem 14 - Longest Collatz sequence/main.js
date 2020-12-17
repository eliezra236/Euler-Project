let CollatzDict = {};

function getCollatzSeq(strNum, seq=[]) {
  if (CollatzDict[strNum] !== undefined) {
    return [...seq, ...CollatzDict[strNum]];
  }
  if (strNum === 1) {
    return [...seq, strNum];
  } else if (strNum % 2 === 0) {
    return getCollatzSeq(strNum / 2, [...seq, strNum]);
  } else {
    return getCollatzSeq(strNum * 3 + 1, [...seq, strNum]);
  }
}

function saveToCollatzDict(collatzSeq) {
    for(let i = 0; i < collatzSeq.length; i++) {
        let num = collatzSeq[i];
        if(CollatzDict[num] !== undefined) {
            break;
        }
        CollatzDict[num] = collatzSeq.slice(i, collatzSeq.length);
    }
}

function findBiggestCllatz(maxNum) {
  let longestCollatz = [];
  for (let i = 2; i <= maxNum; i++) {
    let currCollatzSeq = getCollatzSeq(i);
    // console.log(i + " Collatz Len is: " + currCollatzSeq.length);
    saveToCollatzDict(currCollatzSeq);
    if (currCollatzSeq.length > longestCollatz.length) {
      longestCollatz = currCollatzSeq;
    }
  }
  return longestCollatz;
}

console.log(getCollatzSeq(15))

let longest = findBiggestCllatz(1000000);
console.log(longest);

console.log(longest.length);