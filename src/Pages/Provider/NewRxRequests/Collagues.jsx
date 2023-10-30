import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbare from '../../../Compunents/Navbar.jsx';
import Footer from '../../../Compunents/Footer.jsx';
export const Collagues = () => {
  return (
    <div>
      <Navbare activetab='Provider' bgcolor='transparent' />
      <Container className='pt-5'>
        <div className='m-auto pt-5' style={{ width: '80%' }}>
          <Row className='mt-5 pt-5'>
            <h4 className='text-black mt-5 pb-4'>Colleagues</h4>
          </Row>
          <Row className='shadow p-5'>
            <Col>
              <button
                className='border-0 p-4 w-100 text-white shadow d-flex justify-content-between align-items-center rounded-3 '
                style={{ backgroundColor: '#FAB915' }}
              >
                <img src='./colleugeChat.svg' alt='chat' />
                Colleague Messages
                <img src='./ColleugeRightDropArrow.svg' alt='drop down arrow' />
              </button>
            </Col>
            <Col>
              <button
                className='border-0 p-4 w-100 text-white shadow d-flex justify-content-between align-items-center rounded-3 '
                style={{ backgroundColor: '#FAB915' }}
              >
                <img src='./InviteColleuge.svg' alt='drop down arrow' />
                Invite Colleague{' '}
                <img src='./ColleugeRightDropArrow.svg' alt='drop down arrow' />
              </button>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
export default Collagues;
