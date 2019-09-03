
export default () => {
  self.addEventListener("message", event => {
    if (!event) return;


    function quick(array) {

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


    const arr = event.data;

    const start = new Date();
    quick(arr);
    const finish = new Date();
    const duration = finish - start;

    postMessage([duration, arr, quick.name]);
  });
};
