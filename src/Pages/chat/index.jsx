import React from 'react';
import Navbare from '../../Compunents/Navbar.jsx';
import Footer from '../../Compunents/Footer';
import PatientChat from './Chat.jsx';
export const index = () => {
  return (
    <>
      <Navbare activetab='Chat' bgcolor='transparent' />
      <PatientChat />
      <Footer />
    </>
  );
}; 
export default index;
