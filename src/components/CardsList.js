import React from 'react';
import Card from './Card';

export default function CardsList({ robots }) {
  const cardsArray = robots.map((robot, i) => {
    return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />;
  });
  return <div>{cardsArray}</div>;
}
