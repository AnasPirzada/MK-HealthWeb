import { useState, useRef, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
export const Otherdetail = () => {
  const OtherDetails = [
    { placeholder: 'MD', label: 'Preferred Suffix', type: 'text' },
    { placeholder: 'MD', label: 'Degree' },
    { placeholder: 'UAMS', label: 'Residency' },
    { placeholder: 'FE/EM', label: 'Specialty' },
  ];

  const [values, setValues] = useState(Array(OtherDetails.length).fill(''));

  return (
    <div>
      <Row className='shadow ms-5 p-4 w-100'>
        <Col>
          {OtherDetails.map((input, index) => (
            <div
              key={index}
              className=' m-auto mobw90 pt-3'
              style={{ width: '100%' }}
            >
              <p className='mb-1 ms-3 mt-3 text-muted'>{input.label}</p>
              <input
                type={input.type}
                className='shadow border-0 w-100 m-0 p-3 rounded-5 text-black'
                placeholder={input.placeholder}
                value={values[index]}
                onChange={e => handleChange(index, e)}
                style={{
                  '--placeholder-color': 'black',
                  'font-weight': 'normal',
                }}
              />
            </div>
          ))}
          <Col className='d-flex flex-column  '>
            <label className='mb-1 ms-3 mt-3 text-muted'>
              Other Information
            </label>
            <textarea
              className='shadow border-0 w-100 m-0 p-3 rounded-5 text-black'
              placeholder='E.g: Interests Services provided'
              style={{ height: '20vh' }}
            />
          </Col>
        </Col>

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
      </Row>
    </div>
  );
};
export default Otherdetail;
