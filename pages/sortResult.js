import React, { useState } from 'react';
import Alert               from 'react-bootstrap/Alert';
import PropTypes           from 'prop-types';


const SortResult = (props) => {

  const sortedStyle = (funcName) => {
    let bckColor;
    switch (funcName) {
      case 'bubble': bckColor = 'hsl(197, 71%, 73%)'; break;
      case 'insertion': bckColor = 'hsl(34, 44%, 75%'; break;
      case 'selection': bckColor = 'hsl(300, 76%, 90%)'; break;
      case 'merge': bckColor = 'hsl(0, 0%, 90%)'; break;
      case 'heap': bckColor = 'hsl(60, 100%, 75%)'; break;
      case 'quick': bckColor = 'hsl(80, 60%, 75%)'; break;
      case 'count': bckColor = 'hsl(39, 100%, 70%)'; break;
      case 'builtin': bckColor = 'hsl(180, 100%, 70%)'; break;
    }
    return {
      //border: '1px solid black',
      borderRadius: '5px',
      width: '100%',
      height: '50px',
      padding: '3%',
      backgroundColor: `${bckColor}`,
      transition: 'background-color 3s',
      color: 'hsl(0, 0%, 20%)',  
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  const pendingStyle = () => {
    return {
      //border: '1px solid black',
      borderRadius: '5px',
      width: '100%',
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'hsl(0, 0%, 20%)',
    }
  }

  const funcName = `${props.funcName.slice(0,1).toUpperCase()}${props.funcName.slice(1)}` 

  const sorted = (
    <div style={sortedStyle(props.funcName)}>
      <div> {funcName} <i className='fas fa-long-arrow-alt-right'></i>
           <span> {props.doneIn} thSecs </span> 
      </div>
    </div>
  );

  const pending = (
    <div style={pendingStyle()}>
      <span> {funcName} </span>
    </div>
  );

  return (
    <>
      {props.ready ? sorted : pending}
    </>
  )
}


SortResult.propTypes = {
  funcName: PropTypes.string.isRequired,
  ready: PropTypes.bool.isRequired,
  displaySorted: PropTypes.string.isRequired,
  doneIn: PropTypes.string.isRequired,
}


export default SortResult;
