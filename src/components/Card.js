import React from 'react';

export default function Card({ id, name, email }) {
  return (
    <div>
      <img alt='Robot' src={`https://robohash.org/${id}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
