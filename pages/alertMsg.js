import React     from 'react';
import Alert     from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';


const AlertMsg = (props) => {

  const msgStyle = {
    margin: '0',
    padding: '0',
    color: props.type,
  }
        
  return (
    <Alert show={props.showAlert} style={{padding: '0', textAlign: 'center'}}>
      <p style={msgStyle}> {props.message} </p>
    </Alert>
  )
}

AlertMsg.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}


export default AlertMsg;
