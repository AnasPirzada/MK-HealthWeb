import React from 'react';
import { Link } from "react-router-dom"

const SelectOption = () => {
  return (
    <>
      <div className='text-center pb-5'>
        <p className='mt-5'>
          <b>Choose Account Type </b>
        </p>

        <Link to='/CreateAccount'>
          <button
            className='py-3  text-light border-0 rounded-5 w-50 shadow my-4'
            style={{ backgroundColor: '#FAB915' }}
          >
            Health Care Provider
          </button>
        </Link>

        <p className='mb-0' style={{ fontSize: '12px' }}>
          OR
        </p>
        <button
          className='py-3  border-0 rounded-5 w-50 shadow my-4'
          style={{ backgroundColor: '#fff' }}
        >
          Patient
        </button>
      </div>
    </>
  );
};

export default SelectOption;
