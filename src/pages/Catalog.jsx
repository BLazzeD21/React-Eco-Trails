import React from 'react';
import Container from '../components/Container/Container.jsx';
import CustomCard from '../components/CustomCard/CustomCard.jsx';
import { ecotrailPoints } from '../store/points.js';
import Sectiontitle from '../components/UI/SectionTitle/SectionTitle.jsx';

const Catalog = () => {
  return (
    <div className="catalog__wrapper">
      <Container>
        <div className="catalog">
          <div className="catalog__title">
            <Sectiontitle>Каталог</Sectiontitle>
          </div>
          <div className="catalog__cards">
            {ecotrailPoints.map((point) => (
              <CustomCard key={point.id} point={point}/>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
