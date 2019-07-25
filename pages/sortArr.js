import builtin                        from './../workers/builtin';
import bubble                         from './../workers/bubble';
import insertion                      from './../workers/insertion';
import selection                      from './../workers/selection';
import merge                          from './../workers/merge';
import heap                           from './../workers/heap';
import quick                          from './../workers/quick';
import count                          from './../workers/count';


const sortArr = (array) => {
  
  const sortFuncs = null; //[bubble, insertion, selection, merge, heap, quick, count, builtin];

  sortFuncs.forEach(func => {
    const arrCopy = [...array];
    const funcString = func.toString();
    const blob = new Blob(["(" + funcString + ")()"]);
    const worker = new Worker(URL.createObjectURL(blob));
    worker.postMessage(arrCopy);
    worker.onmessage = (event) => {
      console.log(event.data);
      worker.terminate();
    } 
  });

}


export default sortArr;
