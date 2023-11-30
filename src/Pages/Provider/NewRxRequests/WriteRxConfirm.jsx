import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../Compunents/Footer';
import Navbare from '../../../Compunents/Navbar';
import './WriteRxConfirm.css';
const WriteRxConfirmfee = () => {
  const [SelectedDate, setSelectedDate] = useState(null);
  const handleDateChange = e => {
    setSelectedDate(e.target.value);
  };
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
    {
      label: 'Quantity Unit of Measure',
      placeholder: '',
      type: 'text',
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
              Review / Prescribe Care
            </p>
            <div
              className=' m-auto   py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <h6 className='pb-4 border-bottom'>
                <b style={{ color: '#FAB915' }}>Prescription Detail</b>
              </h6>
              <p style={{ fontSize: '10px', color: '#252424' }}>
                This is what gets sent to the pharmacy of your patient. Please
                note that MK Health Care is not set up to enable the prescribing
                of controlled substances.
              </p>
            </div>
            <div
              className=' m-auto    mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <h6 className='pb-4 border-bottom'>
                <b style={{ color: '#FAB915' }}>
                  <img src='/public/gala_add.svg' className='me-3' alt='' />
                  Hidden Previously Written Prescriptions
                </b>
              </h6>

              <Row className='mt-4'>
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
            </div>
            <br />
            <br />
            <div
              className=' m-auto    mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <div className='pb-4 border-bottom d-flex justify-content-between align-items-center'>
                <p className='my-0' style={{ color: '#FAB915' }}>
                  Prescription Detail
                </p>
                <p className='d-flex my-0' style={{ color: '#FAB915' }}>
                  <img src='./galaAdd0.svg' alt='' className='me-4' />
                  Add Another Medication
                </p>
              </div>
              <div className='shadow p-4 rounded-5 mt-4'>
                <div className='mt-4 d-flex justify-content-center align-items-center'>
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
                    1
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
                <p className='mb-1 ms-3 mt-3'>Date of Birth</p>
                <div style={{ position: 'relative' }}>
                  <input
                    type='date'
                    className='shadow border-0 w-100 m-0 p-3 rounded-5'
                    onChange={handleDateChange}
                  />
                </div>
                <div className='d-flex justify-content-start align-items-center mt-5'>
                  <div>
                    <input type='checkbox' checked='checked' />
                  </div>
                  <p className='my-0 ms-4'>
                    No Substitutions (Dispense as written)
                  </p>
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
                    className='mt-5 bg-white border-0 shadow p-2 rounded-5'
                    style={{ color: '#FF0E0E' }}
                  >
                    Delete this Medication
                    <img src='./deletered.svg' alt='' className='ms-4' />
                  </button>
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

export default WriteRxConfirmfee;
