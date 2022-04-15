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
