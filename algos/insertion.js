function insertionSort(originalArray) {
  const array = [...originalArray];
  const len = array.length;
  let ind;

    for (let i = 0; i < len; i++) {
      ind = i;

      while ((ind > 0) && (array[ind-1] > array[ind])) {
        [array[ind], array[ind-1]] = [array[ind-1], array[ind]];
        ind--;
      }
    }

    return array;
}


export default insertionSort;
