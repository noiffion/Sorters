import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';


const AlertMsg = (props) => (
  <Alert show={props.showAlert} style={{padding: '0', textAlign: 'center'}}>
    <p style={{margin: '0', padding: '0', color: props.type}}> {props.message} </p>
  </Alert>
)


AlertMsg.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}


export default AlertMsg;
