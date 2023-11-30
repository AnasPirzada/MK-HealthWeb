import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../Compunents/Footer';
import Navbare from '../../../Compunents/Navbar';
import { Link } from 'react-router-dom';

const RequestedRxForm = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [inputDetails, setInputDetails] = useState('');

  const handleInputChange = (index, event) => {
    const newValue = event.target.value;

    // Update the value in the inputDetails array
    const updatedInputDetails = [...inputDetails];
    updatedInputDetails[index].value = newValue;

    setInputDetails(updatedInputDetails);
  };

  const handleButtonClick = () => {
    setIsEditable(prevState => !prevState); // Toggle isEditable state
  };

  const inputDAta = [
    {
      placeholder: 'Anas',
      label: 'First Name:',
      type: 'text',
      disabled: true,
    },
    {
      placeholder: 'Peerzada',
      label: 'Last Name:',
      type: 'text',
      disabled: true,
    },
    {
      placeholder: 'H#23d, bolck G DHA phase 1 Lahore',
      label: 'Address Line 1:',
      type: 'text',
      disabled: true,
    },
    {
      placeholder: 'Office#40, bolck G DHA phase 8 Lahore',
      label: 'Address Line 2:',
      type: 'text',
      disabled: true,
    },
    {
      placeholder: 'Lahore',
      label: 'City:',
      type: 'text',
      disabled: true,
    },
    {
      placeholder: '5200',
      label: 'Zip Code:',
      type: 'text',
      disabled: true,
    },
    {
      placeholder: '090078601',
      label: 'Phone:',
      type: 'number',
      disabled: true,
    },
    {
      placeholder: 'Male',
      label: 'Gender:',
      disabled: true,
    },
  ];

  const inputMoreDetail = [
    {
      label: 'Past Medical Problems:',
      placeholder: 'none',
      type: 'text',
      disabled: true,
    },
    {
      label: 'Current Medications:',
      placeholder: 'Panadol tablet',
      type: 'text',
      disabled: true,
    },
    {
      label: 'Allergies:',
      placeholder: 'none',
      type: 'text',
      disabled: true,
    },
    {
      label: 'Reason for Medication:',
      placeholder: 'Health checkup',
      type: 'text',
      disabled: true,
    },
    {
      label:
        'In the past 3 days, has the patient had a fever greater than 100.5 F?',
      placeholder: 'Yes',
      type: 'text',
      disabled: true,
    },
    {
      label:
        'In the past 7 days, has the patient tested positive for COVID-19 by a molecular (PCR) test?',
      placeholder: 'Yes',
      type: 'text',
      disabled: true,
    },
    {
      label:
        'In the past 10 days, has the patient experienced loss of smell or taste, shortness of breath, weakness or lethargy, lightheadedness or dizziness, vomiting or diarrhea, slurred speech or a seizure?',
      placeholder: 'Yes',
      type: 'text',
      disabled: true,
    },
    {
      label:
        'In the past 14 days, has the patient had close contact or been directly exposed to someone diagnosed with COVID-19?',
      placeholder: 'Yes',
      type: 'text',
      disabled: true,
    },
  ];

  return (
    <>
      <Navbare />

      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <p
              className='text-center fs-2'
              style={{ color: '#FAB915', fontWeight: '500' }}
            >
              Rx Request
            </p>
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <div className=' m-auto mobw90' style={{ width: '80%' }}>
                <h6 className='pb-4'>
                  <b style={{ color: '#FAB915' }}>Personal Information</b>
                </h6>
                {inputDAta.map((input, index) => (
                  <div key={index}>
                    <p className='mb-1 ms-3 mt-3 ' style={{ color: '#181818' }}>
                      {input.label}
                    </p>
                    <input
                      type={input.type}
                      style={{ color: '#252424', backgroundColor: '#fff' }}
                      className=' border-bottom w-100 m-0 p-3 rounded-0 '
                      placeholder={input.placeholder}
                      disabled={input.disabled} // Add disabled prop based on condition
                      value={input.value} // Add value prop based on condition
                    />
                  </div>
                ))}
                <h6 className='mt-5 fs-5 pb-4'>
                  <b style={{ color: '#FAB915' }}>Health Information</b>
                </h6>
                {inputMoreDetail.map((input, index) => (
                  <div key={index}>
                    <p
                      className='mb-1 ms-3 mt-3 '
                      style={{ color: '#181818', fontSize: '14px' }}
                    >
                      {input.label}
                    </p>
                    <input
                      type={input.type}
                      className='border-bottom  w-100 m-0 p-3 rounded-0 '
                      placeholder={input.placeholder}
                      style={{ color: '#252424', backgroundColor: '#fff' }}
                      disabled={input.disabled} // Add disabled prop based on condition
                      value={input.value} // Add value prop based on condition
                    />
                  </div>
                ))}
                <p className='mt-5 my-0'>
                  <b style={{ color: '#FAB915' }}>State</b>
                </p>
                <p className='my-0' style={{ color: '#181818' }}>
                  New York
                </p>

                <p
                  className='text-center mt-5 w-50 m-auto'
                  style={{ color: '#747E93', fontSize: '10px' }}
                >
                  Information collected at time of request on November 25, 2023
                  Please confirm any changes or updates with patient.
                </p>
              </div>
            </div>

            <div
              className='m-auto shadow py-5 mobw100 rounded-0 mt-5'
              style={{ width: '75%' }}
            >
              <div className='m-auto obw100 ' style={{ width: '95%' }}>
                <div className='pb-4 border-bottom mx-4 d-flex justify-content-between  align-items-center'>
                  <h6>
                    <b style={{ color: '#FAB915', width: '90%' }}>
                      Choose Pharmacy
                    </b>
                  </h6>
                  <p className='my-0 medicationp' role='button'>
                    Edit
                  </p>
                </div>
                <div className='m-auto obw100 mt-5' style={{ width: '95%' }}>
                  <Row
                    className=' p-2 text-center rounded-4  d-flex  justify-content-between align-items-center'
                    style={{ backgroundColor: 'FAFAFA' }}
                  >
                    <Col xl={4}>
                      <button
                        className=' p-2 border-0 rounded-5 w-50 '
                        style={{
                          color: '#FAB915',
                          backgroundColor: '#FEF3D5',
                        }}
                      >
                        Selected
                      </button>
                    </Col>
                    <Col xl={4}>
                      <p className='my-0 fw-bold '>Quest Diagnostics</p>
                    </Col>
                    <Col xl={4}>
                      <p
                        className='my-0 '
                        style={{ fontSize: '13px', color: '#747E93' }}
                      >
                        135 Barclay Cir, Ste 103Rochester Hills,MI 48307{' '}
                      </p>
                    </Col>
                  </Row>
                  <p
                    className='text-center mt-4'
                    style={{ color: '#747E93', fontSize: '14px' }}
                  >
                    You can change your selected pharmacy.
                  </p>
                </div>
              </div>
            </div>

            <div className='d-block d-md-flex align-items-center justify-content-center '>
              <div></div>
              <div></div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className=' my-4 m-auto p-4 mobw100' style={{ width: '75%' }}>
          <Col md={6}>
            <button
              className='text-white w-100 p-3 border-0 rounded-5 mb-2 '
              style={{
                backgroundColor: '#EE3131',
              }}
            >
              {/* <img src='./Component 613 – 2.svg' alt='icon' className='me-3' /> */}
              Cancel Rx
            </button>
          </Col>
          <Col md={6}>
            <Link to='/WriteRxConfirmfee'>
              <button
                className='text-white w-100 p-3 border-0 rounded-5 mb-2 '
                style={{
                  backgroundColor: '#FAB915',
                }}
              >
                {/* <img
                  src='./Component 618 – 2.svg'
                  alt='icon'
                  className='me-3'
                /> */}
                Write Rx & Confirm Fees
              </button>
            </Link>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default RequestedRxForm;
