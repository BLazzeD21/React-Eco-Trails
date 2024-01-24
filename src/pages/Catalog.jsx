import React from 'react';
import Container from '../components/Container/Container.jsx';
import CustomCard from '../components/CustomCard/CustomCard.jsx';
import Sectiontitle from '../components/UI/SectionTitle/SectionTitle.jsx';
import Input from '../components/UI/Input/Input.jsx';
import { usePoints } from '../hooks/usePoints.jsx';


const Catalog = () => {
  const [SearchText, FiltredPoints, setSearchText] = usePoints();

  return (
    <div className="catalog__wrapper">
      <Container>
        <div className="catalog">
          <div className="catalog__title">
            <Sectiontitle>Каталог</Sectiontitle>
          </div>
          <div className="catalog__search">
            <Input
              placeholder='Введите название...'
              value={SearchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </div>
          <div className="catalog__cards">
            {FiltredPoints.map((point) => (
              <CustomCard key={point.id} point={point}/>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
