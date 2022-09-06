import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { logo } from '../utils/categories';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg bg-black d-flex justify-content-between top-0 position-sticky w-100'
      style={{ paddingRight: '5rem', paddingLeft: '2rem' }}
    >
      <>
        <Link to='/'>
          <img
            style={{
              height: '5rem',
            }}
            src={logo}
            alt='logo'
          />
        </Link>
        <SearchBar />
      </>
    </nav>
  );
};

export default Navbar;
