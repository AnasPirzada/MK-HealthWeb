import { useState, useRef, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
export const Contactdetail = () => {
  const CreateAccount = [
    { placeholder: 'Sarah', label: 'First Name', type: 'text' },
    { placeholder: 'Johnson', label: 'Last Name' },
    { placeholder: '000 - 0000 - 0000', label: 'Phone' },
    { placeholder: 'Texas', label: 'Medical or Professional school' },
    {
      placeholder: '123 West Walnut Street #1234',
      label: 'Practice Address (line1)',
    },
    { placeholder: 'England, Dewsbury', label: 'Practice Address (line2)' },
    { placeholder: 'Rogers', label: 'City' },
    { placeholder: 'Arkansas', label: 'State' },
    { placeholder: 'Arkansas', label: 'Zip Code' },
    { placeholder: '123@mail.com', label: 'Email' },
  ];

  const [values, setValues] = useState(Array(CreateAccount.length).fill(''));
  return (
    <div>
      <Row className='shadow'>
        <Col className='py-5'>
          {CreateAccount.map((input, index) => (
            <div
              key={index}
              className=' m-auto mobw90 pt-3'
              style={{ width: '80%' }}
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
        </Col>
        <Row className='my-5 text-center'>
          {/* <Col xs={12}>
            <button className='w-50 m-auto border-0 rounded-5 p-2 text-white button'>
              Next
              <img src='/public/Component 622 – 2.svg' className='ms-2'/>
            </button>
          </Col> */}
        </Row>
      </Row>
    </div>
  );
};
export default Contactdetail;
