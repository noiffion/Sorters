// heap.js

function heapSort(array) {
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

module.exports = {
  heap: heapSort
};
