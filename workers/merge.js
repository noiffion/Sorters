
export default () => {
  self.addEventListener("message", event => {
    if (!event) return;


    function merge(array) {

      const merge = (lArr, rArr) => {
        let sorted = [];

        while (lArr.length && rArr.length) {
          lArr[0] < rArr[0] ? sorted.push(lArr.shift()) : sorted.push(rArr.shift());
        }

        if (lArr.length) sorted = sorted.concat(lArr);
        if (rArr.length) sorted = sorted.concat(rArr);

        return sorted;
      }

      const sort = (array) => {
        const arrSize = array.length;

        if (arrSize <= 1) return array;

        const middleIndex = Math.floor(arrSize / 2);
        const leftArray = array.slice(0, middleIndex);
        const rightArray = array.slice(middleIndex, arrSize);

        const leftSortedArray = sort(leftArray);
        const rightSortedArray = sort(rightArray);

        return merge(leftSortedArray, rightSortedArray);
      }
      return sort(array);
    }

    const arr = event.data;

    const start = new Date();
    const retArr = merge(arr);
    const finish = new Date();
    const duration = finish - start;

    postMessage([duration, retArr, merge.name]);
  });
};
