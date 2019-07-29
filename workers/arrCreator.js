export default () => {
  self.addEventListener("message", event => {
    // eslint-disable-line no-restricted-globals
    if (!event) return;

    const size = event.data[0];
    const digits = event.data[1];
    const tenth = Math.floor(size / 10);
    const quarter = Math.floor(size / 4);
    let currentPercent = 1; 
    const arr = new Array(Number(size)).fill(1);
    const finalArr = arr.map((element, i) => {                                   
      const randNumb = Math.floor(Math.random() * Math.pow(10, digits));
      if (size > 10000) {
          if (i+1 > (currentPercent / 10) * tenth) {
             (currentPercent + 10 >= 100) ? currentPercent = 100 : currentPercent += 10;
             postMessage(currentPercent);
         }
      } else if (size <= 100) {
          currentPercent = 100;
          postMessage(currentPercent);
      } else {
          if (i+1 > (currentPercent / 25) * quarter) {
            (currentPercent + 25 >= 100) ? currentPercent = 100 : currentPercent += 25;
            postMessage(currentPercent);
          }
      }
      return element * randNumb;
    }) 

    postMessage(finalArr);
  });
};
