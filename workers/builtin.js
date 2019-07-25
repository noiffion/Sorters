function builtIn = (array) => {
  array.sort((a, b) => a - b);
}


export default () => {
  self.addEventListener("message", event => {
    if (!event) return;

    const arr = event.data;

    const start = new Date();
    builtIn(arr);
    const finish = new Date();
    const duration = finish - start;

    postMessage([duration, arr]);
  });
};
