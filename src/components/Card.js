import React from 'react';

export default function Card({ id, name, email }) {
  return (
    <div>
      <img alt='robot' src={`https://robohash.org/${id}?size=100x100`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
