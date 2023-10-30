import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AddLicenceModal from './AddLicenceModal.jsx';
export const Licenverification = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            >
              Add NPDB Document
            </button>
          </Col>
        </Row>
        <Row className='my-5'>
          <button
            // variant='contained'
            className='w-25 m-auto backbutton rounded-5 p-2 bg-transparent '
          >
            {/* {activeStep === getSteps().length - 1 ? 'Finish' : 'Next'} */}
            Back
          </button>
          <button className='w-25 m-auto border-0 rounded-5 p-2 text-white button'>
            Next
          </button>
        </Row>
      </Container>
      <div className='w-100 bg-white'>
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Body className='w-100'>
            <AddLicenceModal />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
export default Licenverification;
