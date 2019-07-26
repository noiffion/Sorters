
export default () => {
  self.addEventListener("message", event => {
    if (!event) return;

    function selection(array) {
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


    const arr = event.data;

    const start = new Date();
    selection(arr);
    const finish = new Date();
    const duration = finish - start;

    postMessage([duration, arr, selection.name]);
  });
};
