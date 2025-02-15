import React from 'react';

const Newsletter = () => {
  return (
    <form className='form'>
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
    </form >
  )
}

export default Newsletter;