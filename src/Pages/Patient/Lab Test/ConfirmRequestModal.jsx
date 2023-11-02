import { Col, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ConfirmRequestModal = props => {
  const fields = [
    { label: 'First Name:', type: 'text', placeholder: 'Shahid ' },
    { label: 'Last Name:', type: 'text', placeholder: 'Care' },
    {
      label: ' Address Line 1:',
      type: 'text',
      placeholder: 'H#23d, bolck G DHA phase 1 Lahore',
    },
    {
      label: ' Address Line 2:',
      type: 'text',
      placeholder: 'Office#40, bolck G DHA phase 8 Lahore',
    },

    { label: 'City:', placeholder: '5200', type: 'number' },
    { label: 'Zip Code:', placeholder: 'Lahore', type: 'text' },
    { label: 'Phone:', type: 'number', placeholder: '090078601' },
    { label: 'Date of Birth:', type: 'date', placeholder: '09/Dec/2023' },
    { label: 'GENDER:', type: 'text', placeholder: 'Male' },
  ];
  const Healthfields = [
    { label: 'Past Medical Problems:', type: 'text', placeholder: 'None ' },
    {
      label: 'Current Medications:',
      type: 'text',
      placeholder: 'Panadol tablet',
    },
    {
      label: 'Known Allergies:',
      type: 'text',
      placeholder: 'None',
    },
    {
      label: 'Medication Desired:',
      type: 'text',
      placeholder: 'Panadol tablet extra',
    },

    {
      label: 'Dosage Desired:',
      placeholder: '3 time in the day',
      type: 'text',
    },
    { label: 'Quantity Desired:', placeholder: '2 tablets', type: 'text' },
    { label: 'Reason for Medication:', type: 'text', placeholder: 'Headache' },
    {
      label:
        'Has the patient ever had an allergic reaction to albuterol, ProAir or Ventolin medication?',
      type: 'text',
      placeholder: 'Yes',
    },
    {
      label:
        'Is the patient currently having shortness of breath or chest pain?',
      type: 'text',
      placeholder: 'Yes',
    },
  ];

  return (
    <>
      <Row>
        <Col
          className='text-center py-2'
          style={{ backgroundColor: '#FAB915', borderRadius: '15px 15px  0 0' }}
        >
          <p className='mb-0 text-light'>
            <b>Confirm Request</b>
          </p>
        </Col>
      </Row>
      <Row style={{ backgroundColor: '#fff' }}>
        <Col md={12}>
          <div className='text-center py-2'>
            <p className='mb-0' style={{ color: '#747E93', fontSize: '12px' }}>
              Please review carefully, Errors cause delays.
            </p>
          </div>
        </Col>

        <Col md={12} className='my-5'>
          <div className='w-75 m-auto '>
            <p className='medicationp'>Personal Information</p>
            {fields.map((field, index) => (
              <div
                className='d-flex flex-column  align-items-start justify-content-start w-100 m-auto py-2 border-bottom mb-2'
                key={index}
              >
                <p className='mb-0 text-nowrap ' style={{ fontSize: '14px' }}>
                  <b>{field.label}</b>
                </p>
                <input
                  type={field.type}
                  className='p-0 m-0'
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
        </Col>

        <Col md={12} className=''>
          <div className='w-75 m-auto '>
            <p className='medicationp'>Health Information</p>
            {Healthfields.map((field, index) => (
              <div
                className='d-flex flex-column  align-items-start justify-content-start w-100 m-auto py-2 border-bottom mb-2'
                key={index}
              >
                <p className='mb-0 text-nowrap ' style={{ fontSize: '14px' }}>
                  <b>{field.label}</b>
                </p>
                <input
                  type={field.type}
                  className='m-0 p-0'
                  placeholder={field.placeholder}
                />
              </div>
            ))}
          </div>
          <div className='w-75 m-auto mt-5'>
            <div className='d-flex flex-column  align-items-start justify-content-start w-100 m-auto py-1 mb-2'>
              {/* <p className='mb-0 text-nowrap ' style={{ fontSize: '14px' }}>
                <b>Tests Ordered</b>
              </p>
              <p className='mb-0 text-nowrap mt-2' style={{ fontSize: '12px' }}>
                Hemoglobin A1C (496)
              </p> */}

              <Table className='border-0'>
                <thead>
                  <tr>
                    <th>Tests Ordered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ol>
                        <li>anas</li>
                        <li>item2</li>
                        <li>item3</li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className='w-75 m-auto mt-5'>
            <div className='d-flex flex-column  align-items-start justify-content-start w-100 m-auto py-1 mb-2'>
              <p
                className='mb-0 text-nowrap '
                style={{ fontSize: '14px', color: '#FAB915' }}
              >
                <b>State</b>
              </p>
              <p className='mb-0 text-nowrap mt-2' style={{ fontSize: '12px' }}>
                New York
              </p>
            </div>
          </div>

          <div className='w-75 m-auto mt-2'>
            <div className='w-100 m-auto py-1 mb-2'>
              <p
                className='mb-0 text-nowrap '
                style={{ fontSize: '14px', color: '#FAB915' }}
              >
                <b>Lab</b>
              </p>
              <div className='d-flex justify-content-between align-items-center'>
                <p
                  className='mb-0 text-nowrap mt-2'
                  style={{ fontSize: '12px' }}
                >
                  Quest Diagnostics
                </p>
                <p
                  className='mb-0 text-nowrap mt-2 text-muted text-end '
                  style={{ fontSize: '12px' }}
                >
                  135 Barclay Cir, Ste 103Rochester Hills,
                  <br />
                  MI 48307
                </p>
              </div>
            </div>
          </div>

          <div className='w-75 m-auto border-top mt-5'>
            <div className='d-flex align-items-center justify-content-between w-100 m-auto py-1 mb-2'>
              <p
                className='mb-0 text-nowrap '
                style={{ fontSize: '14px', color: '#FAB915' }}
              >
                <b>Total Fees (if approved) :</b>
              </p>
              <p
                className='mb-0 text-nowrap '
                style={{ fontSize: '14px', color: '#FAB915' }}
              >
                <b>990$</b>
              </p>
            </div>
          </div>
        </Col>

        <Col className='text-end pb-5 mt-4'>
          <button
            className=' py-2 px-5 me-3 shadow rounded-5 mt-3 bg-light'
            style={{ border: '1px solid  #FAB915' }}
            onClick={props.handleClose}
          >
            <span className='' style={{ color: '#FAB915' }}>
              Skip
            </span>
          </button>

          <Link to='/Payment'>
            <button className='btnn py-1 px-4 border-0 shadow rounded-5 mt-3'>
              <span className='me-4'>Submit</span>
              <img src='/Component 638 – 1.svg' width='30' height='30' />
            </button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default ConfirmRequestModal;
