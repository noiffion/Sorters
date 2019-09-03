import builtin   from './../workers/builtin';
import bubble    from './../workers/bubble';
import insertion from './../workers/insertion';
import selection from './../workers/selection';
import merge     from './../workers/merge';
import heap      from './../workers/heap';
import quick     from './../workers/quick';
import count     from './../workers/count';


const parallelSorts = (array, sorts, setSorts) => {

  const sortFuncs = [bubble, insertion, selection, merge, heap, quick, count, builtin];

  sortFuncs.forEach((func, i) => {
    const arrCopy = [...array];
    const funcString = func.toString();
    const blob = new Blob(["(" + funcString + ")()"]);
    const worker = new Worker(URL.createObjectURL(blob));
    worker.postMessage(arrCopy);
    worker.onmessage = (event) => {
      //console.log(`'${event.data[2]}' worker in: `, event.data[0], 'thSec -> ', event.data[1]);
      const sort = Object.assign({}, sorts[i]);
      sort.sorted = event.data[1]
      sort.time = event.data[0]
      sort.done = true;
      setSorts[i](sort);
      worker.terminate();
    }
  });
}


export default parallelSorts;
