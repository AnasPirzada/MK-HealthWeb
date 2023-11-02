import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const LearnMore = props => {
  return (
    <div>
      <Row
        className='text-center py-2'
        style={{ backgroundColor: '#FAB915', borderRadius: '0px 0px  0 0' }}
      >
        <Col xl={11} className='my-0 text-light text-center'>
          <p className='my-0  '>
            <b>ABO/RH Type</b>
          </p>
        </Col>
        <Col xl={1}>
          <img src='./x sign.svg' role='button' onClick={props.alpha} />
        </Col>
      </Row>
      <Row className='bg-white p-4'>
        <div>
          <p>
            This test will report your ABO Blood Type as A, B, AB, or O. Your
            blood type is determined when your blood is mixed with antibodies to
            determine whether an interaction occurs. This test will also report
            your Rh Factor as either Positive or Negative, signifying whether Rh
            antigens are present (Positive) or absent (Negative).
          </p>
        </div>
        <div className='text-end'>
          <button
            className=' p-2 bg-white rounded-4 w-25'
            onClick={props.alpha}
          >
            Close
          </button>
        </div>
      </Row>
    </div>
  );
};
export default LearnMore;
