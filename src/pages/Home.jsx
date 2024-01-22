import React from 'react';
import Container from '../components/Container/Container.jsx';
import TitleTypeAnimation from
  '../components/UI/TitleTypeAnimation/TitleTypeAnimation.jsx';
import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel.jsx';
import { ecotrailNames } from '../store/points.js';
import Button from '../components/UI/Button/Button.jsx';

const Home = () => {
  const OPTIONS = { containScroll: 'trimSnaps' };
  const SLIDE_COUNT = 11;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className='home__wrapper'>
      <Container>
        <div className="home">
          <TitleTypeAnimation
            ecotrailNames={ecotrailNames}
            delay={1000}
            speed={25}
          />
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
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
