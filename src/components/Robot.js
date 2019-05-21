import React from 'react';

export default function Robot({ id, name, email }) {
  return (
    <div className='robot'>
      <img alt='Robot' src={`https://robohash.org/${id}?size=200x200`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
