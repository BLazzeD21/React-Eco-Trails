import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ecotrailPoints } from '../store/points.js';
import Container from '../components/Container/Container.jsx';
import Title from '../components/UI/Title/Title.jsx';
import imageByIndex from '../store/imageByIndex';
import Button from '../components/UI/Button/Button.jsx';
import NoMatch from '../pages/NoMatch.jsx';


const ShowPoint = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const pointId = id - 1;

  if (!ecotrailPoints[pointId]) {
    return (<NoMatch></NoMatch>);
  }

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
            <Button onClick={() => {
              navigate('/catalog', { state:
                { searchQueue: localStorage.searchQueue },
              });
              window.scrollTo(0, 0);
            }}>Назад</Button>
            <Button onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}>Главная</Button>
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
            </p>
          </div>
          <div className="point__coordinates">
            <b>Координаты</b>
            <br />
            {`[${coordinates[0]}, ${coordinates[1]}]`}
          </div>
        </div>
        <div className="point__route">
          <a href={`https://yandex.ru/maps/?rtext=~${coordinates[0]}%2C${coordinates[1]}`} target="_blank" rel="noreferrer">
            <button className="point__btn">
              Построить маршрут
            </button>
          </a>
        </div>
      </Container>
    </div>
  );
};

export default ShowPoint;
