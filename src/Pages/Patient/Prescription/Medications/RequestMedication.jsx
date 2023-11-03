import React from 'react';
import Navbare from '../../../../Compunents/Navbar';
import Footer from '../../../../Compunents/Footer.jsx';
import RequestForm from './RequestForm.jsx';
export const RequestMedication = () => {
  return (
    <div>
      <Navbare />
      <RequestForm />
      <Footer />
    </div>
  );
};
export default RequestMedication;
