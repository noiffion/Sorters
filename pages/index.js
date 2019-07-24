import React, { useState, useEffect } from 'react';
import Head                           from 'next/head';
import Form                           from 'react-bootstrap/Form';
import Button                         from 'react-bootstrap/Button';
import Pbar                           from './pbar';
import Select                         from './select';
import InitArr                        from './initArr';
import bubble                         from './../algos/bubble';
import insertion                      from './../algos/insertion';
import selection                      from './../algos/selection';
import merge                          from './../algos/merge';
import heap                           from './../algos/heap';
import quick                          from './../algos/quick';
import count                          from './../algos/count';
import arrCreator                     from "./../workers/arrCreator";
import WebWorker                      from "./../workers/workerSetup";



const builtIn = (array) => {
  array.sort((a, b) => a - b);    
}

const sortFuncs = [bubble, insertion, selection, merge, heap, quick, count, builtIn];


const Index = () => {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(1);
  const [digits, setDigits] = useState(1);
  const [readyToSort, setReadyToSort] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState('firebrick');
  const [correct, setCorrect] = useState(true);

  const [percent, setPercent] = useState(0);

  const fetchWebWorker = (worker) => {    
    worker.postMessage("Fetch Users");    
    worker.addEventListener("message", event => {    
      //this.setState({ count: event.data.length });    
    });    
  }



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
    console.log(worker);
    worker.postMessage([size, digits]);
    worker.onmessage = (event) => {
      console.log(typeof event.data, event.data);
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
    console.log('hardwareConcurrency: ', navigator.hardwareConcurrency);
    setShowAlert(true);
    setAlertMsg('Preparing the array...');
    setAlertType('forestgreen');
    makeArr(size, digits);
    setReadyToSort(true);
    setTimeout(() => setShowAlert(false), 1000);
  }

  const sort = () => {
    const arrayCopy = [...array];

    setReadyToSort(false);
    setArray([]);
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet" crossorigin="anonymous"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        />
      </Head>
      <main style={{width: '100%'}}>
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
       <Pbar percent={percent}/>
       <InitArr
         array={array}
         size={Number(size)}
         digits={Number(digits)}
       />
      </main>
    </>
  );
}


export default Index;
