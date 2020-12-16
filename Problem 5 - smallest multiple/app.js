function isDivisable(num) {
    for(let i = 2; i <= 20; i++) {
        if(num % i !== 0) {
            return false;
        }
    }
    return true;
}

let num = 2;

while(true) {
    if(isDivisable(num)) {
        console.log("found match, num " + num + " is divisable by 1-20");
        break;
    } else {
        num++;
    }
}