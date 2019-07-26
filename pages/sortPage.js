import React, { useState, useEffect } from 'react';
import PropTypes                      from 'prop-types'; 
import Head                           from 'next/head';
import Button                         from 'react-bootstrap/Button';
import Pbar                           from './pbar';
import SortResult                     from './sortResult';


const SortPage = (props) => {
  const [width, setWidth] = useState(1500);
    
  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);

    window.addEventListener('load', handleWidth);
    window.addEventListener('resize', handleWidth);

    return () => {
      window.removeEventListener('resize', handleWidth);
      window.removeEventListener('load', handleWidth);
    }
  }, []);

  const gridStyle = width => {
    //const rep = Math.min(Math.max(1, Math.floor(width / 250)), 3);
    const rep = 1;
    return {
      //border: '1px solid purple',
      width: '100%',
      margin: 0,
      padding: 0,
      display: 'grid',
      gridTemplateColumns: `repeat(${rep}, auto)`,
      gridRowGap: '5px',
    }
  }

  const gridWrapperStyle = {
    width: '100%', 
    margin: '1% 0 0 0', 
    padding: '0',
    display: 'flex', 
    justifyContent: 'center', 
  }

  const sorts = [
    props.bubble, 
    props.insertion, 
    props.selection, 
    props.merge, 
    props.heap, 
    props.quick,
    props.count, 
    props.builtin
  ];

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
        />
      </div>
    )
  });

  //console.log(gridItems);

  return (
    <>
      <section style={gridWrapperStyle}>
        <div className="container" style={gridStyle(width)}>
          {gridItems}
        </div>
      </section>
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
  allSorted: PropTypes.bool.isRequired,
  setStartToSort: PropTypes.func.isRequired,
  setReadyToSort: PropTypes.func.isRequired,
}


export default SortPage;
