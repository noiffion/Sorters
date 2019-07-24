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
  const [percent, setPercent] = useState(0);

  const progressBar = {
    //border: '1px solid #333',
    //backgroundColor: 'gray',
    position: 'relative',
    height: '20px',
    width: '350px',
    borderRadius: '50px',
  };

  const fillerStyle = {
    //border: '1px solid #333',
    background: '#00FA9A',
    height: '30%',
    borderRadius: 'inherit',
    transition: 'width .2s ease-in',
    width: `${percent}%`
  }

  const nextStep = () => {
    if(percent + props.step >= 100) return
    setPercent(percent + props.step);
  }

  return (
    <>
      <Bar
        progressBar={progressBar}
        fillerStyle={fillerStyle}
        percent={percent}
      />
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={nextStep} style={{cursor: 'pointer'}}>
          Next
        </button>
      </div>
      
      {/* Added for convenience of viewing */}
      <div
        style={{marginTop: '10px', color: 'blue', marginBottom: '15px', cursor: 'pointer'}}
        onClick={() => setPercent(0)}
      >
        Reset
      </div>
    </>
  );
}


export default Pbar;
