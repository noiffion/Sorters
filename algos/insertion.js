const insertion = `function insertion(array) {
  const len = array.length;
  let ind;

    for (let i = 0; i < len; i++) {
      let current = array[i];
      ind = i-1;

      while ((ind >= 0) && (array[ind] > current)) {
        array[ind+1] = array[ind];
        ind--;
      }
      array[ind+1] = current;
    }

    return array;
}
`;

export default {name: 'insertion', text: insertion};
