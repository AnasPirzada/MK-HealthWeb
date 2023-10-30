import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const AddLicenceModal = () => {
  return (
    <div className='w-100'>
      <Row className='w-100 border-bottom '>
        <h6>Add Medical License</h6>
      </Row>
      <Row>
        <div style={{ width: '80%' }}>
          <label className='mb-1 ms-3 mt-3 text-muted'>License type:</label>
          <input
            placeholder='MBBS'
            type='text'
            className='shadow border-0 w-100 m-0 p-2 rounded-5 text-black'
          />
          <label className='mb-1 ms-3 mt-3 text-muted'>License Number:</label>
          <input
            placeholder='16438251798'
            type='text'
            className='shadow border-0 w-100 m-0 p-2 rounded-5 text-black'
          />
          <label className='mb-1 ms-3 mt-3 text-muted'>License Expiry:</label>
          <input
            placeholder='8/29/2023'
            type='date'
            className='shadow border-0 w-100 m-0 p-2 rounded-5 text-black'
          />
          <label className='mb-1 ms-3 mt-3 text-muted'>License Status:</label>
          <input
            placeholder='Active'
            type='date'
            className='shadow border-0 w-100 m-0 p-2 rounded-5 text-black'
          />
        </div>
      </Row>
      <Row>
        <button>Upload ID Image</button>
      </Row>
      <Row>
        <button>Cancel</button>
        <button>Next</button>
      </Row>
    </div>
  );
};
export default AddLicenceModal;
