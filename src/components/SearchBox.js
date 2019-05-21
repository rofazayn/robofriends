import React from 'react';

export default function SearchBox({ searchChange }) {
  return (
    <div>
      <input
        placeholder='Search for...'
        aria-label='search'
        onChange={searchChange}
      />
    </div>
  );
}
