import React                 from 'react';
import styled, { keyframes } from 'styled-components';
import Alert                 from 'react-bootstrap/Alert';
import PropTypes             from 'prop-types';
import builtin               from './../algos/builtin';    
import bubble                from './../algos/bubble';    
import insertion             from './../algos/insertion';    
import selection             from './../algos/selection';    
import merge                 from './../algos/merge';    
import heap                  from './../algos/heap';    
import quick                 from './../algos/quick';    
import count                 from './../algos/count';


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
      height: '70px',
      padding: '3%',
      backgroundColor: `${bckColor}`,
      transition: 'background-color 3s',
      color: 'hsl(0, 0%, 20%)',  
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  const spinning = keyframes`
    from { transform: rotate(0deg); }    
    to { transform: rotate(360deg); }      
  `;

  const Loading = styled.div`
    background-image: url('./static/loading.png');
    border-radius: 50%;
    display: inline-block;
    height: 26px;
    width: 26px;
    animation: ${spinning} infinite 3s linear;
  `;

  const pendingStyle = () => {
    return {
      //border: '1px solid purple' 
      borderRadius: '5px',
      backgroundColor: 'hsl(0, 0%, 96%)',
      width: '100%',
      height: '70px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'hsl(0, 0%, 20%)',
    }
  }

  const sorts = [bubble, insertion, selection, merge, heap, quick, count, builtin];

  const sortAlgo = (algoName, sorts) => {
    const algoNames = sorts.map(sortFunction => sortFunction.name);
    const algoIndex = algoNames.indexOf(algoName);
    console.log(algoName,typeof algoName, algoNames, algoIndex);
    return sorts[algoIndex].text; 
  }

  const FName = props.funcName ? (
    `${props.funcName.slice(0,1).toUpperCase()}${props.funcName.slice(1)} `) : ' ';

  const sorted = (
    <div style={sortedStyle(props.funcName)}>
      <div>
        <span style={{cursor: 'pointer'}} onClick={() => {
             const algoString = sortAlgo(props.funcName, sorts);
             props.algoDisplay(props.funcName, algoString, props.displaySorted);}
            }
          >
            {FName}
            <i className='fas fa-long-arrow-alt-right'></i>
            {` ${props.doneIn / 1000} sec`}
        </span>
      </div>
    </div>
  );

  const pending = (
    <div style={pendingStyle()}>
      <div> {FName} </div>
      <span style={{margin: '0 5px'}}> </span>
      <Loading />
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
  doneIn: PropTypes.number.isRequired,
  algoDisplay: PropTypes.func.isRequired,
}


export default SortResult;