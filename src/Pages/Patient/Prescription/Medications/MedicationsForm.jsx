import React from 'react';
import Navbare from '../../../../Compunents/Navbar.jsx';
import Footer from '../../../../Compunents/Footer.jsx';
import HeroMedication from './heroMedication.jsx';
import Overview from './mainPage.jsx';
export const MedicationsForm = () => {
  return (
    <div>
      <Navbare activetab='' bgcolor='white' />
      <HeroMedication />
      <Overview />

      <Footer />
    </div>
  );
};
export default MedicationsForm;
