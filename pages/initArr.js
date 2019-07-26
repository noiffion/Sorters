import React, { useState, useEffect } from 'react';
import PropTypes                      from 'prop-types';


const InitArr = (props) => {
  const [width, setWidth] = useState(1500);

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWidth);
    return () => window.removeEventListener('resize', handleWidth);
  }, []);

  const arr = props.array;

  let displayNumbers = '';
  arr.forEach((number) => {
    displayNumbers += ` ${number} `;
  })
 
  return (
    <section style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      <div style={{width: '90%', border: '1px solid #1E90FF', padding: '20px'}}>
        {displayNumbers}
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
