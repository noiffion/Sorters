
export default () => {
  self.addEventListener("message", event => {
    if (!event) return;


    function bubble(array) {
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
    }


    const arr = event.data;

    const start = new Date();
    bubble(arr);
    const finish = new Date();
    const duration = finish - start;

    postMessage([duration, arr, bubble.name]);
  });
};
