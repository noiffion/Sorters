function bubbleSort(array) {
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
  return array;
}


export default bubbleSort;
