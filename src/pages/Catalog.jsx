import React, { useEffect } from 'react';
import Container from '../components/Container/Container.jsx';
import Sectiontitle from '../components/UI/SectionTitle/SectionTitle.jsx';
import Input from '../components/UI/Input/Input.jsx';
import { usePoints } from '../hooks/usePoints.jsx';
import ShowCards from '../components/CustomCard/ShowCards.jsx';
import { useLocation } from 'react-router-dom';


const Catalog = () => {
  const [SearchText,
    FilteredPoints,
    setSearchText,
  ] = usePoints();

  const location = useLocation();

  useEffect(()=> {
    if (location.state?.searchQueue) {
      setSearchText(location.state?.searchQueue);
    }
  }, []);


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
          <ShowCards points={FilteredPoints} />
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
