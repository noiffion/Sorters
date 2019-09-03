import React, { useState, useEffect } from 'react';
import PropTypes                      from 'prop-types';
import VirtualList                    from 'react-tiny-virtual-list';


const InitArr = (props) => {
  const [displayWidth, setDisplayWidth] = useState(1200);
  const [displayHeight, setDisplayHeight] = useState(600);
  const [letterWidth, setLetterWidth] = useState(10);

  useEffect(() => {
    const arr = document.getElementById('displayArray');
    const letterBox = document.getElementById('letterWidth');
    // console.log('letterBox.offsetWidth: ', letterBox.offsetWidth);
    // console.log('box width, height: ', arr.offsetWidth, arr.offsetHeight);
    setDisplayWidth(arr.offsetWidth);
    setDisplayHeight(arr.offsetHeight);
    setLetterWidth(letterBox.offsetWidth / 10);
  }, [props.readyToSort])

  useEffect(() => {
    const arr = document.getElementById('displayArray');
    const setCoords = () => {
      setDisplayWidth(arr.offsetWidth);
      setDisplayHeight(arr.offsetHeight);
    }
    window.addEventListener('resize', setCoords);
    return () => { window.removeEventListener('resize', setCoords)};
  }, [])

  const maxWidth = displayWidth - (displayWidth*0.16);
  const unitWidth = props.digits * letterWidth;
  const fence =  3 * letterWidth;
  // maxWidth = (perRow * unitWidth) + ((perRow-1)  * fence);
  const perRow = Math.floor((maxWidth + fence) / (unitWidth + fence));
  const boxWidth = maxWidth - (maxWidth - (perRow * (props.digits+3) * letterWidth));
  console.log(`maxWidth: ${maxWidth} - perRow: ${perRow} - boxWidth: ${boxWidth}`);

  const numbers = props.array ? props.array : [];
  const rows = [];
  let row = [];
  numbers.forEach((number, i) => {
    if (i > 0 && i % perRow === 0) {
      const rowString = row.join(' | ');
      rows.push(rowString);
      row = [];
    }
    const numbString = `${number}`;
    const numbLen = numbString.length;
    let paddingLeft;
    if (props.digits < numbLen) {
        paddingLeft = new Array();
    } else {
        paddingLeft = new Array(props.digits - numbLen).fill(' ');
    }
    const numbElem = paddingLeft.join('') + numbString;
    row.push(numbElem);
    if (i === numbers.length - 1) {
      const rowString = row.join(' | ');
      rows.push(rowString);
      row = [];
    }
  });


  const wrapperStyle = () => {
    const height = props.readyToSort > 0 ? '88vh' : '230px';
    return {
      //border: '1px solid #000000',
      margin: '0 0 4vh 0',
      padding: '0',
      width: '100%',
      height: `${height}`,
      whiteSpace: 'pre-wrap',
      display: 'flex',
      justifyContent: 'center'
    }
  };

  const boxStyle = {
    border: '1px solid #1E90FF',
    padding: '0 0 0 5px',
    height: '100%',
    fontFamily: `'Roboto Mono', monospace`,
  };

  const imgStyle = {
    border: '1px solid #1E90FF',
    width: '200px',
    height: '200px',
  }

  return (
    <section id="displayArray" style={wrapperStyle()}>
     {numbers.length > 0 ? (
       <VirtualList
         width={boxWidth}
         height={displayHeight}
         itemCount={rows.length}
         itemSize={20}
         style={boxStyle}
         renderItem={({index, style}) => (
           <div key={index} style={style}>
             {rows[index]}
           </div>
         )}
       />
      ) : (
          <img src="./static/sort.gif" style={imgStyle} />
     )}
    </section>
  );
}


InitArr.propTypes = {
  size: PropTypes.number.isRequired,
  digits: PropTypes.number.isRequired,
  array: PropTypes.array.isRequired,
  readyToSort: PropTypes.bool.isRequired,
};


export default InitArr;
