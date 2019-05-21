import React from 'react';

export default function Search({ searchChange }) {
  return (
    <div className='search'>
      <input
        type='search'
        placeholder='Who are you looking for?'
        aria-label='search'
        onChange={searchChange}
      />
    </div>
  );
}
