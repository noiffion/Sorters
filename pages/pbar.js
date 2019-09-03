import React     from 'react';
import PropTypes from 'prop-types';


const Filler = (props) => {
  const style = {
    //border: '1px solid green',
    background: 'forestgreen',
    height: '30%',
    borderRadius: '30px',
    transition: 'width .2s ease-in',
    width: `${props.percent}%`
  }

  return <div style={style} />
}


Filler.propTypes = {
  percent: PropTypes.number.isRequired,
}


const Bar = (props) => {
  const style = {
    //border: '1px solid blue',
    position: 'relative',
    height: '20px',
    width: '80%',
  };

  return (
    <div style={style}>
      <Filler percent={props.percent} />
    </div>
  )
}


Bar.propTypes = {
  percent: PropTypes.number.isRequired,
}


const Pbar = (props) => {
  const style = {
    //border: '1px solid black',
    width: '100%',
    margin: '20px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  }

  return (
    <section style={style}>
      <Bar
        percent={props.percent}
      />
    </section>
  );
}


Pbar.propTypes = {
  percent: PropTypes.number.isRequired,
}


export default Pbar;
