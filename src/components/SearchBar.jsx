import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchId, setSearchId] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchId) {
      navigate(`/search/${searchId}`);
    }
    setSearchId('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='d-flex' role='search'>
        <input
          style={{ width: '20rem' }}
          className='form-control ps-4 me-2 rounded-4'
          type='search'
          aria-label='Search'
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <i className='bi bi-search position-absolute p-2'></i>
      </form>
    </>
  );
};

export default SearchBar;
