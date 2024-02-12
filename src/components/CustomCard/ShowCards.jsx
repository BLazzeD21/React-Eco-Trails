import React from 'react';
import CustomCard from './CustomCard.jsx';
import NotFound from '../NotFound/NotFound.jsx';

const ShowCards = ({ points }) => {
  if (!points || points.length === 0) {
    return <NotFound></NotFound>;
  }

  return (
    <div className="catalog__cards">
      {points.map((point) => (
        <CustomCard
          key={point.id}
          point={point}
        />
      ))}
    </div>
  );
};

export default ShowCards;
