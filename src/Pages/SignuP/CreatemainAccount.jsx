import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbare from '../../Compunents/Navbar.jsx';
import SignupSteper from './Stepper.jsx';
export const CreatemainAccount = () => {


  return (
    <div>
      <Navbare activetab='' bgcolor='transparent' />

      <Container className='pt-5'>
        <div className='ms-5 mt-5' style={{ width: '60%' }}>
          <p className='ms-5' style={{ color: '#FAB915' }}>
            Create Account as a Health Provider!
          </p>
          <Row>
            <p className='ms-5'>
              <SignupSteper />
            </p>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default CreatemainAccount;
