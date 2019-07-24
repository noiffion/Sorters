import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Head from 'next/head';
import Pbar from './pbar';
import Select from './select';
import bubble from './../algos/bubble';
import insertion from './../algos/insertion';
import selection from './../algos/selection';
import merge from './../algos/merge';
import heap from './../algos/heap';
import quick from './../algos/quick';
import count from './../algos/count';


const builtIn = (array) => {
  array.sort((a, b) => a - b);    
}

const sortFuncs = [bubble, insertion, selection, merge, heap, quick, count, builtIn];

const sortPrep = (sortFunc, array) => {
  const arrayCopy = [...array];
  return sortFunc(arrayCopy);
}


const Index = () => {
  const [size, setSize] = useState(1);
  const [digits, setDigits] = useState(1);
  const [correct, setCorrect] = useState(true);
  const [array, setArray] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [alertType, setAlertType] = useState('firebrick');


  const sizeChange = (event) => {
    const arraySize = event.target.value;
    const val = Math.floor(Number(arraySize));
    if (isNaN(val) || val < 0 || val > 100000) {
      setCorrect(false);
      if (!showAlert || alertMsg.slice(0, 6) === 'Please') {
        setShowAlert(true);
        setAlertMsg('Incorrect value!')
        setAlertType('firebrick');
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

  const sortStart = (event) => {
    setShowAlert(false);
    if (!correct) {
      setShowAlert(true);
      setAlertMsg('Please, submit correct values!');
      setAlertType('firebrick');
      return;
    }

    console.log('hardwareConcurrency: ', navigator.hardwareConcurrency);
    setShowAlert(true);
    setAlertMsg('Preparing the array.');
    setAlertType('forestgreen');
    setTimeout(() => setShowAlert(false), 5000);
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
      <main>
       <Select
         digits={String(digits)} 
         size={String(size)}
         sizeChange={sizeChange}
         digitChange={digitChange}
         sortStart={sortStart}
         showAlert={showAlert}
         alertMsg={alertMsg} 
         alertType={alertType} 
       />
       <Pbar step={10}/>
      </main>
    </>
  );
}


export default Index;
