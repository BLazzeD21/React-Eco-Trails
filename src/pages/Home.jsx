import React from 'react';
import Container from '../components/Container/Container.jsx';
import TitleTypeAnimation from
  '../components/UI/TitleTypeAnimation/TitleTypeAnimation.jsx';
import CustomCarousel from '../components/CustomCarousel/CustomCarousel.jsx';
import { ecotrailNames } from '../store/points.js';
import Button from '../components/UI/Button/Button.jsx';
import { images } from '../store/imageByIndex.js';

const Home = () => {
  return (
    <div className='home__wrapper'>
      <Container>
        <div className="home">
          <TitleTypeAnimation
            ecotrailNames={ecotrailNames}
            delay={1000}
            speed={25}
          />
          <CustomCarousel images={images}/>
          <div className="home__btns">
            <Button to={'/catalog'}>Каталог</Button>
            <Button to={'/map'}>ЭКО-карта</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
