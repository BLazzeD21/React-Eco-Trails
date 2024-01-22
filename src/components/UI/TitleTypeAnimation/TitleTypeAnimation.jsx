import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TitleTypeAnimation = ({ ecotrailNames, delay, speed }) => {
  const titles = [];

  ecotrailNames.forEach((point) => {
    titles.push(point, delay);
  });

  return (
    <TypeAnimation
      sequence={titles}
      wrapper="div"
      speed={speed}
      repeat={Infinity}
      className={'home__title'}
    />
  );
};

export default TitleTypeAnimation;
