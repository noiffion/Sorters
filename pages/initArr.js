import React, { useState, useEffect } from 'react';
import PropTypes                      from 'prop-types';
import AlertMsg                       from './alertMsg';


const InitArr = (props) => {
  const [width, setWidth] = useState(1500);

  useEffect(() => {
    setWidth(window.innerWidth);
  })

  const arr = props.array;

  const arrayStyle = (width) => {
    const rept = Math.floor(width / 110);
    return {
      border: '1px solid gray',
      margin: '10px 0 0 0',  
      width: '90%',
      display: 'grid',
      gridTemplateColumns: `repeat(${rept}, 1fr)`,
      gridGap: '10px',
      justifyContent: 'space-evenly',
    } 
  }
  
  const displayArr = arr.map((number, i) => {
    return (<div key={"initArr_"+i} style={{justifySelf: 'center'}}> {number} </div>);
  })

  return (
    <section style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      <div className="grid-container" style={arrayStyle(width)}>
        {displayArr}
      </div>
    </section>
  );
}


InitArr.propTypes = {
  size: PropTypes.number.isRequired,
  digits: PropTypes.number.isRequired,
  array: PropTypes.array.isRequired,
};


export default InitArr;
