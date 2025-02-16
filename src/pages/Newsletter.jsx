import React from 'react';
import { Form, redirect } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const action = async({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  toast.success(`Form submitted successfully`);
  return redirect('/');
}

const Newsletter = () => {
  return (
    <Form className='form' method='POST'>
      <h4 style={{textAlign:'center', marginBottom: '2rem'}}>our newsletter</h4>
      <div className='form-row'>
        <label htmlFor="name" className='form-label'>
          name
        </label>
        <input type="text" className='form-input' name='name' id='name' defaultValue='Smb' />
      </div>
      <div className='form-row'>
        <label htmlFor="lastName" className='form-label'>
          last name
        </label>
        <input type="text" className='form-input' name='nlastName' id='lastName' defaultValue='Lemon' />
      </div>
      <div className='form-row'>
        <label htmlFor="email" className='form-label'>
          email
        </label>
        <input type="text" className='form-input' name='email' id='email' defaultValue='sample@test.com' />
      </div>
      <button type='submit' className='btn btn-block' style={{marginTop: '0.5rem'}}>Submit</button>
    </Form >
  )
}

export default Newsletter;