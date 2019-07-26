import React, { useState } from 'react';
import PropTypes           from 'prop-types';
import Modal               from 'react-bootstrap/Modal';
import Button              from 'react-bootstrap/Button';


const SortFuncInfo = (props) => {

  return ( 
    <Modal show={false} onHide={() => props.setShowInfo(false)}>    
      <Modal.Header closeButton>    
        <Modal.Title>Create Issue</Modal.Title>    
      </Modal.Header>    
      <Modal.Body>    
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
} 


export default SortFuncInfo;
