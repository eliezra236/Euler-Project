function oneDigitToText(num) {
  switch (num) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    case 6:
      return "six";
    case 7:
      return "seven";
    case 8:
      return "eight";
    case 9:
      return "nine";
    case 0:
      return "";
    default:
      throw new Error("Error with num " + num);
  }
}

function twoDigitToText(num) {
  if (num < 20) {
    switch (num) {
      case 10:
        return "ten";
      case 11:
        return "eleven";
      case 12:
        return "twelve";
      case 13:
        return "thirteen";
      case 14:
        return "fourteen";
      case 15:
        return "fifteen";
      case 16:
        return "sixteen";
      case 17:
        return "seventeen";
      case 18:
        return "eighteen";
      case 19:
        return "nineteen";
      default:
        console.error("something went really wrong, in num < 13 default");
        throw new Error("Error with num " + num);
    }
  }
  let lastDigitTxt = oneDigitToText(num % 10);
  let firstDigit = Math.floor(num / 10);
  switch (firstDigit) {
    case 1:
        console.error("shouldn't been here")
      return -1;
    case 2:
      return "twenty " + lastDigitTxt;
    case 3:
      return "thirty " + lastDigitTxt;
    case 4:
      return "forty " + lastDigitTxt;
    case 5:
      return "fifty " + lastDigitTxt;
    case 6:
      return "sixty " + lastDigitTxt;
    case 7:
      return "seventy " + lastDigitTxt;
    case 8:
      return "eighty " + lastDigitTxt;
    case 9:
      return "ninety " + lastDigitTxt;
    default:
        throw new Error("Error with num " + num);
  }
}

function threeDigitToText(num) {
  let firstDigitText = oneDigitToText(Math.floor(num / 100));
  let lastDigits = Math.floor(num % 100);
  let lastDigitsText = "";
  if (lastDigits < 10) {
    lastDigitsText = oneDigitToText(lastDigits);
  } else {
    lastDigitsText = twoDigitToText(lastDigits);
  }
  let totalText = firstDigitText + " hundred";
  if (lastDigits > 0) {
    totalText += " and " + lastDigitsText;
  }
  return totalText;
}

function countStrNoSpace(str) {
  count = 0;
  for (let letter of str) {
    if (letter !== " ") {
      count++;
    }
  }
  return count;
}

function countNumText(num) {
  text = "";
  if (num < 10) {
    text = oneDigitToText(num);
  } else if (num < 100) {
    text = twoDigitToText(num);
  } else if (num === 1000) {
    text = "one thousand";
  } else {
    text = threeDigitToText(num);
  }
  return countStrNoSpace(text);
}

function sumLettersInNumText(maxNum) {
  let sum = 0;
  for (let i = 1; i <= maxNum; i++) {
    sum += countNumText(i);
  }
  return sum;
}

let test = [
  twoDigitToText(21),
  twoDigitToText(20),
  twoDigitToText(50),
  twoDigitToText(12),
  twoDigitToText(40),
  threeDigitToText(540),
  threeDigitToText(400),
  threeDigitToText(123),
  threeDigitToText(342),
  countNumText(342),
  countNumText(115),
  countNumText(1000),
  countNumText(21),
  countNumText(50)
];
console.log(test);

let test2 = sumLettersInNumText(1000);
console.log(test2);
