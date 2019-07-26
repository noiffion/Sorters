import React, { useState } from 'react';
import Form                from 'react-bootstrap/Form';
import Button              from 'react-bootstrap/Button';
import Link                from 'next/link';
import PropTypes           from 'prop-types';
import AlertMsg            from './alertMsg';


const Select = (props) => {

  const optionMaker = (current, till, unique, options=[]) => { 
    if (current > till) return options;
    options.push(<option key={current+unique}> {current} </option>);
    return optionMaker(current+1, till, unique, options);
  }

  return (
    <section style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
      <Form onSubmit={(event) => event.preventDefault()} style={{maxWidth: '40%', marginTop: '30px'}}>
       <Form.Text sm={2}> Please, choose a number between 1 and 100,000! </Form.Text>
        <Form.Group id="arraySize" type="text">
          <Form.Control type="text" size="sm" placeholder="" value={props.size}
            onChange={props.sizeChange}
          />
        </Form.Group>   
       <Form.Text sm={2}> You should choose how many digits should be in the numbers! </Form.Text>
        <Form.Group id="digits">
          <Form.Control as="select" value={props.digits}
            onChange={props.digitChange} size="sm"
          >
          {optionMaker(1, 10, 'digit')}
          </Form.Control>
        </Form.Group>
        {props.showAlert ? ( 
          <AlertMsg showAlert={props.showAlert} message={props.alertMsg} type={props.alertType}/>
        ) : ( 
          <div style={{height: '42px', width: '100%'}}> {' '} </div>
        )}
          <Button variant="info" type="submit" block onClick={props.prepareSort}>
            Make an array
          </Button>
          {props.readyToSort ? (
            <Button variant="success" block onClick={props.sort}>
              Sort the array
            </Button>
          ) : <div style={{height: '20px'}}> {' '} </div>
          }
      </Form>
    </section>
  );
}


Select.propTypes = {
  digits: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  sizeChange: PropTypes.func.isRequired,
  digitChange: PropTypes.func.isRequired,
  prepareSort: PropTypes.func.isRequired,
  readyToSort: PropTypes.bool.isRequired,
  sort: PropTypes.func.isRequired,
  showAlert: PropTypes.bool.isRequired,
  alertMsg: PropTypes.string.isRequired,
  alertType: PropTypes.string.isRequired,
};


export default Select;
