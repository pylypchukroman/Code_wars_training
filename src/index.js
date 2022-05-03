//Jaden Casing Strings 7 kyu

String.prototype.toJadenCase = function (str) {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

//Return Negative 7 kyu
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else if (num === 0) {
    return num;
  }
  return (num = num * -1);
}

//Sum of positive 7 kyu
function positiveSum(arr) {
  let positives = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives.push(arr[i]);
    }
  }
  //     console.log(positives);
  const total = positives.reduce((acc, num) => {
    return acc + num;
  }, 0);
  //     console.log(total);
  return total;
}

//Descending Order 7 kyu
function descendingOrder(n) {
  console.log(n);
  let arr = Array.from(String(n), Number);
  console.log(arr);
  arr = [...arr].sort((a, b) => b - a);
  console.log(arr);
  const str = +arr.join('');
  console.log(str);
  return str;
}

//Growth of a Population 7 kyu
function nbYear(p0, percent, aug, p) {
  let i = 0;
  while (true) {
    if (p0 >= p) {
      return i;
    }
    p0 = p0 * (1 + percent / 100) + aug;
    i++;
  }
}
//Odd or Even? 7 kyu
function oddOrEven(array) {
  if (array.length == 0) {
    return 'even';
  }
  const total = array.reduce((acc, num) => {
    return acc + num;
  });
  console.log(total);
  if (total % 2) {
    return 'odd';
  }
  return 'even';
}
//The highest profit wins! 7 kyu
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

function longestWord(string) {
  const str = string.split(' ');
  let longest = 0;
  let word = null;
  for (let i = 0; i < str.length - 1; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}

longestWord('The quick brown fox jumped over the lazy dog');
////
function findLongestWord(str) {
  const longestWord = str.split(' ').sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
}
findLongestWord('The quick brown fox jumped over the lazy dog');
/////

//Make a function that does arithmetic!
function arithmetic(a, b, operator) {
  switch ((a, b, operator)) {
    case 'add':
      return a + b;
      break;

    case 'subtract':
      return a - b;
      break;

    case 'multiply':
      return a * b;
      break;

    case 'divide':
      return a / b;
      break;
  }
}

//Shortest Word
function findShort(s) {
  const arr = s.split(' ');
  const newArr = arr.map(elem => {
    return elem.length;
  });
  return Math.min(...newArr);
}

//Remove the minimum
function removeSmallest(numbers) {
  let newNumbers = [...numbers];
  let indexOfMin = newNumbers.indexOf(Math.min(...newNumbers));
  newNumbers.splice(indexOfMin, 1);
  return newNumbers;
}

//Small enough? - Beginner
function smallEnough(a, limit) {
  return a.every(value => value <= limit);
}

//Row Weights
function rowWeights(array) {
  let team1 = 0;
  let team2 = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      team1 += array[i];
    } else {
      team2 += array[i];
    }
  }
  return [team1, team2];
}

//Thinkful - String Drills: Repeater
function repeater(string, n) {
  return string.repeat(n);
}

//Flatten and sort an array
function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}
/////
const response = [
  { ccy: 'USD', bace_ccy: 'UAH', buy: '29.25', sale: '32.18' },
  { ccy: 'EUR', bace_ccy: 'UAH', buy: '31.82', sale: '34.80' },
  { ccy: 'BTC', bace_ccy: 'USD', buy: '38390.85', sale: '42431.99' },
  { ccy: 'USD', bace_ccy: 'UAH', buy: '11.25', sale: '32.18' },
  { ccy: 'EUR', bace_ccy: 'UAH', buy: '40.82', sale: '34.80' },
];

// console.log(response);
const neededArr = response.filter(el => el.ccy == 'USD' || el.ccy == 'EUR');
// console.log(neededArr);
////
//Most digits
function findLongest(array) {
  const newArr = array.join(',').split(',');
  const longestWord = newArr.reduce(function (longest, currentNum) {
    if (currentNum.length > longest.length) {
      return currentNum;
    } else return longest;
  }, '');
  return +longestWord;
}
//Sum of Minimums!
function sumOfMinimums(arr) {
  console.log(arr);
  let minSum = 0;
  arr.forEach(element => {
    minSum += Math.min(...element);
  });
  return minSum;
}
//Two to One
function longest(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const newArr = arr1.concat(arr2);
  const uniq = newArr
    .filter((str, index, array) => array.indexOf(str) === index)
    .sort()
    .join('');
  return uniq;
}
//Round up to the next multiple of 5
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
//Reverse words
function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}
//Find the capitals
var capitals = function (word) {
  const arr = word.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toUpperCase()) {
      newArr.push(arr.indexOf(arr[i]));
    }
  }
  return newArr;
};
//Beginner Series #3 Sum of Numbers
function getSum(a, b) {
  if (a == b) {
    return a;
  } else if (a > b) {
    return a + getSum(a - 1, b);
  } else {
    return a + getSum(a + 1, b);
  }
}
// Digitize
function digitize(n) {
  const arr = Array.from(n.toString()).map(num => (num = +num));
  return arr;
}

//Find the Missing Number
function missingNo(nums) {
  let result = [];

  for (let i = 0; i <= Math.max.apply(null, nums); i++) {
    if (!nums.includes(i)) {
      result.push(i);
    }
  }
  return Number(result.join(''));
}
//Halving Sum
function halvingSum(n) {
  let result = 0;
  while (n > 0) {
    result += n;
    n = Math.floor(n / 2);
  }
  return result;
}
//Reversed Strings
export function solution(str) {
  const arr = str.split('');
  return arr.reverse().join('');
}
//Highest and Lowest
function highAndLow(numbers) {
  const arr = numbers.split(' ');
  return [Math.max(...arr), Math.min(...arr)].join(' ');
}
//Guess the Sequence
function sequence(x) {
  let arr = [];
  for (let i = 1; i <= x; i++) {
    arr.push(i);
  }
  return arr.sort();
}
//Sum of all arguments
function sum(...arg) {
  let a = arg.reduce((prev, numb) => {
    return prev + numb;
  }, 0);
  return a;
}
//V A P O R C O D E
function vaporcode(string) {
  arr = string.toUpperCase().split('');
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ' ') {
      newArr.push(arr[i]);
    }
  }
  return newArr.join('  ');
}
//Predict your age!
function predictAge(...age) {
  return Math.floor(Math.sqrt(age.map(num => num * num).reduce((sum, numb) => sum + numb)) / 2);
}

//All Star Code Challenge #3
function removeVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = [];
  for (let i = 0; i < str.length; i++) {
    let flag = true;
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        flag = false;
        break;
      }
    }
    if (flag) result.push(str[i]);
  }
  return result.join('');
}
removeVowels('drake'); //“drk”

//Working with arrays I (and why your code fails in some katas)
function withoutLast(arr) {
  return arr.slice(0, arr.length - 1);
}
//What is between?
function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    case 'red':
      return 'green';
      break;
  }
}
//Filter Long Words
function filterLongWords(str, n) {
  return str.split(' ').filter(el => el.length > n);
}
//Friend or Foe?
function friend(friends) {
  return friends.filter(friend => friend.length == 4);
}
//Four/Seven
function fourSeven(n) {
  while (n == 4) return 7;
  while (n == 7) return 4;
  return 0;
}
function qw(num) {
  const arr = num.toString().split('');
  const cube = arr.length;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const res = Math.pow(arr[i], cube);
    result += res;
  }
  if (result % cube == 0) {
    return true;
  }
  return false;
}
qw(1741725);
//Square Every Digit
function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map(x => x * x)
      .join(''),
  );
}
//max diff - easy
function maxDiff(list) {
  if (list.length < 1) {
    return 0;
  }
  return Math.max(...list) - Math.min(...list);
}

///////////////////////
function validBraces(braces) {
  const matches = { '(': ')', '{': '}', '[': ']' };
  let stack = [];
  let currentChar;

  for (let i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      stack.push(currentChar);
    } else {
      if (currentChar !== matches[stack.pop()]) {
        return 'Wrong order';
      }
    }
  }

  return stack.length === 0;
}
/////////////
function openOrSenior(data) {
  // let arr = [];
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i][0] >= 55 || data[i][1] >= 7) {
  //     arr.push((data[i] = 'Senior'));
  //   }
  //   arr.push((data[i] = 'Open'));
  // }
  const arr = data.map(number => (number[0] >= 55 && number[1] > 7 ? 'Senior' : 'Open'));
  return arr;

  // console.log(arr);
}

openOrSenior([
  [3, 12],
  [55, 1],
  [91, -2],
  [53, 23],
]);
//Sort Numbers
function solution(nums) {
  if (nums == null) {
    return [];
  }
  return nums.sort((a, b) => a - b);
}
console.log(solution([]));

///Sum up the random string
function findNumbers(str) {
  let result = 0;
  const numbers = str.match(/\d+/g).map(number => Number(number));
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
findNumbers('In 2015, I want to know how much does iPhone 6+ cost?');

//Count characters in your string
function count(string) {
  const counter = {};
  string.split('').forEach(x => {
    counter[x] = counter[x] ? counter[x] + 1 : 1;
  });
  return counter;
}
//Build Tower
function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    tower.push(' '.repeat(nFloors - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(nFloors - i - 1));
  }
  return tower;
}
//Unique In Order
const uniqueInOrder = function (iterable) {
  var arr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i + 1]) {
      arr.push(iterable[i]);
    }
  }
  return arr;
};
//Reverse every other word in the string
function reverse(str) {
  return str
    .trim()
    .split(' ')
    .map((el, index) => {
      return index % 2 ? el.split('').reverse().join('') : el;
    })
    .join(' ');
}
//Create Phone Number
function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
