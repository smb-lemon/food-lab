import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import '../index.css';

const Searchform = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <Form className='form' onSubmit={handleSubmit}>
      <input
        type="text"
        className='form-input'
        placeholder="Search for recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className='btn'>Search</button>
    </Form>
  );
};

export default Searchform;
