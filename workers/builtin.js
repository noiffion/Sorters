
export default () => {
  self.addEventListener("message", event => {
    if (!event) return;


    function builtin(array) {
      array.sort((a, b) => a - b);
    }


    const arr = event.data;

    const start = new Date();
    builtin(arr);
    const finish = new Date();
    const duration = finish - start;

    postMessage([duration, arr, builtin.name]);
  });
};
