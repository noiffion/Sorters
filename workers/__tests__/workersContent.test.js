/* eslint-disable */

import {
  arrCreator,
  bubble,
  builtin,
  count,
  heap,
  insertion,
  merge,
  quick,
  selection
}            from './../algosBundle.js';


/*
 *  Testing the workers behaviour is difficult in Node, the 'tiny-worker' npm library did not work
 *  out, and the  built-in (but experimental) 'worker_threads' was also wasn't sufficient (can't
 *  send multiple postMessages). Therefore the sorting algorithms and the array creator
 *  algorithm is tested here not the functionality of the webworkers.
 */


describe('Array creating algorithm', () => {
  test('creating arrays of the correct sizes and values', () => {
    let results = [];
    const postMessage = (result) => {
      (result instanceof Array) ? results.unshift(result) : results.push(result);
    }
    const pairs = [[10, 1], [100, 3], [1000, 5], [10000, 7], [100000, 9], [1000000, 10]];
    pairs.forEach((valuePair, i) => {
      arrCreator(valuePair[0], valuePair[1], postMessage);
      expect(results[0] instanceof Array).toBe(true);
      expect(results[0].length).toBe(pairs[i][0]);
      const maxValue = results[0].reduce((first, second) => {
        return first > second ? first : second;
      }); 
      expect(maxValue).toBeGreaterThanOrEqual(0);
      expect(maxValue).toBeLessThanOrEqual(Math.pow(10, pairs[i][1]));
      results = [];
    })
  });
});


describe('Sorting algorithms', () => {

  const results = [];
  const postMessage = (result) => {
    (result instanceof Array) ? results.unshift(result) : results.push(result);
  }
  arrCreator(12000, 5, postMessage);
  const array = results[0];
  let inputArr = [...array]
  const sortedArr = [...array];
  sortedArr.sort((a, b) => a - b);


  beforeEach(() => {
    inputArr = [...array];
  });

   test('Builtin', () => {
    builtin(inputArr);
    const sorted = inputArr.every((number, i, arr) => {
      return (i > 0) ? number >= arr[i-1] : true;
    })
    expect(sorted).toBe(true);
  });

  test('Bubble', () => {
    bubble(inputArr);
    expect(inputArr).toStrictEqual(sortedArr);
  });

  test('Count', () => {
    count(inputArr);
    expect(inputArr).toStrictEqual(sortedArr);
  });

  test('Heap', () => {
    heap(inputArr);
    expect(inputArr).toStrictEqual(sortedArr);
  });

  test('Insertion', () => {
    insertion(inputArr);
    expect(inputArr).toStrictEqual(sortedArr);
  });

  test('Quick', () => {
    quick(inputArr);
    expect(inputArr).toStrictEqual(sortedArr);
  });

  test('Selection', () => {
    selection(inputArr);
    expect(inputArr).toStrictEqual(sortedArr);
  });

  test('Merge', () => {
    inputArr = merge(inputArr);
    expect(inputArr).toStrictEqual(sortedArr);
  });

});
