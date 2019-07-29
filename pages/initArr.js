import React     from 'react';
import PropTypes from 'prop-types';


const InitArr = (props) => {

  const arr = props.array ? props.array : [];

  let displayNumbers = '';
  arr.forEach((number) => {
    displayNumbers += ` ${number} `;
  })

  const boxStyle = {
    width: '90%',
    border: '1px solid #1E90FF',
    padding: '20px',
    whiteSpace: 'pre-wrap',
    display: 'flex',
    justifyContent: 'center',
  }

  return (
    <section style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      <div id="numbers" style={boxStyle}>
        {displayNumbers}
      </div>
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
