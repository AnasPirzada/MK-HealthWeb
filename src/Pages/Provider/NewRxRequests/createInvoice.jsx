import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../Compunents/Footer';
import Navbare from '../../../Compunents/Navbar';
import './WriteRxConfirm.css';
const createInvoice = () => {
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
      label: 'Invoice number',
      placeholder: '090078601',
    },
    {
      label: 'Invoice Date',
      placeholder: 'November 02, 2023',
    },
    {
      label: 'Service date',
      placeholder: 'Nov 02, 2023',
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
              className='text-center fs-3'
              style={{ color: '#FAB915', fontWeight: '500' }}
            >
              Create Invoice
            </p>
            <div
              className=' m-auto   py-5 mobw100 rounded-0 '
              style={{ width: '75%' }}
            >
              <h6 className='pb-4 border-bottom'>
                <span style={{ color: '#FAB915', fontSize: '24px' }}>
                  Send Invoice
                </span>
              </h6>
              <p style={{ fontSize: '12px', color: '#252424' }}>
                Please enter the information below to send the invoice to your
                patient. you will be notified by email when your patient pays
                the invoice payment.
              </p>
            </div>

            <div
              className=' m-auto  shadow  mobw100 rounded-5 p-5'
              style={{ width: '75%' }}
            >
              <h6 className='pb-4  border-bottom'>
                <b style={{ color: '#FAB915' }}>1 - Invoice details</b>
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

              <div className='mt-2'>
                <p
                  className='mb-1 mt-2'
                  style={{ color: '#181818', fontSize: '14px' }}
                >
                  Service Description
                </p>
                <textarea
                  className='border-bottom w-100 m-0 p-0 shadow border-0 p-3 rounded-5 '
                  placeholder='Example. Consultation related to recent illness.'
                  style={{ color: '#252424', backgroundColor: 'transparent' }}
                />
              </div>
              <div className='mt-2'>
                <p
                  className='mb-1 mt-2'
                  style={{ color: '#181818', fontSize: '14px' }}
                >
                  Other Notes For Your Documentation
                  <br />
                  <span style={{ color: '#181818', fontSize: '11px' }}>
                    Your Document notes are not shown to the patient.
                  </span>
                </p>
                <textarea
                  className='border-bottom w-100 m-0 p-0 shadow border-0 p-3 rounded-5 '
                  placeholder='Type here..'
                  style={{ color: '#252424', backgroundColor: 'transparent' }}
                />
              </div>
            </div>

            <div
              className=' m-auto mt-5 shadow  mobw100 rounded-5 p-5'
              style={{ width: '75%' }}
            >
              <h6 className='pb-4  border-bottom'>
                <b style={{ color: '#FAB915' }}>
                  2 - Set Your Professional Fee
                </b>
              </h6>
              <div className='d-flex mt-5'>
                <p className='my-0'>Your Fee: </p>{' '}
                <div className='ms-2'>
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
                      <img
                        src='./bi_currency-dollar.svg'
                        alt='currency'
                        style={{ width: '35px' }}
                      />
                    </span>
                    100.00
                  </button>
                </div>
              </div>

              <p
                className='mt-4'
                style={{
                  fontSize: '24px',
                }}
              >
                Total Amount Due:
                <span style={{ color: '#FAB915' }}>118.50</span>
              </p>
              <p>
                Includes invoice amount and processing fee.
                <span style={{ color: '#007BEC' }}>Learn More</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='text-center mt-5'>
        <p
          style={{
            fontSize: '12px',
          }}
        >
          When you send the invoice to the patient. A notification will be send
          to the patient. you will be notified once patient has paid the
          invoice.
        </p>
      </div>
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

export default createInvoice;
