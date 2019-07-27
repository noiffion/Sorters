import React, { useState, useEffect } from 'react';
import PropTypes                      from 'prop-types'; 
import Head                           from 'next/head';
import Button                         from 'react-bootstrap/Button';
import Pbar                           from './pbar';
import SortResult                     from './sortResult';


const SortPage = (props) => {
  const [width, setWidth] = useState(1500);
    
  const gridStyle = {
    //border: '1px solid purple',
    width: '100%',
    margin: 0,
    padding: 0,
    display: 'grid',
    gridTemplateColumns: `repeat(1, auto)`,
    gridRowGap: '5px',
  }

  const gridWrapperStyle = {
    width: '100%', 
    margin: '1% 0 0 0', 
    padding: '0',
    display: 'flex', 
    justifyContent: 'center', 
  }

  const sorts = props.bubble ? ( 
    [
      props.bubble, props.insertion, props.selection, props.merge, 
      props.heap, props.quick, props.count, props.builtin
    ]) : [];

  sorts.sort((funcA, funcB) => funcA.time - funcB.time);

  const gridItems = sorts.map((sort, i) => {
    const funcName = sort.name;
    const ready = sort.done;
    const doneIn = sort.time;
    let displaySorted = sort.sorted;

    if (displaySorted.length > 10) {
        const firstFive = displaySorted.slice(0, 5).join(', ');
        const lastFive = displaySorted.slice(displaySorted.length - 5).join(', ');
        displaySorted = firstFive + ',' + ' (...) ' + lastFive;
    } else {
        displaySorted = displaySorted.join(', ');
    }

    return (
      <div id="sortResult" key={sort + '_' + i}>
        <SortResult
         key={sort + '_' + i}
         funcName={funcName}
         ready={ready}
         displaySorted={displaySorted}
         doneIn={doneIn}
         algoDisplay={props.algoDisplay}
        />
      </div>
    )
  });

  return (
    <>
      <section style={gridWrapperStyle}>
        <div className="container" style={gridStyle}>
          {gridItems}
        </div>
      </section>
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '50px 0'}}>
        <Button variant="dark" onClick={props.restart}> Restart </Button>
      </div>
    </>
  );
}


SortPage.propTypes = {
  bubble: PropTypes.object.isRequired,
  insertion: PropTypes.object.isRequired,
  selection: PropTypes.object.isRequired,
  merge: PropTypes.object.isRequired,
  heap: PropTypes.object.isRequired,
  quick: PropTypes.object.isRequired,
  count: PropTypes.object.isRequired,
  builtin: PropTypes.object.isRequired,
  setStartToSort: PropTypes.func.isRequired,
  setReadyToSort: PropTypes.func.isRequired,
  algoDisplay: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,
}


export default SortPage;
