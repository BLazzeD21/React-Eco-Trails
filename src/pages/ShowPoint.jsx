import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { ecotrailPoints } from '../store/points.js';
import Container from '../components/Container/Container.jsx';
import Title from '../components/UI/Title/Title.jsx';
import imageByIndex from '../store/imageByIndex';
import Button from '../components/UI/Button/Button.jsx';

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
          <div className="point__btns">
            <Button to={-1}>Назад</Button>
            <Button to={'/'}>Главная</Button>
          </div>
          <Title className={'point__title'}>{name}</Title>
          <div className="point__img">
            <img src={image} alt={name} />
          </div>
          <div className="point__descr">
            <p>{description}</p>
          </div>
          {services ? ( <div className="point__services">
            <p>
              <b>Услуги: </b>{services}
            </p>
          </div>) : ''}
          {infrastructure ? ( <div className="point__infrastructure">
            <p>
              <b>Инфраструктура: </b>{infrastructure}
            </p>
          </div>) : ''}
          <div className="point__address">
            <p>
              <b>Адрес: </b>{address}
              <br />
              <b>Координаты: </b>{`[${coordinates[0]}, ${coordinates[1]}]`}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShowPoint;
