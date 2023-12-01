import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../Compunents/Footer';
import Navbare from '../../../Compunents/Navbar';
import './WriteRxConfirm.css';
const writePrescription = () => {
  const [SelectedDate, setSelectedDate] = useState(null);
  const handleDateChange = e => {
    setSelectedDate(e.target.value);
  };
  const inputFields = [
    {
      label: 'Patient name',
      placeholder: 'Mohsin',
    },
    {
      label: 'Date of Birth',
      placeholder: '09/Dec/2023',
    },
    {
      label: 'Gender',
      placeholder: 'Male',
    },
    {
      label: 'Past Medical Problems',
      placeholder: 'none',
    },
    {
      label: 'Current Medications',
      placeholder: 'Panadol tablet',
    },
    {
      label: 'Allergies',
      placeholder: 'none',
    },
    // Add more objects for additional input fields if needed
  ];

  const items = [
    { name: 'Aldara 5% Topical Cream' },
    { name: 'Aldara 5% Topical Cream' },
    { name: 'Aldara 5% Topical Cream' },
    { name: 'Aldara 5% Topical Cream' },
    { name: 'Aldara 5% Topical Cream' },
  ];
  const itemss = [
    { names: 'Aldara 5% Topical Cream' },
    { names: 'Aldara 5% Topical Cream' },
    { names: 'Aldara 5% Topical Cream' },
    { names: 'Aldara 5% Topical Cream' },
  ];
  const inputMoreDetail = [
    {
      label: 'Requested: Mounjaro 0.25, Qty: Monthly',
      placeholder: '',
      type: 'text',
    },
    {
      label: 'Quantity (eg. 30)',
      placeholder: '',
      type: 'text',
    },
  ];
  const [formCount, setFormCount] = useState(1);

  const handleAddForm = () => {
    setFormCount(formCount + 1);
  };

  const handleDeleteForm = indexToDelete => {
    // Create a copy of the formCount array
    const updatedFormCount = [...Array(formCount)];

    // Remove the form at the specified index
    updatedFormCount.splice(indexToDelete, 1);

    // Update formCount state with the modified array length
    setFormCount(updatedFormCount.length);
  };
  const [isAdditionalFieldsVisible, setAdditionalFieldsVisible] =
    useState(false);

  const toggleAdditionalFields = () => {
    setAdditionalFieldsVisible(!isAdditionalFieldsVisible);
  };
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
              className='text-center fs-3'
              style={{ color: '#FAB915', fontWeight: '500' }}
            >
              Prescription
            </p>
            <div
              className=' m-auto   py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <h6 className='pb-4 border-bottom'>
                <span style={{ color: '#FAB915', fontSize: '24px' }}>
                  Prescribe a Medication
                </span>
              </h6>
              <p style={{ fontSize: '12px', color: '#252424' }}>
                Please enter the information below to send the medication
                prescription to your patient. you will be notified by email if
                your patient accepts your prescription.
              </p>
            </div>

            <div
              className=' m-auto  shadow  mobw100 rounded-5 p-5'
              style={{ width: '75%' }}
            >
              <h6 className='pb-4  border-bottom'>
                <b style={{ color: '#FAB915' }}>1 - H & P Notes</b>
              </h6>
              {inputFields.map((input, index) => (
                <div key={index} className='mt-1'>
                  <p
                    className='mb-1 mt-2'
                    style={{ color: '#181818', fontSize: '14px' }}
                  >
                    {input.label}
                  </p>
                  <input
                    className='border-bottom w-100 m-0 p-0'
                    placeholder={input.placeholder}
                    disabled
                    style={{ color: '#252424', backgroundColor: 'transparent' }}
                  />
                </div>
              ))}

              <p className='mt-4' style={{ color: '#FAB915' }}>
                <img
                  src='./galaAdd0.svg'
                  alt=''
                  className='me-3'
                  onClick={toggleAdditionalFields}
                />
                Add Height / Weight
              </p>

              {isAdditionalFieldsVisible && (
                <div>
                  <div className='mt-1'>
                    <p
                      className='mb-1 mt-2'
                      style={{ color: '#181818', fontSize: '14px' }}
                    >
                      Height (Inches)
                    </p>
                    <input
                      className='shadow w-100 m-0 p-2 rounded-5 '
                      placeholder='66.8'
                      style={{
                        color: '#252424',
                        backgroundColor: 'transparent',
                      }}
                    />
                  </div>
                  <div className='mt-1'>
                    <p
                      className='mb-1 mt-2'
                      style={{ color: '#181818', fontSize: '14px' }}
                    >
                      Weight (Pounds)
                    </p>
                    <input
                      className='shadow w-100 m-0 p-2 rounded-5 '
                      placeholder='66.8'
                      style={{
                        color: '#252424',
                        backgroundColor: 'transparent',
                      }}
                    />
                  </div>
                  <div className='mt-1'>
                    <p
                      className='mb-1 mt-2'
                      style={{ color: '#181818', fontSize: '14px' }}
                    >
                      Other Notes For Your Documentation
                    </p>
                    <textarea
                      className='shadow w-100 m-0 p-4 rounded-5 border-0'
                      placeholder='66.8'
                      style={{
                        color: '#252424',
                        backgroundColor: 'transparent',
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            <br />

            <div
              className=' m-auto  shadow p-5  mobw100 rounded-5 '
              style={{ width: '75%' }}
            >
              <div className='pb-4  border-bottom d-flex justify-content-between align-items-center'>
                <p className='my-0' style={{ color: '#FAB915' }}>
                  2 - Prescription Detail
                </p>

                <div className='d-flex flex-column justify-content-start align-items-start'>
                  <div>
                    <p className='d-flex my-0' style={{ color: '#FAB915' }}>
                      <img
                        src='./galaAdd0.svg'
                        alt=''
                        role='button'
                        className='me-4'
                        onClick={handleAddForm}
                      />
                      Add Another Medication
                    </p>
                  </div>
                </div>
              </div>
              <p
                className='mt-2'
                style={{ color: '#252424', fontSize: '13px' }}
              >
                This is what gets sent to the pharmacy of your patient. Please
                note that MK Health Care is not set up to enable the prescribing
                of controlled substances.
              </p>
              <Row className='mt-4'>
                <div className='pb-3  border-bottom d-flex justify-content-between align-items-center'>
                  <p className='d-flex my-0' style={{ color: '#FAB915' }}>
                    <img
                      src='./gala_add.svg'
                      alt=''
                      role='button'
                      className='me-4'
                    />
                    Hidden Previously Written Prescriptions
                  </p>
                </div>

                <Col md={6}>
                  {itemss.map(items => (
                    <div
                      key={items.id}
                      className='d-flex justify-content-start align-items-center mt-4'
                    >
                      <button
                        className='p-1 border-0 rounded-5 w-25'
                        style={{
                          color: '#FAB915',
                          backgroundColor: '#FEF3D5',
                        }}
                      >
                        Selecte
                      </button>
                      <p className='ms-3 my-0' style={{ fontSize: '15px' }}>
                        {items.names}
                      </p>
                    </div>
                  ))}
                </Col>
                <Col md={6}>
                  {items.map(item => (
                    <div
                      key={item.id}
                      className='d-flex justify-content-start align-items-center mt-4'
                    >
                      <button
                        className='p-1 border-0 rounded-5 w-25'
                        style={{
                          color: '#FAB915',
                          backgroundColor: '#FEF3D5',
                        }}
                      >
                        Selecte
                      </button>
                      <p className='ms-3 my-0' style={{ fontSize: '15px' }}>
                        {item.name}
                      </p>
                    </div>
                  ))}
                </Col>
              </Row>
              {[...Array(formCount)].map((_, index) => (
                <div className='shadow p-4 rounded-5 mt-4'>
                  <div
                    key={index}
                    className='mt-4 d-flex justify-content-center align-items-center'
                  >
                    <p
                      style={{
                        width: '40px',
                        height: ' 40px',
                        border: ' 2px solid #FAB915',
                        backgroundColor: '#FEF3D5',
                        color: ' #FAB915',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {index + 1}
                    </p>
                  </div>
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
                        className='shadow  w-100 m-0 p-3 rounded-5 '
                        placeholder={input.placeholder}
                        style={{ color: '#252424' }}
                        // disabled={input.disabled}
                        value={input.value}
                      />
                    </div>
                  ))}
                  <p
                    className='mb-1 ms-3 mt-3 '
                    style={{ color: '#181818', fontSize: '14px' }}
                  >
                    Quantity Unit of Measure
                  </p>
                  <select
                    className='shadow  w-100 m-0 p-3 rounded-5 border-0'
                    style={{ color: '#252424' }}
                  >
                    <option value=''></option>
                    <option>gitHub</option>
                    <option>LinkedIn</option>
                    <option>Grepper</option>
                    <option>i don't want to do that </option>
                  </select>
                  <p
                    className='mb-1 ms-3 mt-3 '
                    style={{ color: '#181818', fontSize: '14px' }}
                  >
                    Refills{' '}
                  </p>
                  <select
                    className='shadow  w-100 m-0 p-3 rounded-5 border-0'
                    style={{ color: '#252424' }}
                  >
                    <option value=''></option>
                    <option>gitHub</option>
                    <option>LinkedIn</option>
                    <option>Grepper</option>
                    <option>i don't want to do that </option>
                  </select>
                  <p className='mb-1 ms-3 mt-3'>Effective Date</p>
                  <div style={{ position: 'relative' }}>
                    <input
                      type='date'
                      className='shadow border-0 w-100 m-0 p-3 rounded-5'
                      onChange={handleDateChange}
                    />
                  </div>
                  <div className='d-flex justify-content-start align-items-center mt-5'>
                    <div>
                      <div className='form-group'>
                        <input type='checkbox' id='Terms_check_2' />
                        <label
                          htmlFor='Terms_check_2'
                          style={{ fontSize: '1.1rem' }}
                        >
                          No Substitutions (Dispense as written)
                        </label>
                                  
                      </div>
                    </div>
                  </div>

                  <p
                    className='mb-1 ms-3 mt-3 '
                    style={{ color: '#181818', fontSize: '14px' }}
                  >
                    Sig: Patient-friendly English only, no latin abbreviations.
                    <span style={{ color: '#747E93', fontSize: '13px' }}>
                      (e.g take 2 tablets by mouth daily for 5 days)
                    </span>
                  </p>
                  <input
                    type='text'
                    className='shadow  w-100 m-0 p-3 rounded-5 '
                    placeholder=''
                    style={{ color: '#252424' }}
                  />
                  <p
                    className='mb-1 ms-3 mt-3 '
                    style={{ color: '#181818', fontSize: '14px' }}
                  >
                    Non-Sig Notes for the Rx <br />
                    <span style={{ color: '#747E93', fontSize: '13px' }}>
                      Enter any other information that you want written on the
                      prescription itself.(E.g flavoring choice,
                      contraindications).
                    </span>
                  </p>
                  <input
                    type='text'
                    className='shadow  w-100 m-0 p-3 rounded-5 '
                    placeholder=''
                    style={{ color: '#252424' }}
                  />
                  <p
                    className='mb-1 ms-3 mt-3 '
                    style={{ color: '#181818', fontSize: '14px' }}
                  >
                    Refills{' '}
                  </p>
                  <select
                    className='shadow  w-100 m-0 p-3 rounded-5 border-0'
                    style={{ color: '#252424' }}
                  >
                    <option value=''></option>
                    <option>gitHub</option>
                    <option>LinkedIn</option>
                    <option>Grepper</option>
                    <option>i don't want to do that </option>
                  </select>
                  <div className='my-3 text-end'>
                    <button
                      onClick={() => handleDeleteForm(index)}
                      role='button'
                      className='mt-5 bg-white border-0 shadow p-2 rounded-5'
                      style={{ color: '#FF0E0E' }}
                    >
                      Delete this Medication
                      <img src='./deletered.svg' alt='' className='ms-4' />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            <div className=' d-block d-md-flex align-items-center justify-content-center '>
              <div
                className=' m-auto shadow mt-5 rounded-5 p-5  mobw100 rounded-0 '
                style={{ width: '75%' }}
              >
                <div className='pb-4  border-bottom d-flex justify-content-between align-items-center'>
                  <p className='my-0' style={{ color: '#FAB915' }}>
                    3 - Pharmacy Information
                  </p>

                  <div className='d-flex flex-column justify-content-start align-items-start'>
                    <div>
                      <p className='d-flex my-0' style={{ color: '#FAB915' }}>
                        Edit
                      </p>
                    </div>
                  </div>
                </div>

                <div className='m-auto obw100 ' style={{ width: '95%' }}>
                  <div className='m-auto obw100 mt-5' style={{ width: '95%' }}>
                    <Row
                      className=' p-3 text-center rounded-4 d-flex  justify-content-between align-items-center'
                      style={{ backgroundColor: '#FAFAFA' }}
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
                      style={{ color: '#747E93', fontSize: '13px' }}
                    >
                      You can change your selected pharmacy.
                    </p>
                  </div>
                            
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className=' d-block d-md-flex align-items-center justify-content-center '>
              <div
                className=' m-auto shadow mt-5 rounded-5 p-5  mobw100 rounded-0 '
                style={{ width: '75%' }}
              >
                <div className='pb-4  border-bottom d-flex justify-content-between align-items-center'>
                  <p className='my-0' style={{ color: '#FAB915' }}>
                    4 - Set Your Professional Fee
                  </p>
                </div>

                <div className='m-auto obw100 ' style={{ width: '95%' }}>
                  <div className='m-auto obw100 mt-5' style={{ width: '95%' }}>
                    <div className='mt-4'>
                      <button
                        className=' rounded-5 shadow'
                        style={{
                          backgroundColor: 'white',
                          paddingRight: '10px',
                          fontSize: '24px',
                          color: '#FAB915',
                          border: 'none', // Set border to "none" to remove border color
                        }}
                      >
                        <span
                          style={{
                            paddingRight: '10px',
                          }}
                        >
                          <img src='./bi_currency-dollar.svg' alt='currency' />
                        </span>
                        100.00
                      </button>
                    </div>
                  </div>
                            
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className=' d-block d-md-flex align-items-center justify-content-center '>
              <div
                className=' m-auto shadow rounded-5   mobw100 rounded-0 '
                style={{ width: '75%' }}
              >
                <div className='p-4'>
                  <h6 className='pb-4 border-bottom'>
                    <span style={{ color: '#FAB915', fontSize: '24px' }}>
                      Sign Your Prescription
                    </span>
                  </h6>
                  <div className='mt-4'>
                    <div className='form-group'>
                      <input type='checkbox' id='Terms_check_3' />
                      <label
                        htmlFor='Terms_check_2'
                        style={{ fontSize: '0.8rem', color: '#252424' }}
                      >
                        By checking this box, i am electronically signing and
                        authorizing this prescription.
                      </label>
                    </div>
                  </div>
                  <div className='pt-3'>
                    <p style={{ fontSize: '15px', color: '#252424' }}>
                      How was consult handled?{' '}
                      <span style={{ fontSize: '12px', color: '#747E93' }}>
                        (select all that apply)
                      </span>
                    </p>

                    <div
                      className='d-flex flex-column justify-content-start align-items-start'
                      style={{ color: '#252424' }}
                    >
                      <div className='d-flex mt-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='inlineRadioOptions'
                          id='inlineRadio1'
                          value='option1'
                        />
                        <p className='my-0 ms-2'>Message</p>
                      </div>
                      <div className='d-flex mt-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='inlineRadioOptions'
                          id='inlineRadio1'
                          value='option1'
                        />
                        <p className='my-0 ms-2'>Phone</p>
                      </div>
                      <div className='d-flex mt-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='inlineRadioOptions'
                          id='inlineRadio1'
                          value='option1'
                        />
                        <p className='my-0 ms-2'>Video</p>
                      </div>
                      <div className='d-flex mt-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='inlineRadioOptions'
                          id='inlineRadio1'
                          value='option1'
                        />
                        <p className='my-0 ms-2'>In Person</p>
                      </div>
                      <div className='d-flex mt-2'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='inlineRadioOptions'
                          id='inlineRadio1'
                          value='option1'
                        />
                        <p className='my-0 ms-2'>
                          Other:
                          <input
                            type='text'
                            placeholder='Type Here ...'
                            className='w-50 rounded-5 shadow ms-3'
                          />
                        </p>
                      </div>
                      <div className='mt-4'>
                        <p style={{ color: '#252424', fontSize: '13px' }}>
                          When you click the “NEXT” Button below and confirm
                          prescription details, the prescription will be routed
                          to the pharmacy that your patient will be notified.
                          You will have the opportunity to document notes from
                          this encounter on the next screen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row
          className=' my-4 m-auto p-4 mobw100 d-flex justify-content-center align-items-center'
          style={{ width: '75%' }}
        >
          <Col md={3}>
            <button
              className='text-white w-100 p-3 border-0 rounded-5 mb-2 '
              style={{
                backgroundColor: '#FAB915',
              }}
            >
              Next
              <img
                src='/public/Component 622 – 1.svg'
                className='ms-3'
                alt=''
              />
            </button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default writePrescription;
