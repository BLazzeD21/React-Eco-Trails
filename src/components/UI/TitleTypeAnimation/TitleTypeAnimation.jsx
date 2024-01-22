import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ecotrailPoints from '../../../store/points';

const TitleTypeAnimation = () => {
  const titles = [];

  ecotrailPoints.forEach((point) => {
    titles.push(point.name, 1000);
  });

  return (
    <TypeAnimation
      sequence={titles}
      wrapper="div"
      speed={30}
      repeat={Infinity}
      className={'home__title'}
    />
  );
};

export default TitleTypeAnimation;
