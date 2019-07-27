const selection =`function selection(originalArray) {
  const array = [...originalArray];
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
      return array;
}
`;

export default {name: 'selection', text: selection};
