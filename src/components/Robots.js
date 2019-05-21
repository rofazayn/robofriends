import React from 'react';
import Robot from './Robot';

export default function Robots({ robots }) {
  const robotsArray = robots.map((robot, i) => {
    return (
      <Robot key={i} id={robot.id} name={robot.name} email={robot.email} />
    );
  });

  return <div className='robots'>{robotsArray}</div>;
}
