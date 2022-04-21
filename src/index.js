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
  console.log(longestWord[0]);
  return longestWord[0].length;
}
findLongestWord('The quick brown fox jumped over the lazy dog');
/////

function makenumb(n, x) {
  let y = 0;
  for (let i = n; i <= x; i++) {
    r = i / i + 1 - Math.cos(i) * Math.abs(x);
    console.log(r);
  }
}
makenumb(2, 5);

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
