export function arrCreator(size, digits, postMessage) {
  const tenth = Math.floor(size / 10);
  const quarter = Math.floor(size / 4);
  let currentPercent = 1; 
  const arr = new Array(Number(size)).fill(1);
  const finalArr = arr.map((element, i) => {                                   
    const randNumb = Math.floor(Math.random() * Math.pow(10, digits));
    if (size > 10000) {
        if (i+1 > (currentPercent / 10) * tenth) {
           (currentPercent + 10 >= 100) ? currentPercent = 100 : currentPercent += 10;
           postMessage(currentPercent);
       }
    } else if (size <= 100) {
        currentPercent = 100;
        postMessage(currentPercent);
    } else {
        if (i+1 > (currentPercent / 25) * quarter) {
          (currentPercent + 25 >= 100) ? currentPercent = 100 : currentPercent += 25;
          postMessage(currentPercent);
        }
    }
    return element * randNumb;
  }) 

  postMessage(finalArr);
}


export function bubble(array) {
  const len = array.length;
  let swapped = true;
  let i = 1;

  while (swapped) {
    swapped = false;

    for (let j = 0; j < len - i; j++) {
      if (array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
        swapped = true;
      }
    }
    i++;
  }

  return array
}


export function builtin(array) {
  array.sort((a, b) => a - b);
  return array;
}


export function count(array) {
  const length = array.length;
  if (length < 2) return array;
  
  const findMax = (array, length) => {
    let maxValue = array[0];
  
    for (let i = 1; i < length; i++) {
      if (array[i] > maxValue) maxValue = array[i];
    }
    return maxValue;
  }
  
  const maxValue = findMax(array, length);
  const counts = new Array(maxValue + 1);
  for (let i = 0; i < length; i++) {
    if (!counts[array[i]]) counts[array[i]] = 0;
    counts[array[i]]++
  }
  
  const cLength = counts.length;
  let sortedIndex = 0;
  for (let i = 0; i < cLength; i++) {
    while (counts[i] > 0) {
      array[sortedIndex++] = i;
      counts[i]--;
    }
  }
  return array;
}



export function heap(array) {
  let heapSize = array.length;
  
  const heapify = (arr, oldI, heapSize) => {
    let newI = oldI;
    const leftI = (2 * oldI) + 1;
    const rightI = (2 * oldI) + 2;
  
    if (leftI < heapSize && (arr[leftI] > arr[newI])) newI = leftI;
    if (rightI < heapSize && (arr[rightI] > arr[newI])) newI = rightI;
  
    if (newI !== oldI) {
      [arr[newI], arr[oldI]] = [arr[oldI], arr[newI]];
      heapify(arr, newI, heapSize);
    }
  }
  
  const buildMaxHeap = (arr) => {
    for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
      heapify(arr, i, heapSize);
    }
  }
  buildMaxHeap(array);
  
  while (heapSize > 1) {
    heapSize--;
    [array[heapSize], array[0]] = [array[0], array[heapSize]];
    heapify(array, 0, heapSize);
  }
  return array;
}


export function insertion(array) {
  const len = array.length;
  let ind;
  
  for (let i = 0; i < len; i++) {
    ind = i;
  
    while ((ind > 0) && (array[ind-1] > array[ind])) {
      [array[ind], array[ind-1]] = [array[ind-1], array[ind]];
      ind--;
    }
  }
}


export function merge(array) {
  const merge = (lArr, rArr) => {
    let sorted = [];
  
    while (lArr.length && rArr.length) {
      lArr[0] < rArr[0] ? sorted.push(lArr.shift()) : sorted.push(rArr.shift());
    }
  
    if (lArr.length) sorted = sorted.concat(lArr);
    if (rArr.length) sorted = sorted.concat(rArr);
  
    return sorted;
  }
  
  const sort = (array) => {
    const arrSize = array.length;
  
    if (arrSize <= 1) return array;
  
    const middleIndex = Math.floor(arrSize / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex, arrSize);
  
    const leftSortedArray = sort(leftArray);
    const rightSortedArray = sort(rightArray);
  
    return merge(leftSortedArray, rightSortedArray);
  }
  return sort(array);
}


export function quick(array) {
  const swap = (leftI, rightI) => {
    [array[rightI], array[leftI]] = [array[leftI], array[rightI]];
  }

  const partition = (lowI, highI) => {
    const lastElem = array[highI];
    let partI = lowI;

    for (let i = lowI; i < highI; i++) {
      if (array[i] <= lastElem) {
        if (i != partI) swap(i, partI);
        partI++;
      }
    }
    swap(partI, highI);

    return partI;
  };

  const qSort = (array, lowI=0, highI=(array.length-1)) => {
    if (lowI < highI) {
      const partI = partition(lowI, highI);
      qSort(array, lowI, partI - 1);
      qSort(array, partI + 1, highI);
    }
  }
  qSort(array);
}


export function selection(array) {
  const len = array.length;
  let minIndex;

      for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
          if (array[j] < array[minIndex]) {
            minIndex = j;
          }
        }
  
        if (minIndex !== i) {
          [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }
      }
}
