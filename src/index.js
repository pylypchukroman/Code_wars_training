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
//Who likes it?
function likes(names) {
  if (names.length < 1) {
    return `no one likes this`;
  } else if (names.length == 1) {
    return `${names[0]} likes this`;
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
//Find the unique number
function findUniq(arr) {
  return +arr.filter(value => {
    return arr.indexOf(value) == arr.lastIndexOf(value);
  });
}
//Smallest Permutation
function permutation(n) {
  let newArr = [];
  const arr = n.toString().split('');
  if (arr[arr.length - 1] == 0) {
    return Number(arr.join(''));
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      newArr.push(arr[i]);
    }
  }

  const result = newArr.sort((a, b) => a - b).join('');
  return Number(result);
}
// console.log(permutation(642950));
// Kebabize
function kebabize(str) {
  return str
    .replace(/[0-9]/g, '')
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();
}

//String transformer
function stringTransformer(str) {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join('').split(' ').reverse().join(' ');
}
// or

function stringTransformer(str) {
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  return str
    .split('')
    .map(letter => (lowercase.indexOf(letter) === -1 ? letter.toLowerCase() : letter.toUpperCase()))
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
}
//Count letters in string
function letterCount(s) {
  let result = {};
  const arr = s.split('');
  for (let i = 0; i < arr.length; ++i) {
    let a = arr[i];
    if (result[a] != undefined) ++result[a];
    else result[a] = 1;
  }
  return result;
}
///Array.diff
function arrayDiff(a, b) {
  let arr = a.filter(i => b.indexOf(i) < 0);
  return arr;
}
//
function findNumber(arr) {
  let result = [];
  const flatArr = arr
    .map(num => (num.length < 1 ? '0' : num))
    .toString()
    .split(',');
  for (let i = 0; i < flatArr.length; i++) {
    if (flatArr[i].includes('-')) {
      const intervalArr = flatArr[i].split('-');
      let low = +intervalArr[0];
      let high = +intervalArr[1];
      for (let i = low; i <= high; i++) {
        result.push(low++);
      }
    }
    result.push(flatArr[i]);
  }
  return result.map(Number).filter(num => !Number.isNaN(num));
}
// console.log(findNumber(['1,2,3', '5,6,7-10', '12-16', '']));

///
function dontGiveMeFive(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    if (i.toString().includes('5')) {
      continue;
    }
    result.push(i);
  }
  return result.length;
}
// console.log(dontGiveMeFive(4, 17));

//Minimize Sum Of Array (Array Series #1)
function findmin(arr) {
  let result = [];
  const sorted = arr.sort((a, b) => a - b);
  const first = arr.splice(0, arr.length / 2);
  const second = sorted.sort((a, b) => b - a);
  for (let i = 0; i < first.length; i++) {
    result.push(first[i] * second[i]);
  }
  return result.reduce((acc, num) => (acc += num));
}
findmin([9, 2, 8, 7, 5, 4, 0, 6]);

///
function getCommonElements(array1, array2) {
  const newArr = [];

  for (let i = 0; i < array2.length; i++) {
    if (array1.includes(array2[i])) {
      newArr.push(array2[i]);
    }
  }
  return newArr;
}
// console.log(getCommonElements([1, 3, 5], [0, 8, 5, 3]));
// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  const sortedArr = numbers.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}
function find(str, wordsArr) {
  console.log(`Вхідна строка -> ${str}`);
  console.log(`Вхідний масив для порівняння -> ${wordsArr}`);
  let result = [];
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < wordsArr.length; j++) {
      if (strArr[i] != wordsArr[j]) {
        result.push(strArr[i]);
      }
    }
  }
  return `Результат -> ${result.join(' ')}`;
}
// console.log(find('This is Sparta', ['is']));
///
function getDivisorsCnt(n) {
  let result = [];
  let i = 0;
  while (i < n) {
    i++;
    if (n % i === 0) {
      console.log(i);
      result.push(i);
    }
  }
  return result.length;
}
// console.log(getDivisorsCnt(30));
///
// console.log(+!+[] + !+[] + !+[] + !+[] + !+[]);
///
function printerError(s) {
  let regExp = /[^n-z]/g;
  const trimS = s.toLowerCase().replace(regExp, '');
  return `${trimS.length}/${s.length}`;
}
// console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));
//
function oddCount(n) {
  return Math.floor(n / 2);
}
// console.log(oddCount(15023));
// function consecutive(arr, a, b) {
function consecutive(arr, a, b) {
  return arr.includes(a) && arr.includes(b);
}
// console.log(consecutive([1, 3, 5, 7], 3, 7));

//
function wallpaper(l, w, h) {
  let result;
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];
  if (Math.floor(l) == 0 || Math.floor(w) == 0 || Math.floor(h) == 0) {
    return 'zero';
  }
  const wallp = Math.floor((l + w + h) * 1.15);
  for (let i = 0; i < numbers.length; i++) {
    if (i == wallp) {
      result = numbers[i];
    }
  }
  return result;
}
// console.log(wallpaper(6.3, 5.8, 3.13));
///
// const duplicate = [1, 2, 3, 4, 5];
// console.log([...[...duplicate], ...[...duplicate]]);
//
function isNarcissistic(n) {
  const split = n.toString().split('');
  const l = split.length;
  const result = split.map(el => Math.pow(el, l)).reduce((prev, acc) => (acc += prev));
  return n === result;
}
// console.log(isNarcissistic(153));
//
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let l1 = a1.map(str => str.length);
  let l2 = a2.map(str => str.length);
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1));
}
// console.log(
//   mxdiflg(
//     [
//       'hoqq',
//       'bbllkw',
//       'oox',
//       'ejjuyyy',
//       'plmiis',
//       'xxxzgpsssa',
//       'xxwwkktt',
//       'znnnnfqknaz',
//       'qqquuhii',
//       'dvvvwz',
//     ],
//     ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'],
//   ),
// );
///
function countDevelopers(list) {
  return list.filter(x => x.continent == 'Europe' && x.language == 'JavaScript').length;
}
// console.log(
//   countDevelopers([
//     {
//       firstName: 'Noah',
//       lastName: 'M.',
//       country: 'Switzerland',
//       continent: 'Europe',
//       age: 19,
//       language: 'JavaScript',
//     },
//     {
//       firstName: 'Maia',
//       lastName: 'S.',
//       country: 'Tahiti',
//       continent: 'Oceania',
//       age: 28,
//       language: 'JavaScript',
//     },
//     {
//       firstName: 'Shufen',
//       lastName: 'L.',
//       country: 'Taiwan',
//       continent: 'Asia',
//       age: 35,
//       language: 'HTML',
//     },
//     {
//       firstName: 'Sumayah',
//       lastName: 'M.',
//       country: 'Tajikistan',
//       continent: 'Asia',
//       age: 30,
//       language: 'CSS',
//     },
//   ]),
// );
///Find the vowels
function vowelIndices(word) {
  let result = [];
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const arrWord = word.toLowerCase().split('');
  for (let i = 0; i < arrWord.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (arrWord[i] === vowels[j]) {
        result.push(i + 1);
      }
    }
  }
  return result;
}
// console.log(vowelIndices('Apple'));
///
function greetDevelopers(list) {
  list.forEach(item => {
    item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`;
  });
  return list;
}
// console.log(
//   greetDevelopers([
//     {
//       firstName: 'Sofia',
//       lastName: 'I.',
//       country: 'Argentina',
//       continent: 'Americas',
//       age: 35,
//       language: 'Java',
//     },
//     {
//       firstName: 'Lukas',
//       lastName: 'X.',
//       country: 'Croatia',
//       continent: 'Europe',
//       age: 35,
//       language: 'Python',
//     },
//     {
//       firstName: 'Madison',
//       lastName: 'U.',
//       country: 'United States',
//       continent: 'Americas',
//       age: 32,
//       language: 'Ruby',
//     },
//   ]),
// );
///
function isCoprime(x, y) {
  let i = 0;
  let q = 0;
  let xArr = [];
  let yArr = [];
  let result = [];
  while (i < x) {
    i++;
    if (x % i == 0) {
      xArr.push(i);
    }
  }
  while (q < y) {
    q++;
    if (y % q == 0) {
      yArr.push(q);
    }
  }
  for (let w = 0; w < xArr.length; w++) {
    if (yArr.includes(xArr[w])) {
      result.push(xArr[w]);
    }
  }
  if (result[result.length - 1] != 1) {
    return false;
  }
  return true;
}
// console.log(isCoprime(20, 27));
//
function findChildren(dancingBrigade) {
  const arr = dancingBrigade.toLowerCase().split('');
  let res = '';
  const letters = [...new Set(arr)].sort();
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < dancingBrigade.length; j++) {
      if (letters[i] == arr[j]) res += arr[j];
    }
  }
  return res
    .split('')
    .map((x, i) => (x !== res[i - 1] ? (x = x.toUpperCase()) : x))
    .join('');
}
// console.log(findChildren('AaaaaZazzz'));
///
function last(x) {
  if (!x.trim().length) return x.split(' ');
  return x.split(' ').sort((a, b) => a[a.length - 1].localeCompare(b[b.length - 1]));
}
// console.log(last('man i need a taxi up to ubud'));
//
function incrementer(nums) {
  return nums
    .map((num, inx) => num + (inx + 1))
    .map(num => (num >= 10 ? num - 10 : num))
    .map(num => (num >= 10 ? num - 10 : num));
}
// console.log(incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]));
///
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  // const reg = /aeiouyAEIOUY/;
  return str.replace(/[aeiouyAEIOUY]/gi, '');
}
// console.log(disemvowel('This website is for losers LOL!'));
//
function accum(s) {
  let result = [];
  const arrS = s.toLowerCase().split('');
  for (let i = 0; i < arrS.length; i++) {
    result.push(arrS[i].repeat(i + 1));
  }
  return result.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-');
}

// console.log(accum('ZpglnRxqenU'));
///
const arrUser = [
  {
    id: 2320,
    name: '',
    items: [
      {
        id: 43555444,
        name: '',
      },
      {
        id: 43555445,
        name: '',
      },
      {
        id: 43555446,
        name: '',
      },
    ],
  },
  {
    id: 2321,
    name: '',
    items: [
      {
        id: 42555444,
        name: '',
      },
      {
        id: 42555445,
        name: '',
      },
    ],
  },
];
const arrString = [
  'NewExtra1',
  'subject1',
  'subject2',
  'subject3',
  'NewExtra2',
  'subject1',
  'subject2',
  'subject3',
];
function makeUserProfile(data) {
  let counter = 0;
  for (let i = 0; i < arrUser.length; i += 1) {
    arrUser[i].name = data[counter];
    counter += 1;
    let item = arrUser[i].items;
    for (let j = 0; j < item.length; j += 1) {
      item[j].name = data[counter];
      counter += 1;
    }
  }
}

makeUserProfile(arrString);
// console.log(arrUser);
function solution(str, ending) {
  let index = ending.length;
  return (
    str
      .split('')
      .splice(str.length - index, index)
      .join('') == ending
  );
}
// console.log(solution('abcde', 'abc'));
//
function findSum(...arg) {
  let result = 0;
  for (let i = 0; i < arg.length; i++) {
    if (arg.length < 1) {
      return 0;
    } else if (arg[i] < 0) {
      return -1;
    }
    result += arg[i];
  }
  return result;
}
// console.log(findSum(1, -2, 4));
//
const isPalindrome = function (x) {
  return x == x.toString().split('').reverse().join('') ? true : false;
};
// console.log(isPalindrome(121));
//
const removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
//
const lengthOfLastWord = function (s) {
  const arr = s.trim().split(' ');
  return arr[arr.length - 1].length;
};
// console.log(lengthOfLastWord('   fly me   to   the moon  '));
///
const plusOne = function (arr) {
  const length = arr.length;
  console.log(length);
  const negative = arr.filter(num => num < 0);
  const bigNum = arr.filter(num => num >= 10);
  if (negative.length == 0 && bigNum.length == 0 && length != 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i]++;

      if (arr[i] > 9) {
        arr[i] = 0;
      } else {
        return arr;
      }
    }

    arr.unshift(1);
    return arr;
  }
  return null;
};
// console.log(plusOne([]));
function isIsogram(str) {
  return str.length == [...new Set(str)].length;
}
// console.log(isIsogram('aba'));
//
function XO(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'x') {
      x++;
    } else if (str[i] == 'o') {
      o++;
    }
  }
  return x == o;
}
// console.log(XO('xxxm'));
//
function divisors(integer) {
  let result = [];
  let i = 1;

  while (i < integer - 1) {
    i++;
    if (integer % i == 0) {
      result.push(i);
    }
  }
  return result.length === 0 ? `${integer} is prime` : result;
}
// console.log(divisors(13));
//
function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).splice(ages.length - 2, 2);
}
// console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));
//
function findSum(n) {
  let i = 0;
  let result = [];
  while (i < n) {
    i++;
    if (i % 3 == 0 || i % 5 == 0) {
      result.push(i);
    }
  }
  return result.reduce((num, acc) => (acc += num));
}
// console.log(findSum(5));
//
function removeUrlAnchor(url) {
  return url.split('#')[0];
}
// console.log(removeUrlAnchor('www.codewars.com?page=1'));
//
function evenNumbers(array, number) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      result.push(array[i]);
    }
  }
  return result.splice(result.length - number, number);
}
// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));
//
function stringMerge(string1, string2, letter) {
  const firstNum = string1.indexOf(letter);
  const secondNum = string2.indexOf(letter);
  return string1.slice(0, firstNum + 1) + string2.slice(secondNum + 1);
}
// console.log(stringMerge('coding', 'anywhere', 'n'));
//
function swap(str) {
  return str
    .split('')
    .map(letter => (letter == letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()))
    .join('');
}
// console.log(swap('CodeWars'));
///
function getMiddle(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 == 0 ? s[mid - 1] + s[mid] : s[mid];
}
// console.log(getMiddle('test'));
//
function maskify(cc) {
  return cc.length < 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(cc.length - 4);
}
// console.log(maskify('11111'));
//
function stray(numbers) {
  let result;
  const duplicate = numbers.filter((num, index, array) => array.indexOf(num) != index);
  for (let i = 0; i < numbers.length; i++) {
    if (duplicate.includes(numbers[i])) {
      continue;
    }
    result = numbers[i];
  }
  return result;
}
// console.log(stray([17, 17, 3, 17, 17, 17, 17]));
//
function checkExam(array1, array2) {
  let result = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      result += 4;
    } else if (array2[i] === '') {
      result += 0;
    } else {
      result -= 1;
    }
  }
  return result < 0 ? 0 : result;
}
// console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']));
//
function findSenior(list) {
  let hAge = 0;
  let seniors = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].age > hAge) {
      hAge = list[i].age;
    }
  }
  for (let j = 0; j < list.length; j++) {
    if (list[j].age == hAge) {
      seniors.push(list[j]);
    }
  }
  return seniors;
}
// console.log(
//   findSenior([
//     {
//       firstName: 'Gabriel',
//       lastName: 'X.',
//       country: 'Monaco',
//       continent: 'Europe',
//       age: 49,
//       language: 'PHP',
//     },
//     {
//       firstName: 'Odval',
//       lastName: 'F.',
//       country: 'Mongolia',
//       continent: 'Asia',
//       age: 38,
//       language: 'Python',
//     },
//     {
//       firstName: 'Emilija',
//       lastName: 'S.',
//       country: 'Lithuania',
//       continent: 'Europe',
//       age: 19,
//       language: 'Python',
//     },
//     {
//       firstName: 'Sou',
//       lastName: 'B.',
//       country: 'Japan',
//       continent: 'Asia',
//       age: 49,
//       language: 'PHP',
//     },
//   ]),
// );
//
const sortme = function (names) {
  return [...names].sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));
};
// console.log(sortme(['Hello', 'there', "I'm", 'fine']));
//
function solution(number) {
  let i = 0;
  let result = [];
  while (i < number - 1) {
    i++;
    if (i % 3 == 0 || i % 5 == 0) {
      result.push(i);
    }
  }
  return result.reduce((num, acc) => (acc += num)) < 0
    ? 0
    : result.reduce((num, acc) => (acc += num));
}
// console.log(solution(20));
///
function solution(string) {
  const arrStr = string.split('');
  let result = [];
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] == arrStr[i].toUpperCase()) {
      result.push('.' + arrStr[i]);
    } else {
      result.push(arrStr[i]);
    }
  }
  return result.join('').split('.').join(' ');
}
// console.log(solution('camelCasingTest'));
//
function toWeirdCase(string) {
  return string
    .split(' ')
    .map(s => [...s].map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase())).join``)
    .join(' ');
}
// console.log(toWeirdCase('This is a test'));
//
function findOdd(A) {
  const result = {};
  A.forEach(num => (result[num] = result[num] ? result[num] + 1 : 1));
  return +Object.keys(result).find(key => result[key] % 2 === 1);
}
// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
//
function cleanString(s) {
  let result = [];
  [...s].map(char => (char === '#' ? result.pop() : result.push(char)));
  return result.join('');
}
// console.log(cleanString('abc#d##c'));
//
function digital_root(n) {
  let result = 0;
  n.toString()
    .split('')
    .map(n => {
      result += Number(n);
    });
  return result > 9 ? digital_root(result) : result;
}
// console.log(digital_root(132189));
//
function duplicateCount(text) {
  let result = {};
  let counter = 0;
  text
    .toLowerCase()
    .split('')
    .forEach(el => (result[el] = result[el] ? result[el] + 1 : 1));
  Object.values(result).forEach(num => (num > 1 ? counter++ : null));
  return counter;
}
// console.log(duplicateCount('Indivisibility'));
//
function getLengthOfMissingArray(arrayOfArrays) {
  const l = (arrayOfArrays || []).map(a => (a ? a.length : 0)).sort((a, b) => a - b);
  if (l.includes(0)) {
    return 0;
  }

  for (let i = 0; i < l.length - 1; i++) {
    if (l[i] + 1 !== l[i + 1]) {
      return l[i] + 1;
    }
  }

  return 0;
}
// console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
//
function evensAndOdds(num) {
  if (num % 2 == 0) {
    return num.toString(2);
  }
  return num.toString(16);
}
// console.log(evensAndOdds(13));
//
function spongeMeme(sentence) {
  return sentence
    .split('')
    .map((el, i) => (i % 2 == 0 ? el.toUpperCase() : el.toLowerCase()))
    .join('');
}
// console.log(spongeMeme('stop Making spongebob Memes!'));
//
var number = function (array) {
  let result = [];
  array.forEach((el, i) => result.push(`${i + 1}: ${el}`));
  return result;
};
// console.log(number([]));
//
function alternate(n, firstValue, secondValue) {
  let i = 0;
  let result = [];
  while (i < n) {
    i++;
    i % 2 == 0 ? result.push(secondValue) : result.push(firstValue);
  }
  return result;
}
// console.log(alternate(5, true, false));
//
function triangular(n) {
  return n > 0 ? (n * (n + 1)) / 2 : 0;
}
// console.log(triangular(4));
//
function solve(arr) {
  let obj = {};
  arr.forEach(num => (obj[num] = obj[num] ? obj[num] + 1 : 1));
  return [...arr].sort((a, b) => obj[b] - obj[a] || a - b);
}
// console.log(solve([1, 2, 3, 0, 5, 0, 1, 6, 8, 8, 6, 9, 1]));
function arrAdder(arr) {
  let result = '';
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) {
        result = result + arr[j][i];
      }
    }
    result += ' ';
  }
  return result.trim();
}
// console.log(
//   arrAdder([
//     ['J', 'L', 'L', 'M'],
//     ['u', 'i', 'i', 'a'],
//     ['s', 'v', 'f', 'n'],
//     ['t', 'e', 'e', ''],
//   ]),
// );
//
function lovefunc(flower1, flower2) {
  return (flower1 % 2 == 0 && flower2 % 2 != 0) || (flower2 % 2 == 0 && flower1 % 2 != 0);
}
// console.log(lovefunc(0, 0));
//
function sayHello(name, city, state) {
  return `Hello, ${name.map(el => el).join(' ')}! Welcome to ${city}, ${state}!`;
}
// console.log(sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois'));
//
function countLanguages(list) {
  let result = {};
  list.forEach(
    dev => (result[dev.language] = result[dev.language] ? (result[dev.language] += 1) : 1),
  );
  return result;
}
// console.log(
//   countLanguages([
//     {
//       firstName: 'Noah',
//       lastName: 'M.',
//       country: 'Switzerland',
//       continent: 'Europe',
//       age: 19,
//       language: 'C',
//     },
//     {
//       firstName: 'Anna',
//       lastName: 'R.',
//       country: 'Liechtenstein',
//       continent: 'Europe',
//       age: 52,
//       language: 'JavaScript',
//     },
//     {
//       firstName: 'Ramon',
//       lastName: 'R.',
//       country: 'Paraguay',
//       continent: 'Americas',
//       age: 29,
//       language: 'Ruby',
//     },
//     {
//       firstName: 'George',
//       lastName: 'B.',
//       country: 'England',
//       continent: 'Europe',
//       age: 81,
//       language: 'C',
//     },
//   ]),
// );
//
var countBits = function (n) {
  return n
    .toString(2)
    .split('')
    .map(num => +num)
    .reduce((el, acc) => (acc += el));
};
// console.log(countBits(1234));
//
function narcissistic(value) {
  const n = value.toString().split('').length;
  const result = value
    .toString()
    .split('')
    .map(num => Math.pow(num, n))
    .reduce((num, acc) => (acc += num));
  console.log(n);
  console.log(result);
  return result == n ? true : false;
}
// console.log(narcissistic(153));
//
function spinWords(string) {
  let result = [];
  string
    .split(' ')
    .forEach(el =>
      el.length >= 5 ? result.push(el.split('').reverse().join('')) : result.push(el),
    );
  return result.join(' ');
}
// console.log(spinWords('Hey fellow warriors'));
//
function findOutlier(integers) {
  let odd = [];
  let even = [];
  integers.forEach(num => (num % 2 == 0 ? even.push(num) : odd.push(num)));
  return odd.length > even.length ? Number(even.join('')) : Number(odd.join(''));
}
// console.log(findOutlier([2, 6, 8, 10, 3]));
//
function sortArray(array) {
  const odd = array.filter(num => num % 2).sort((a, b) => a - b);
  return array.map(num => (num % 2 ? odd.shift() : num));
}
// console.log(sortArray([5, 3, 2, 8, 1, 4]));
//
function deepCount(a) {
  return a.reduce((acc, val) => {
    return acc + (Array.isArray(val) ? deepCount(val) : 0);
  }, a.length);
}
// console.log(deepCount([[[[[[[[]]]]]]]]));
//
function dup(s) {
  const initail = [];
  const result = [];

  s.map(el => {
    el.split('').reduce((acc, value, index, arr) => {
      if (arr[index] !== arr[index + 1]) {
        initail.push(arr[index]);
      }

      if (index === arr.length - 1) {
        result.push(initail.join(''));
        initail.length = 0;
      }
    }, 0);
  });

  return result;
}
// console.log(dup(['kelless', 'keenness']));
//
var numberFormat = function (n) {
  return n.toLocaleString();
};
// console.log(numberFormat(100000));
//
function squareSum(numbers) {
  return numbers.map(num => Math.pow(num, 2)).reduce((el, acc) => (acc += el));
}
// console.log(squareSum([0, 3, 4, 5]));
//
function doubleChar(str) {
  let result = [];
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].repeat(2));
  }
  return result.join('');
}
// console.log(doubleChar('String'));
function addBinary(a, b) {
  const result = a + b;
  return result.toString(2);
}
// console.log(addBinary(1, 2));
//
function fakeBin(x) {
  let result = [];
  x.split('').forEach(el => (+el >= 5 ? result.push(1) : result.push(0)));
  return result.join('');
}
// console.log(fakeBin('45385593107843568'));
//
function wordToBin(str) {
  return str.split('').map(el => 0 + el.charCodeAt(0).toString(2));
}
// console.log(wordToBin('man'));
const er = 1;
// console.log(er.toString(2));
//
function moveZeros(arr) {
  let finish = [];
  let start = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      finish.push(arr[i]);
    } else {
      start.push(arr[i]);
    }
  }
  return start.concat(finish);
}
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
//
function validParentheses(parens) {
  let r = 0;
  let l = 0;

  parens.split('').forEach(el => (el == '(' ? r++ : l++));
  return r == l;
}
// console.log(validParentheses('())('));
//
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2);
};
// console.log(binaryArrayToNumber([0, 1, 1, 0]));
//
function generateHashtag(str) {
  if (str.length == 0 || str.trim() == '') {
    return false;
  }
  const result = str
    .split(' ')
    .map(el => el.charAt(0).toUpperCase() + el.slice(1))
    .join('');
  return result.length > 140 ? 0 : `#${result}`;
}
// console.log(generateHashtag('           '));
function toUnderscore(string) {
  let result = '';
  if (string.length > 1) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= '0' && string[i] < '9') {
        result += string[i].toString();
      } else if (string[i] === string[i].toUpperCase()) {
        result += '_';
        result += string[i].toLowerCase();
      } else {
        result += string[i];
      }
    }
    return result.substring(1);
  }
  return string.toString();
}
// console.log(toUnderscore('7'));
//
function reverseLetter(str) {
  return str
    .replace(/[^a-zA-Z]/g, '')
    .split('')
    .reverse()
    .join('');
}
// console.log(reverseLetter('ultr53o?n'));
//
function largestPairSum(numbers) {
  return numbers.sort((a, b) => b - a)[0] + numbers.sort((a, b) => b - a)[1];
}
// console.log(largestPairSum([-100, -29, -24, -19, 19]));
//
function getSum(a, b) {
  return a == b ? a : a + b;
}
// console.log(getSum(107, -409));
//
function sevenAte9(str) {
  const arr = str.split('');
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] === '7' && arr[i] === '9' && arr[i + 1] === '7') {
      arr.splice(i, 1);
    }
  }
  return arr.join('');
}
// console.log(sevenAte9('7979797'));
//
const arrCheck = value => {
  const filltered = value.filter(el => Array.isArray(el));
  return value.length == filltered.length;
};
// console.log(arrCheck([]));
//
function scoreOfDive(scores, tariff) {
  return (
    scores
      .sort((a, b) => a - b)
      .slice(2)
      .slice(0, -2)
      .reduce((el, acc) => (acc += el)) * tariff
  ).toFixed(2);
}
// console.log(scoreOfDive([7, 7.5, 8, 7.5, 6, 7, 7], 3));
//
function DNAStrand(dna) {
  let result = [];
  const arr = dna.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'A') {
      result.push('T');
    } else if (arr[i] === 'T') {
      result.push('A');
    } else if (arr[i] === 'C') {
      result.push('G');
    } else if (arr[i] === 'G') {
      result.push('C');
    }
  }
  return result.join('');
}
// console.log(DNAStrand('ATTGC'));
//
function boolToWord(bool) {
  return bool == true ? 'Yes' : 'No';
}
// console.log(boolToWord(true));
//
function noOdds(values) {
  return values.filter(num => num % 2 == 0);
}
// console.log(noOdds([0, 1, 2, 3]));
//
function solve(s) {
  let LCL = [];
  let UCL = [];

  s.split('').forEach(el => (el == el.toUpperCase() ? UCL.push(el) : LCL.push(el)));
  if (LCL.length == UCL.length) {
    return s.toLowerCase();
  }
  return LCL.length > UCL.length ? s.toLowerCase() : s.toUpperCase();
}
// console.log(solve('COde'));
//
function minValue(values) {
  return [...new Set(values)].sort((a, b) => a - b).join('');
}
// console.log(minValue([4, 7, 5, 7]));
//
var greet = function (name) {
  const regex = /[a-z]/g;
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
};
// console.log(greet('riley'));
//
function isVeryEvenNumber(n) {
  const arr = n.toString().split('');
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += Number(arr[i]);
  }
  const result = acc >= 10 ? isVeryEvenNumber(acc) : acc;
  return result % 2 === 0;
}
// console.log(isVeryEvenNumber(1234));
//
function singleDigit(n) {
  if (n < 10) {
    return n;
  }
  let result = n
    .toString(2)
    .split('')
    .map(num => +num)
    .reduce((acc, value) => (acc += value));
  return result >= 10 ? singleDigit(result) : result;
}
// console.log(singleDigit(5));
//
