import React, { useState } from 'react';


const Filler = (props) => {
  return <div style={props.fillerStyle} />
}


const Bar = (props) => {
  return (
    <div style={props.progressBar}>
      <Filler fillerStyle={props.fillerStyle} percent={props.percent} />
    </div>
  )
}


const Pbar = (props) => {
  const wrapperStyle = {
    /*border: '1px solid black',*/
    width: '100%', 
    margin: '20px 0 0 0',
    display: 'flex', 
    justifyContent: 'center', 
  }

  const progressBar = {
    /*border: '1px solid blue',*/
    //backgroundColor: 'gray',
    position: 'relative',
    height: '20px',
    width: '80%',
  };

  const fillerStyle = {
    /*border: '1px solid green',*/
    background: '#00FA9A',
    height: '30%',
    borderRadius: '30px',
    transition: 'width .2s ease-in',
    width: `${props.percent}%`
  }


  return (
    <section style={wrapperStyle}>
      <Bar
        progressBar={progressBar}
        fillerStyle={fillerStyle}
        percent={props.percent}
      />
    </section>
  );
}


export default Pbar;
