import builtin   from './../algos/builtin';
import bubble    from './../algos/bubble';
import insertion from './../algos/insertion';
import selection from './../algos/selection';
import merge     from './../algos/merge';
import heap      from './../algos/heap';
import quick     from './../algos/quick';
import count     from './../algos/count';


const sequentialSorts = (array) => {
  
  const sortFuncs = [bubble, insertion, selection, merge, heap, quick, count, builtin];

  const start = new Date();
  sortFuncs.forEach(func => {
    console.log(func.name);
    const arrCopy = [...array];
    if (func.name === 'quickSort' || func.name === 'builtIn') {
        func(arrCopy);
        console.log(arrCopy);
    } else {
        const arr = func(arrCopy);
        console.log(arr);
    }
  });
  const end = new Date();
  console.log(end-start);
}


export default sequentialSorts;
