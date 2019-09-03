import React     from 'react';
import PropTypes from 'prop-types';
import Modal     from 'react-bootstrap/Modal';
import Button    from 'react-bootstrap/Button';


const SortFuncInfo = (props) => {

  const titleStyle = (color, funcName) => {
    return {
      backgroundColor: `${color(funcName)}`,
    }
  }

  const algoStyle = {
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '10px',
    paddingBottom: 0,
  }

  const fName = props.funcName;
  const FName = fName ? (
    `${fName.slice(0,1).toUpperCase()}${fName.slice(1)} `) : ' ';
  const gray = () => 'gray';
  const color = props.colorSwitch || gray;

  return (
    <Modal show={props.showInfo} onHide={() => props.setShowInfo(false)}>
      <Modal.Header closeButton style={titleStyle(color, fName)}>
        <Modal.Title>
          {FName} sort
        </Modal.Title>
      </Modal.Header>
     <Modal.Body>
       <div style={{borderBottom: `2px dashed ${color(fName)}`}}>
         <p>The original array: <span style={{color: 'gray'}}> [{props.arrString}]</span></p>
         <p>The sorted array: <span style={{color: 'gray'}}> [{props.sortedArray}]</span></p>
       </div>
       <h5 style={algoStyle}> The sorting algorithm: </h5>
       <p style={{whiteSpace: 'pre-wrap', color: 'gray'}}>{props.algoString}</p>
     </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.setShowInfo(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}


SortFuncInfo.propTypes = {
  setShowInfo: PropTypes.func.isRequired,
  showInfo: PropTypes.bool.isRequired,
  funcName: PropTypes.string.isRequired,
  algoString: PropTypes.string.isRequired,
  arrString: PropTypes.string.isRequired,
  sortedArray: PropTypes.string.isRequired,
  colorSwitch:  PropTypes.func.isRequired,
}


export default SortFuncInfo;
