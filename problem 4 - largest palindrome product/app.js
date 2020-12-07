function isPalindrome(num) {
    numArray = Array.from(String(num), Number);
    reversedArray = numArray.slice().reverse();
    len = numArray.length;
    for(let i = 0; i < (len / 2); i++) {
        if(numArray[i] !== numArray[len - 1 - i]) {
            return false;
        }
    }
    return true;
}


let largest = 0;

for(let i = 999; i >= 100; i--) {
    for(let j = 999; j>= 100; j--) {
        let result = j * i;
        if (result > largest && isPalindrome(result)) {
          largest = result;
        }
    }
}

console.log(largest);
