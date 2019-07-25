// shuffle.js

const { createArray } = require('./other/createArray.js');
const { count } = require('./count.js');

function shuffle(array) {
  const size = array.length -1;
  for (let end = size; end > 0; end--) {
    const rndI = Math.floor(Math.random() * (end + 1));
    [array[end], array[rndI]] = [array[rndI], array[end]];
  }
  return array;
}

function recShuff(array) {
  const shuffled = [];
  const shuffle = (array) => {
    if (array.length === 1) {
        shuffled.push(array.pop());
        return shuffled;
    } else {
        const size = array.length -1;
        const randInd = Math.floor(Math.random() * (size + 1));
        [array[size], array[randInd]] = [array[randInd], array[size]];
        shuffled.push(array.pop());
        return shuffle(array);
    }
  }
  return shuffle(array);
}

const printArr = (arr) => {
  const array = [];
  let strNumber;

  arr.forEach(number => {
    if (number < 10) {
       strNumber = '  ' + String(number);
    } else if (number < 100) {
       strNumber = ' ' + String(number);
    } else {
       strNumber = String(number);
    }
    array.push(strNumber);
  });

  const columns = 25;
  const remainder = array.length % columns;
  const rowNumbers = Math.floor(array.length / columns);

  console.log('[ ');
  for (let r = 0; r < rowNumbers; r++) {
    const row = array.slice(r*columns, columns+(r*columns));
    console.log(`  ${row}`);
  }
  if (remainder) console.log(`  ${array.slice(-remainder)}`);
  console.log('] ');
}

const arr = createArray(223, 1000);
console.log('\nOriginal array with length of: ', arr.length);
printArr(arr);

count(arr);
console.log('\nSorted array: ');
printArr(arr);

console.log('\nShuffled array: ');
const shuffled = shuffle(arr);
printArr(shuffled);

console.log('\nRecShuffled array: ');
const recShuffled = recShuff(arr);
printArr(recShuffled);
