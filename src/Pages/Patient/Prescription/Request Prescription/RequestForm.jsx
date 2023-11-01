import React, { useState, useRef } from 'react';
import { Col, Container, Row, Modal } from 'react-bootstrap';
import ConfirmRequestModal from '../../Lab Test/ConfirmRequestModal';
import { Dropdown } from 'react-bootstrap';
import Google from './Googlemap.jsx';
const RequestForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [selectedGender, setSelectedGender] = useState('male');

  const handleGenderClick = gender => {
    setSelectedGender(gender);
  };

  const [selectedopt, setSelectedopt] = useState('yes');

  const handleoptClick = opt => {
    setSelectedopt(opt);
  };
  const [pselectedopt, ssetSelectedopt] = useState('yes');

  const phandleoptClick = opt => {
    ssetSelectedopt(opt);
  };

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
  const [pharmacies] = useState([
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
    {
      name: 'A - Quest Diagnostics',
      address: '135 Barclay Cir, Ste 103Rochester Hills, MI 48307',
    },
  ]);

  // ... (existing code)

  // Define patient health details input fields
  const patientHealthDetails = [
    {
      placeholder: '',
      label: 'Past Medical Problems (e.g. Asthma - if none, type "none")',
      type: 'text',
    },
    {
      placeholder: '',
      label: 'Current Medications (if none, type "none")',
      type: 'text',
    },
    {
      placeholder: ' ',
      label: 'Blood Pressure (mmHg)',
      type: 'text',
    },
    {
      placeholder: ' ',
      label: 'Known Allergies (if none, type "none")',
      type: 'text',
    },
    {
      placeholder: ' ',
      label: 'Medication Desired',
      type: 'text',
    },
    {
      placeholder: ' ',
      label: 'Dosage Desired',
      type: 'text',
    },
    {
      placeholder: ' ',
      label: 'Quantity Desired',
      type: 'text',
    },
  ];

  const [selectedPharmacies, setSelectedPharmacies] = useState([]);

  const toggleSelect = index => {
    const updatedSelectedPharmacies = [...selectedPharmacies];
    const isSelected = updatedSelectedPharmacies.includes(index);

    if (isSelected) {
      // If already selected, deselect it
      updatedSelectedPharmacies.splice(
        updatedSelectedPharmacies.indexOf(index),
        1
      );
    } else {
      // If not selected, select it
      updatedSelectedPharmacies.push(index);
    }

    setSelectedPharmacies(updatedSelectedPharmacies);
  };

  const [isUpperRowVisible, setIsUpperRowVisible] = useState(true);

  const togglesSelect = index => {
    // Toggle the visibility of the upper and lower rows when the button is clicked.
    setIsUpperRowVisible(!isUpperRowVisible);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <br />

            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <h6 className='ms-2 ms-md-5  pb-1'>
                <b style={{ color: '#FAB915' }}>Step 1 - Choose State</b>
              </h6>

              <div
                className='py-3 m-auto   mobw90 rounded-3 '
                style={{ width: '80%' }}
              >
                <div
                  className='d-flex align-content-center  justify-content-between    m-auto '
                  style={{ width: '95%' }}
                >
                  <p className='ms-2 mobfont12'>
                    Choose your state from below:
                  </p>
                </div>
                <div
                  className='mt-1 d-flex align-content-center  justify-content-between    m-auto '
                  style={{ width: '95%' }}
                >
                  <div className='input-container shadow bg-light  w-100 rounded-5 '>
                    <select
                      className='w-100 rounded-3 text-muted'
                      style={{
                        border: 'none',
                        backgroundColor: 'transparent',
                      }}
                    >
                      <option value='State'></option>
                      <option>State</option>
                      <option>LinkedIn</option>
                      <option>Grepper</option>
                      <option>i don't want to do that </option>
                        
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              {isUpperRowVisible ? (
                <div className='m-auto obw100 ' style={{ width: '95%' }}>
                  <h6 className='  pb-4 border-bottom mx-4'>
                    <b style={{ color: '#FAB915', width: '90%' }}>
                      Step - 2 Choose Pharmacy
                    </b>
                  </h6>

                  <p className='text-muted'>
                    Enter your Zip Code or city to see a list of available Quest
                    Diagnostics lab locations in your area.
                  </p>

                  <Row className='d-flex justify-content-between align-items-center w-100'>
                    <Row className='d-flex'>
                      <Col xl={6}>
                        <input
                          type='search'
                          placeholder='Newagen, ME'
                          className='w-50 shadow  p-2 rounded-5'
                        />
                        <button
                          className='border-0 p-1 w-25 rounded-5 text-white button ms-2'
                          style={{ fontSize: '14px' }}
                        >
                          Search
                        </button>
                      </Col>
                    </Row>
                    <Row className='d-flex justify-content-between align-items-center w-100'>
                      <Col xl={6}>
                        <Row
                          className='mt-4 overflow-auto'
                          style={{ height: '40vh', overflowX: 'none' }}
                        >
                          {pharmacies.map((pharmacy, index) => (
                            <Col xl={12} className='d-flex' key={index}>
                              <Col xl={3} className='ms-3'>
                                <button
                                  className={`border-0 w-100 p-1 rounded-4 button text-white ${
                                    selectedPharmacies.includes(index)
                                      ? 'selected'
                                      : ''
                                  }`}
                                  onClick={() => togglesSelect(index)}
                                >
                                  {selectedPharmacies.includes(index)
                                    ? 'Selected'
                                    : 'Select'}
                                </button>
                              </Col>
                              <Col></Col>
                              <Col xl={8} className='ms-'>
                                <p className='my-0 fw-bold'>{pharmacy.name}</p>
                                <p style={{ fontSize: '13px' }}>
                                  {pharmacy.address}
                                </p>
                              </Col>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                      <Col xl={6} className='text-center'>
                        <p>Google Map</p>
                        {/* <Google /> */}
                      </Col>
                    </Row>
                  </Row>
                </div>
              ) : (
                <div className='m-auto obw100 ' style={{ width: '95%' }}>
                  <div className='pb-4 border-bottom mx-4 d-flex justify-content-between  align-items-center'>
                    <h6>
                      <b style={{ color: '#FAB915', width: '90%' }}>
                        Step - 2 Choose Pharmacy
                      </b>
                    </h6>
                    <p className='my-0 medicationp'>Edit</p>
                  </div>
                  <div className='m-auto obw100 mt-5' style={{ width: '95%' }}>
                    <Row>
                      <Col>
                        <button>Selected</button>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
            </div>

            <br />
            <br />

            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <h6 className='  pb-4 border-bottom mx-4'>
                <b style={{ color: '#FAB915', width: '90%' }}>
                  Step - 3 Personal Information
                </b>
              </h6>

              <div>
                {inputDetails.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 '>{input.label}</p>
                    <input
                      type={input.type}
                      className='shadow border-0  w-100 m-0 p-3 rounded-5 '
                      placeholder={input.placeholder}
                      value={values[index]}
                      onChange={e => handleChange(index, e)}
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className='m-auto mobw90' style={{ width: '80%' }}>
                  <p className='mb-1 ms-3 mt-3'>Date</p>
                  <div style={{ position: 'relative' }}>
                    <input
                      type='date'
                      className='shadow border-0 w-100 m-0 p-3 rounded-5 custom-date-input'
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
                  <div className=' m-auto mobw90' style={{ width: '80%' }}>
                    <p className='mb-1 ms-3 mt-3 '>Gender</p>

                    <div className='d-flex align-items-center'>
                      <div
                        className={`d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                          selectedGender === 'male' ? 'selected' : ''
                        }`}
                        onClick={() => handleGenderClick('male')}
                        style={{
                          background:
                            selectedGender === 'male' ? '' : '#FFFFFF',
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
                        onClick={() => handleGenderClick('female')}
                        // style={{ background: selectedGender === 'female' ? '#FAB915' : '#FFFFFF', color: selectedGender === 'female' ? '#FFFFFF' : '#000000' }}
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
              </div>
            </div>

            <br />
            <br />
            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <h6 className='  pb-4 border-bottom mx-4'>
                <b style={{ color: '#FAB915', width: '90%' }}>
                  Step 4 - Patient Health Information
                </b>
              </h6>

              <div>
                {patientHealthDetails.map((input, index) => (
                  <div
                    key={index}
                    className=' m-auto mobw90'
                    style={{ width: '80%' }}
                  >
                    <p className='mb-1 ms-3 mt-3 '>{input.label}</p>
                    <input
                      type={input.type}
                      className='shadow border-0  w-100 m-0 p-3 rounded-5 '
                      placeholder={input.placeholder}
                      value={values[index]}
                      onChange={e => handleChange(index, e)}
                    />
                  </div>
                ))}
              </div>
              <div className=' mobw90 m-auto  mt-4' style={{ width: '80%' }}>
                <p>Reason for Medication (detailed is better)</p>
                <div className='w-100 my-4'>
                  <textarea
                    name=''
                    id=''
                    className='w-100 border-0 shadow  rounded-4 p-3'
                    placeholder='Temperature (e.g. 98° Fahrenheit)'
                    style={{ height: '90px' }}
                  ></textarea>
                </div>
              </div>

              <div>
                <div className=' m-auto mobw90' style={{ width: '80%' }}>
                  <p className='mb-1 ms-3 mt-3 '>
                    Has the patient ever had an allergic reaction to albuterol,
                    ProAir or Ventolin medication?
                  </p>

                  <div className='d-flex align-items-center'>
                    <div
                      className={`d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                        selectedopt === 'yes' ? 'selected' : ''
                      }`}
                      onClick={() => handleoptClick('yes')}
                      style={{
                        background: selectedopt === 'yes' ? '' : '#FFFFFF',
                        color: selectedopt === 'yes' ? '#FAB915' : '',
                      }}
                    >
                      <input
                        type='radio'
                        checked={selectedopt === 'yes'}
                        readOnly
                      />
                      <span className='ms-2'>Yes</span>
                    </div>
                    <div
                      className={`ms-2 d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                        selectedopt === 'no' ? 'selected' : ''
                      }`}
                      onClick={() => handleoptClick('no')}
                      // style={{ background: selectedGender === 'no' ? '#FAB915' : '#FFFFFF', color: selectedGender === 'no' ? '#FFFFFF' : '#000000' }}
                    >
                      <input
                        type='radio'
                        checked={selectedopt === 'no'}
                        readOnly
                      />
                      <span
                        className='ms-2'
                        style={{
                          background: selectedopt === 'no' ? '' : '#FFFFFF',
                          color: selectedopt === 'no' ? '#FAB915' : '',
                        }}
                      >
                        No
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className=' m-auto mobw90' style={{ width: '80%' }}>
                  <p className='mb-1 ms-3 mt-3 '>
                    Is the patient currently having shortness of breath or chest
                    pain?
                  </p>

                  <div className='d-flex align-items-center'>
                    <div
                      className={`d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                        pselectedopt === 'yes' ? 'selected' : ''
                      }`}
                      onClick={() => phandleoptClick('yes')}
                      style={{
                        background: pselectedopt === 'yes' ? '' : '#FFFFFF',
                        color: pselectedopt === 'yes' ? '#FAB915' : '',
                      }}
                    >
                      <input
                        type='radio'
                        checked={pselectedopt === 'yes'}
                        readOnly
                      />
                      <span className='ms-2'>Yes</span>
                    </div>
                    <div
                      className={`ms-2 d-flex align-items-center justify-content-center px-5 py-2 shadow rounded-5 ${
                        pselectedopt === 'no' ? 'selected' : ''
                      }`}
                      onClick={() => phandleoptClick('no')}
                      // style={{ background: selectedGender === 'no' ? '#FAB915' : '#FFFFFF', color: selectedGender === 'no' ? '#FFFFFF' : '#000000' }}
                    >
                      <input
                        type='radio'
                        checked={pselectedopt === 'no'}
                        readOnly
                      />
                      <span
                        className='ms-2'
                        style={{
                          background: pselectedopt === 'no' ? '' : '#FFFFFF',
                          color: pselectedopt === 'no' ? '#FAB915' : '',
                        }}
                      >
                        No
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className=' m-auto  shadow py-5 mobw100 rounded-0 mt-5'
              style={{ width: '75%' }}
            >
              <h6 className='ms-2 ms-md-5  pb-1'>
                <b style={{ color: '#FAB915' }}>Step 4 - Terms of Use</b>
              </h6>

              <p className=' ms-2 ms-md-5' style={{ color: '#747E93' }}>
                {' '}
                After you submit your request, a licensed medical provider in
                your area will review your information. You will be notified by
                email when that provider has reviewed your request and, if
                appropriate, made care recommendations.
              </p>

              <div className='ms-2 ms-md-5'>
                <div className=' d-flex align-items-start  justify-content-start'>
                  <div>
                    <label className='custom-checkbox'>
                      <input type='checkbox' className='shadow' />
                      <span className='checkmark shadow rounded-5 '></span>
                    </label>
                  </div>
                  <div className='ms-3'>
                    <p style={{ fontSize: '12px' }}>
                      By checking this box, you indicate that you, as the
                      patient or legal guardian of the patient, agree to the
                      Terms of Service, Privacy Policy and Consent to
                      Telehealth.
                    </p>
                  </div>
                </div>

                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='py-5'>
          <Col className='text-center'>
            <button
              className='btnn py-1 px-4 border-0 shadow rounded-5 mt-3'
              onClick={handleShow}
            >
              <span className='me-4'>Submit</span>
              <img src='/Component 638 – 1.svg' width='30' height='30' />
            </button>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} size='lg'>
        <Modal.Body className='p-0 rounded-3 '>
          <ConfirmRequestModal />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RequestForm;
