import { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PaitentDeatilForm = () => {
  const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.click();
  };

  const PatientDetails = [
    { placeholder: 'Sarah Johnson', label: 'Name', type: 'text' },
    { placeholder: '42 years old (Female)', label: 'Age' },
    { placeholder: '11/30/80', label: 'DOB', type: 'date' },
    {
      placeholder: '1224 Stillwater Dr,Roc Springs ,WY,52467',
      label: 'Address',
    },
  ];

  const [values, setValues] = useState(Array(PatientDetails.length).fill(''));

  const handleChange = (index, e) => {
    const updatedValues = [...values];
    updatedValues[index] = e.target.value;
    setValues(updatedValues);
  };
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    // Set the initial active button when the component mounts
    setActiveButton(0);
  }, []);

  const handleButtonClick = buttonIndex => {
    setActiveButton(buttonIndex);
  };

  const [isSectionVisible, setIsSectionVisible] = useState(true);

  const handleImageClick = () => {
    setIsSectionVisible(!isSectionVisible);
  };

  const handleImageClick2 = () => {
    setIsSectionVisible(false);
  };
  const [issSectionVisible, setIssSectionVisible] = useState(true);

  const handleImageClickprogress = () => {
    setIssSectionVisible(!issSectionVisible);
  };

  const handleImageClickprogress2 = () => {
    setIssSectionVisible(false);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className='mt-5'>
            <h3
              className='m-auto  mt-5 text-center'
              style={{ width: '75%', color: '#FAB915' }}
            >
              Patient Chart
            </h3>

            <div
              className=' m-auto mt-5  shadow py-5 mobw100 rounded-0 '
              style={{ width: '80%' }}
            >
              <div className=' m-auto' style={{ width: '80%' }}>
                <div className='d-flex justify-content-start  align-items-center'>
                  <img src='./Frame 163.svg' />
                  <p className='my-0 fs-2 ms-5'>Anas P.</p>
                </div>
                <div className='mt-5  border-bottom'>
                  <p className='my-0'>
                    <span className='fw-bold'>Date of Birth:</span>
                    09/Dec/2023 (20y)
                  </p>
                  <p className='my-0 mt-2 mb-3'>
                    <span className='fw-bold'>Address Line:</span>
                    H#23d, bolck G DHA phase 1 Lahore
                  </p>
                </div>
                <div className='mt-3'>
                  <p className='my-0 fw-bold '>
                    Patient Provided Data as of (10/25/23)
                  </p>
                  <p className='my-0'>
                    <span className='fw-bold'>Past Medical Problems:</span>
                    None
                  </p>
                  <p className='my-0 '>
                    <span className='fw-bold'>Current Medications:</span>
                    Panadol tablet
                  </p>
                  <p className='my-0  mb-3'>
                    <span className='fw-bold'>Allergies:</span>
                    None
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />

            <div
              className=' m-auto mt-5 d-flex justify-content-start align-items-center shadow p-4 mobw100 rounded-5 '
              style={{ width: '80%' }}
            >
              <img
                src='./galaAdd0.svg'
                className='me-4'
                role='button'
                onClick={handleImageClick}
              />
              <p className='my-0' style={{ color: '#FAB915' }}>
                Message
              </p>
            </div>

            <br />
            <br />
            {isSectionVisible && (
              <div
                className=' m-auto  shadow p-4 mobw100 rounded-4 '
                style={{ width: '80%' }}
              >
                <div className='d-flex justify-content-start align-items-center border-bottom pb-3'>
                  <img
                    src='./gala_add.svg'
                    role='button'
                    className='me-4'
                    onClick={handleImageClick2}
                  />
                  <p className='my-0' style={{ color: '#FAB915' }}>
                    Message
                  </p>
                </div>
                {isSectionVisible && (
                  <div style={{ height: '40vh' }}>
                    <div className='d-flex justify-content-end align-items-center'>
                      <div
                        className='d-flex justify-content-end  p-2 px-4 text-black mt-4 rounded-5 '
                        style={{ backgroundColor: '#FFEEC5' }}
                      >
                        <p className='my-0 w-100'>
                          Hey doctor do want to ask anything about me.
                        </p>
                      </div>
                    </div>
                    <div
                      className='shadow p-3 w-100 d-flex justify-content-between  align-items-center w-100 rounded-5'
                      style={{ position: 'relative', top: '60%' }}
                    >
                      <div className='d-flex w-75'>
                        <img src='/public/filesadd.svg' className='me-3 ' />
                        <input
                          type='text'
                          placeholder='Write message...'
                          className='w-100'
                        />
                      </div>
                      <div className='d-flex justify-content-center align-items-center'>
                        <button
                          style={{ backgroundColor: '#FAB915' }}
                          className='p-2 w-100 border-0 rounded-5 text-white'
                        >
                          <img src='./fa_send-o.svg' className='me-3' />
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <br />
            <br />

            <div
              className=' m-auto mt-5 d-flex justify-content-start align-items-center shadow p-4 mobw100 rounded-5 '
              style={{ width: '80%' }}
            >
              <img
                src='./galaAdd0.svg'
                className='me-4'
                role='button'
                onClick={handleImageClickprogress}
              />
              <p className='my-0' style={{ color: '#FAB915' }}>
                Add Progress Note
              </p>
            </div>

            {issSectionVisible && (
              <div
                className=' m-auto mt-5 shadow p-4 mobw100 rounded-4 '
                style={{ width: '80%' }}
              >
                <div className='d-flex justify-content-start align-items-center border-bottom pb-3'>
                  <img
                    src='./gala_add.svg'
                    role='button'
                    className='me-4'
                    onClick={handleImageClickprogress2}
                  />
                  <p className='my-0' style={{ color: '#FAB915' }}>
                    Add progress Note
                  </p>
                </div>
                {issSectionVisible && (
                  <div style={{ height: '10vh' }} className='mt-4'>
                    <textarea
                      placeholder='Type here.. '
                      className='w-100 p-4 border-0 shadow  rounded-5'
                    ></textarea>
                  </div>
                )}
              </div>
            )}

            <div className=' my-5 m-auto p-4 mobw100' style={{ width: '80%' }}>
              <Row>
                <Col md={6}>
                  <Link to='/RequestedRxForm'>
                    <button
                      className={`text-white w-100 p-3 border-0 rounded-5 mb-5 ${
                        activeButton === 0 ? 'active-button' : ''
                      }`}
                      style={{
                        backgroundColor:
                          activeButton === 0 ? '#F52E2E' : '#FAB915',
                      }}
                      onClick={() => handleButtonClick(0)}
                    >
                      <img
                        src='./Component 613 – 2.svg'
                        alt='icon'
                        className='me-3'
                      />
                      Rx Request Pending
                    </button>
                  </Link>
                </Col>
                <Col md={6}>
                  {/* <Link to='/RequestedRxForm'> */}
                    <button
                      className={`text-white w-100 p-3 border-0 rounded-5 mb-2 ${
                        activeButton === 1 ? 'active-button' : ''
                      }`}
                      style={{
                        backgroundColor:
                          activeButton === 1 ? '#F52E2E' : '#FAB915',
                      }}
                      onClick={() => handleButtonClick(1)}
                    >
                      <img
                        src='./Component 614 – 2.svg'
                        alt='icon'
                        className='me-3'
                      />
                      Write Prescription
                    </button>
                  {/* </Link> */}
                </Col>
                <Col md={6}>
                  <button
                    className={`text-white w-100 p-3 border-0 rounded-5 mb-2 ${
                      activeButton === 2 ? 'active-button' : ''
                    }`}
                    style={{
                      backgroundColor:
                        activeButton === 2 ? '#F52E2E' : '#FAB915',
                    }}
                    onClick={() => handleButtonClick(2)}
                  >
                    <img
                      src='./Component 615 – 2.svg'
                      alt='icon'
                      className='me-3'
                    />{' '}
                    Order Lab Tests
                  </button>
                </Col>
                <Col md={6}>
                  <button
                    className={`text-white w-100 p-3 border-0 rounded-5 mb-2 ${
                      activeButton === 3 ? 'active-button' : ''
                    }`}
                    style={{
                      backgroundColor:
                        activeButton === 3 ? '#F52E2E' : '#FAB915',
                    }}
                    onClick={() => handleButtonClick(3)}
                  >
                    <img
                      src='./Component 617 – 2.svg'
                      alt='icon'
                      className='me-3'
                    />{' '}
                    Create Invoice
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaitentDeatilForm;
