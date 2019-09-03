
export default () => {
  self.addEventListener("message", event => {
    if (!event) return;


    function insertion(array) {
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


    const arr = event.data;

    const start = new Date();
    insertion(arr);
    const finish = new Date();
    const duration = finish - start;

    postMessage([duration, arr, insertion.name]);
  });
};
