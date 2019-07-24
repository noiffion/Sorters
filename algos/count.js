// count.js

function countingSort(array) {
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


export default countingSort;
