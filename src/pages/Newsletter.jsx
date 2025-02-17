import React from 'react';
import { Form, redirect,useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import validator from 'validator';

export const action = async({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  //console.log(data);

// For Using an API //
/*
const API_URL = '';
try {
  const response = await axios.post(API_URL,data)
  toast.success(response.data.API_URL_Element);
  return redirect('/');
} catch (error) {
  toast.error(error?.response?.data?.API_URL_Element);
  return error;
}
*/

  if (!data.email || !data.name) {
    toast.error("Name and Email are required!");
    return null;
  }
  if (!validator.isEmail(data.email)) {
      toast.error("Invalid email format!");
      return null;
    }
  
  try {
    toast.success(`Form submitted successfully`);
  return redirect('/');
  } catch (error) {
    toast.error("Failed to submit the form.Please try again");
    return null;
  }
  
}

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
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
      <button type='submit' className='btn btn-block' style={{marginTop: '0.5rem'}} disabled={isSubmitting}>
        {isSubmitting ? 'submitting': 'submit'}
      </button>
    </Form >
  )
}

export default Newsletter;