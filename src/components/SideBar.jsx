import React from 'react';
import { categories } from '../utils/categories';

const SideBar = ({ selected, setSelected }) => {
  return (
    <div className='d-flex flex-md-column position-fixed p-2 bg-black overflow-scroll scroll'>
      {categories.map((category) => (
        <div>
          <button
            type='button'
            key={category.name}
            className='btn btn-black-danger d-flex mb-3 gap-4 rounded-4 fw-bold'
            style={{
              background: category.name === selected && '#FC1500',
              width: '10rem',
            }}
            onClick={() => setSelected(category.name)}
          >
            <i
              style={{
                color: category.name === selected ? '#ffffff' : '#FC1500',
              }}
              className={`${category.icon}`}
            ></i>
            <span className='text-light'>{category.name}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
