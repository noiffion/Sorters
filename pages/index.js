import React, { useState, useEffect } from 'react';
import Head                           from 'next/head';
import Form                           from 'react-bootstrap/Form';
import Button                         from 'react-bootstrap/Button';
import Pbar                           from './pbar';
import Select                         from './select';
import SortPage                       from './sortPage';
import InitArr                        from './initArr';
import sequentialSorts                from './../sortfuncs/sequentialSorts';
import parallelSorts                  from './../sortfuncs/parallelSorts';
import arrCreator                     from './../workers/arrCreator';
 

const Index = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(1);
  const [digits, setDigits] = useState(1);
  const [readyToSort, setReadyToSort] = useState(false);
  const [startToSort, setStartToSort] = useState(false);

  const [procNum, setProcNum] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState('firebrick');
  const [correct, setCorrect] = useState(true);
  const [percent, setPercent] = useState(0);

  const [bubble, setBubble] = useState({name: 'bubble', done: false, time: Infinity, sorted: []});
  const [insertion, setInsertion] = useState({
    name: 'insertion', done: false, time: Infinity, sorted: []
  });
  const [selection, setSelection] = useState({
    name: 'selection', done: false, time: Infinity, sorted: []
  });
  const [merge, setMerge] = useState({name: 'merge', done: false, time: Infinity, sorted: []});
  const [heap, setHeap] = useState({name: 'heap', done: false, time: Infinity, sorted: []});
  const [quick, setQuick] = useState({name: 'quick', done: false, time: Infinity, sorted: []});
  const [count, setCount] = useState({name: 'count', done: false, time: Infinity, sorted: []});
  const [builtin, setBuiltin] = useState({
    name: 'builtin', done: false, time: Infinity, sorted: []}
  );

  useEffect(() => {
    const pn = navigator.hardwareConcurrency;
    setProcNum(pn);
    setAlertMsg(`You have ${pn} processors in your machine.`);
    setAlertType('forestgreen');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);     
  }, [])

  const sizeChange = (event) => {
    const arraySize = event.target.value;
    const val = Math.floor(Number(arraySize));
    if (isNaN(val) || val < 0 || val > 100000) {
      setCorrect(false);
      if (!showAlert || alertMsg.slice(0, 6) === 'Please') {
        setAlertMsg('Incorrect value!')
        setAlertType('firebrick');
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      }
    } else if (val < 1) {
        setCorrect(false);
    } else {
        setCorrect(true);
    }
    setSize(arraySize);
  }

  const digitChange = (event) => {
    const digitNumber = Number(event.target.value);
    setDigits(digitNumber);
  }

  const makeArr = (size, digits) => {
    const code = arrCreator.toString();    
    const blob = new Blob(["(" + code + ")()"]);
    const worker = new Worker(URL.createObjectURL(blob));
    worker.postMessage([size, digits]);
    worker.onmessage = (event) => {
      const final = typeof event.data === 'object';
      if (final) {
          setArray(event.data);
          setTimeout(() => setPercent(0), 1000);
          worker.terminate();
      } else {
          setPercent(event.data);
      }
    }
  }

  const prepareSort = (event) => {
    setShowAlert(false);
    if (!correct) {
      setAlertMsg('Please, submit correct values!');
      setAlertType('firebrick');
      setShowAlert(true);
      return;
    }

    setPercent(0);
    setAlertMsg('Preparing the array...');
    setAlertType('forestgreen');
    setShowAlert(true);
    makeArr(size, digits);
    setReadyToSort(true);
    setTimeout(() => setShowAlert(false), 1000);
  }

  const sort = () => {
    const sorts = [bubble, insertion, selection, merge, heap, quick, count, builtin];
    const setSorts = [
      setBubble, setInsertion, setSelection, setMerge, 
      setHeap, setQuick, setCount, setBuiltin
    ];
    parallelSorts(array, sorts, setSorts);
    //sequentialSorts(array);
    const arrayCopy = array;    
    setStartToSort(true);
    setArray([]);
  }

  const restart = () => {
    setArray([]);
    setSize(1)
    setDigits(1);
    setReadyToSort(false);
    setStartToSort(false);

    setShowAlert(false);
    setAlertMsg('');
    setAlertType('firebrick');
    setCorrect(true);
    setPercent(0);

    setBubble({name: 'bubble', done: false, time: Infinity, sorted: []});
    setInsertion({name: 'insertion', done: false, time: Infinity, sorted: []});
    setSelection({name: 'selection', done: false, time: Infinity, sorted: []});
    setMerge({name: 'merge', done: false, time: Infinity, sorted: []});
    setHeap({name: 'heap', done: false, time: Infinity, sorted: []});
    setQuick({name: 'quick', done: false, time: Infinity, sorted: []});
    setCount({name: 'count', done: false, time: Infinity, sorted: []});
    setBuiltin({name: 'builtin', done: false, time: Infinity, sorted: []}); 
  }

  return (
    <>
      <Head>
        <link
         rel="stylesheet" crossOrigin="anonymous"
         href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        />
        <link 
         rel="stylesheet" crossOrigin="anonymous"
         href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" 
         integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" 
        />
      </Head>
      <main style={{width: '100%'}}>
      {!startToSort ? (
        <>
          <Select
           digits={String(digits)}
           size={String(size)}
           sizeChange={sizeChange}
           digitChange={digitChange}
           prepareSort={prepareSort}
           readyToSort={readyToSort}
           sort={sort}
           showAlert={showAlert}
           alertMsg={alertMsg}
           alertType={alertType}
          />
          <Pbar percent={percent} />
          <InitArr
           array={array}
           size={Number(size)}
           digits={Number(digits)}
          />
        </>
      ) : (
         <SortPage 
          bubble={bubble}
          insertion={insertion}
          selection={selection}
          merge={merge}
          heap={heap}
          quick={quick}
          count={count}
          builtin={builtin}
          setStartToSort={setStartToSort}
          setReadyToSort={setReadyToSort}
          restart={restart}    
         />
      )}
      </main>
    </>
  );
}


export default Index;
