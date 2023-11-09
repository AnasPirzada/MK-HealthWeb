import React, { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap'; // Added Col
import { Dropdown } from 'react-bootstrap';

const PersonalInfo = () => {
  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedOpt, setSelectedOpt] = useState('yes'); // Fixed variable name
  const [pSelectedOpt, setPSelectedOpt] = useState('yes'); // Fixed variable name

  const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.click();
  };

  const inputDetails = [
    { placeholder: 'John', label: 'First Name ', type: 'text' },
    { placeholder: 'Wick', label: 'Last Name' },
    { placeholder: 'California', label: 'Address Line 1' },
    { placeholder: 'Address Line 1', label: 'House number, block number ' },
    { placeholder: 'Address Line 2', label: 'House number, block number ' },
    { placeholder: 'City', label: 'USA' },
    { placeholder: '5800', label: 'Zip Code', type: 'number' },
    { placeholder: '000 - 0000 - 0000', label: 'Phone', type: 'number' },
  ];

  const [values, setValues] = useState(Array(inputDetails.length).fill(''));
  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className='m-auto' style={{ width: '90%' }}>
      <form onSubmit={handleSubmit}>
        <Row className='border-bottom border-1'>
          <p className='my-0 mb-2' style={{ color: '#FAB915' }}>
            Personal Information
          </p>
        </Row>
        <Row>
          {inputDetails.map((input, index) => (
            <div key={index} className='m-auto mobw90' style={{ width: '80%' }}>
              <p className='mb-1 ms-3 mt-3'>{input.label}</p>
              <input
                type={input.type || 'text'}
                className='shadow border-0 w-100 m-0 p-2 rounded-5'
                placeholder={input.placeholder}
                value={values[index]}
                onChange={e => handleChange(index, e)}
              />
            </div>
          ))}
          <div>
            <div className='m-auto mobw90' style={{ width: '80%' }}>
              <p className='mb-1 ms-3 mt-3'>Date</p>
              <div style={{ position: 'relative' }}>
                <input
                  type='date'
                  className='shadow border-0 w-100 m-0 p-2 rounded-5 custom-date-input'
                  ref={datePickerRef}
                />
                <img
                  src='/Iconly-Bold-Calendar.svg'
                  alt='Custom Icon'
                  onClick={openDatePicker}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                  }}
                />
              </div>
            </div>
            <div>
              <div className='m-auto mobw90' style={{ width: '80%' }}>
                <p className='mb-1 ms-3 mt-3'>Gender</p>
                <div className='d-flex align-items-center'>
                  <div
                    className={`d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                      selectedGender === 'male' ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedGender('male')}
                    style={{
                      background: selectedGender === 'male' ? '' : '#FFFFFF',
                      color: selectedGender === 'male' ? '#FAB915' : '',
                    }}
                  >
                    <input
                      type='radio'
                      checked={selectedGender === 'male'}
                      readOnly
                    />
                    <span className='ms-2'>Male</span>
                  </div>
                  <div
                    className={`ms-2 d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                      selectedGender === 'female' ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedGender('female')}
                  >
                    <input
                      type='radio'
                      checked={selectedGender === 'female'}
                      readOnly
                    />
                    <span
                      className='ms-2'
                      style={{
                        background:
                          selectedGender === 'female' ? '' : '#FFFFFF',
                        color: selectedGender === 'female' ? '#FAB915' : '',
                      }}
                    >
                      Female
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Row className='mt-5 text-center'>
              <Col>
                <button
                  className='border-50 text-white w-25 border-0 rounded-5 p-2'
                  style={{ backgroundColor: '#FAB915' }}
                >
                  Submit
                </button>
              </Col>
            </Row>
          </div>
        </Row>
      </form>
    </div>
  );
};

export default PersonalInfo;
