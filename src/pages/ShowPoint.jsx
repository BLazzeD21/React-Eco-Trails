import React from 'react';
import { useParams } from 'react-router-dom';
import { ecotrailPoints } from '../store/points.js';
import Container from '../components/Container/Container.jsx';
import Title from '../components/UI/Title/Title.jsx';
import imageByIndex from '../store/imageByIndex';

const ShowPoint = () => {
  const { id } = useParams();
  const pointId = id - 1;

  const { name,
    description,
    infrastructure,
    services,
    address,
    coordinates } = ecotrailPoints[pointId];

  const image = imageByIndex(pointId);

  return (
    <div className="point__wrapper">
      <Container>
        <div className="point">
          <Title className={'point__title'}>{name}</Title>
          <div className="point__img">
            <img src={image} alt={name} />
          </div>
          <p className="point__descr">
            {description}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ShowPoint;
