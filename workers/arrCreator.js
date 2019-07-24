export default () => {
  self.addEventListener("message", e => {
    // eslint-disable-line no-restricted-globals
    if (!e) return;

    const size = e.data[0];
    const digits = e.data[1];
    const oneHundreth = Math.floor(size / 100);
    const quarter = Math.floor(size / 4);
    let currentPercent = 1; 
    const arr = new Array(Number(size)).fill(1);
    arr.forEach((element, i, arr) => {                                   
      const number = Math.ceil(Math.random() * Math.pow(10, digits));
      arr[i] = number;
      if (size > 10000) {
         if (i >= currentPercent * oneHundreth) {
             currentPercent++;
             postMessage(currentPercent);
         } 
      } else {
         if (i >= (currentPercent / 25) * quarter) {
          currentPercent += 25;
          postMessage(currentPercent);
         }
      }
    }) 

    postMessage(arr);
  });
};
