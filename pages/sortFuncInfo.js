import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import Modal               from 'react-bootstrap/Modal';
import Button              from 'react-bootstrap/Button';


const SortFuncInfo = (props) => {

  return (
    <Modal show={props.showInfo} onHide={() => props.setShowInfo(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{props.funcName} sort </Modal.Title>
      </Modal.Header>
     <Modal.Body>
        <p style={{whiteSpace: 'pre-wrap'}}>{props.algoString}</p>
        <p>{props.arrString}</p>
        <p>{props.sortedArray}</p>
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
  sortedArray: PropTypes.string.isRequired,
  algoString: PropTypes.string.isRequired,
}


export default SortFuncInfo;
