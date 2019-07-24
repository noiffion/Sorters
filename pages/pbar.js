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
    position: 'relative',
    height: '20px',
    width: '350px',
    borderRadius: '50px',
    border: '1px solid #333',
  };

  const fillerStyle = {
    background: '#1DA598',
    height: '100%',
    borderRadius: 'inherit',
    transition: 'width .2s ease-in',
    width: `${percent}%`
  }

  const nextStep = () => {
    if(percent === 100) return 
    setPercent(percent + 20);
  }

  return (
    <div>
      <h2> A React Progress Bar </h2>
      <Bar 
        progressBar={progressBar} 
        fillerStyle={fillerStyle}
        percent={percent} 
      />
      
      <div style={{ marginTop: '20px' }}>  
        <button 
          onClick={nextStep}
         >
          Next Step
        </button>  
      </div>   
      
      {/* Added for convenience of viewing */}
      <div style={{marginTop: '10px', color: 'blue', marginBottom: '15px'}} onClick={() => setPercent(0)}>
        Reset
      </div>
    </div>
  );
}


export default Pbar;
