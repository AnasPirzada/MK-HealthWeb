import React, { useState } from 'react';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import ClearMoreModal from './LearnMore.jsx';
const DesiredLab = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [isRowVisible, setIsRowVisible] = useState(false);

  const toggleRowVisibility = () => {
    setIsRowVisible(!isRowVisible);
  };

  const labs = [
    {
      name: 'ABO/RH Type (7788)',
      labp: 'Checks the ABO blood type and Rh Factor',
    },
    {
      name: 'ABO/RH Type (7788)',
      labp: 'Checks the ABO blood type and Rh Factor',
    },
    {
      name: 'ABO/RH Type (7788)',
      labp: 'Checks ',
    },
    {
      name: 'ABO/RH Type (7788)',
      labp: 'Checks the ABO blood type and Rh Factor',
    },
    {
      name: 'ABO/RH Type (7788)',
      labp: 'Checks the ABO blood type and Rh Factor',
    },
    {
      name: 'ABO/RH Type (7788)',
      labp: 'Checks the ABO blood type and Rh Factor',
    },
    {
      name: 'ABO/RH Type (7788)',
      labp: 'Checks',
    },
  ];

  return (
    <>
      <Container id='requestLab'>
        <Row className='m-auto mt-5 mobw100' style={{ width: '75%' }}>
          <Col className='text-center shadow'>
            <h5 className='mt-5'>
              <b>Choose Desired Lab Tests</b>
            </h5>
            <div>
              <div
                className='d-lg-flex justify-content-center align-items-center m-auto my-5 mobw100'
                style={{ width: '75%' }}
              >
                <p className='my-0 me-3'>
                  <b>Search :</b>
                </p>
                <div
                  className='input-containerr mobw100 rounded-5'
                  style={{ width: '50%' }}
                >
                  <input
                    placeholder='Search lab tests'
                    className='p-2 shadow rounded-5 ps-4'
                  />
                </div>
                <p
                  className='my-0 ms-3 medicationp'
                  role='button'
                  onClick={toggleRowVisibility}
                >
                  {isRowVisible ? 'Hide' : 'Show'}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {isRowVisible && (
          <Row className='m-auto mt-5 mobw100' style={{ width: '75%' }}>
            {labs.map((lab, index) => (
              <Col
                key={index}
                xl={4}
                xs={6}
                className=' d-flex justify-content-start align-items-start mt-4'
              >
                <div>
                    <label className='custom-checkbox'>
                      <input type='checkbox' className='shadow' />
                      <span className='checkmark shadow rounded-5 '></span>
                    </label>
                </div>
                <div className='ms-3'>
                  <p className='my-0 text-black'>
                    <b>{lab.name}</b>
                  </p>
                  <p
                    className=' my-0 text-nowrap '
                    style={{ fontSize: '10px' }}
                  >
                    {lab.labp}

                    <span
                      className='ms-2 text-primary'
                      role='button'
                      onClick={handleShow}
                    >
                      Learn More
                    </span>
                  </p>
                </div>
                <Modal
                  show={showModal}
                  onHide={handleClose}
                  size='lg'
                  style={{ backgroundColor: '#E6E6E6' }}
                >
                  <Modal.Body className='p-0 rounded-3 '>
                    <ClearMoreModal alpha={handleClose} />
                  </Modal.Body>
                </Modal>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default DesiredLab;
