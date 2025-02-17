import React from 'react';
import { Form, useNavigation } from 'react-router-dom';

const Searchform = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'searching...';
  return (
    <div>
        <Form className='form'>
            <input type='search' name='search' className='form-input' defaultValue='burger' />
            <button className='btn' type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'searching...' : 'search'}
            </button>
        </Form>
    </div>
  )
}

export default Searchform;