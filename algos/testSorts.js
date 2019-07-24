// Sort tests
const { createArray } = require('./other/createArray');

const { bubble }      = require('./bubble');
const { selection }   = require('./selection');
const { insertion }   = require('./insertion');
const { merge }       = require('./merge');
const { heap }        = require('./heap');
const { quick }       = require('./quick');
const { count }       = require('./count');
const { bucket }      = require('./bucket');
const { radix }       = require('./radix');


function builtIn(array) {
  array.sort((a, b) => a - b);
}

const sortF = [bubble, insertion, selection, merge, heap, quick, count, builtIn];

function printArr(arr, maxNum) {
  const array = []; 
  const maxNumStr = String(maxNum);

  arr.forEach(number => {
    const numStr = String(number);
    const spaceLen = maxNumStr.length - numStr.length;
    const spaces = new Array(spaceLen).fill(' ');
    const paddedNum = spaces.join('').concat(numStr);
    array.push(paddedNum);
  }); 

  const columns = Math.floor(120 / (maxNumStr.length+1)); 
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

const arraySize = 16000;
const maxSize = 9999;

const array = createArray(arraySize, maxSize);
printArr(array, maxSize);

let start, end;
let arrayCopy = [];

for (f of sortF) {
  switch (f.name) {
    case 'builtIn':
    case 'heapSort':
    case 'quickSort':
    case 'countingSort':
      console.log(`\n - ${f.name}:`);
      arrayCopy = [...array];
      start = Date.now();
      f(arrayCopy);
      end = Date.now();
      console.log(`\t${arrayCopy.slice(0, 10)} ... ${arrayCopy.slice(-10)}`);
      console.log(end - start);
      break;
    default:
      console.log(`\n - ${f.name}:`);
      start = Date.now();
      f(array);
      end = Date.now();
      arrayCopy = f(array);
      console.log(`\t${arrayCopy.slice(0, 10)} ... ${arrayCopy.slice(-10)}`);
      console.log(end - start);  
      break;
  }
}


/*
 *  over 1 sec threshold:
 *    bubble ->        15,000 
 *    insertion ->     20,000
 *    selection ->     27,000
 *    merge ->        126,780
 *    builtIn ->      700,000
 *    heap ->         990,000
 *    quick ->      1,500,000
 *
 *    over 5,000,000 -> builtin > heap > quick
 *
 */

console.log();
