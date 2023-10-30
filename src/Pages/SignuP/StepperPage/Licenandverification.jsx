import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import AddLicenceModal from './AddLicenceModal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export const Licenverification = () => {
  const [show, setShow] = useState(false);
  const [consoleData, setConsoleData] = useState({});
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDataSubmit = (data) => {
    setConsoleData(data);
    setIsDataSubmitted(true);
  };

  return (
    <div>
      <Container className='shadow p-4 m-4'>
        <Row>
          <Col>
            <label className='mb-1 ms-3 mt-3 text-muted'>NPI Number</label>
            <input
              className='shadow border-0 w-100 m-0 p-3 rounded-5 text-black'
              placeholder='MD'
              type='text'
            />
            <label className='mb-1 ms-3 mt-3 text-muted'>Degree</label>
            <input
              className='shadow border-0 w-100 m-0 p-3 rounded-5 text-black'
              placeholder='MBBS'
              type='text'
            />
          </Col>
        </Row>

        {isDataSubmitted && (
          <Row className='shadow mt-4'>
            <Table responsive='sm xl lg md'>
              <thead>
                <tr>
                  <th>license</th>
                  <th>Number</th>
                  <th>Expires</th>
                  <th>Image</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{consoleData.licenseType}</td>
                  <td>{consoleData.licenseNumber}</td>
                  <td>{consoleData.licenseExpiry}</td>
                  <td>
                    {consoleData.selectedImage ? 'Yes' : 'No'}
                  </td>
                  <td>{consoleData.licenseStatus}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        )}

        <Row className='mt-4'>
          <Col xl={6}>
            <Button
              className='border-0 p-4 rounded-4 w-100 text-white text-center '
              style={{ backgroundColor: '#B6C5D1' }}
              onClick={handleShow}
              variant='primary'
            >
              Add Medical License
            </Button>
          </Col>

          <Col xl={6}>
            <button
              className='border-0 p-4 w-100 rounded-4 text-white text-center '
              style={{ backgroundColor: '#B6C5D1' }}
              variant='primary'
            >
              Add NPDB Document
            </button>
          </Col>
        </Row>

        <Row className='my-5'>
          <button className='w-25 m-auto backbutton rounded-5 p-2 bg-transparent '>
            Back
          </button>
          <button className='w-25 m-auto border-0 rounded-5 p-2 text-white button'>
            Next
          </button>
        </Row>
      </Container>
      <div className='w-100 bg-white'>
        <Modal show={show} onHide={handleClose} size='xl'>
          <Modal.Body className='w-100'>
            <AddLicenceModal onDataSubmit={onDataSubmit} onHide={handleClose}/>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Licenverification;
