import React from 'react';
import Container from '../components/Container/Container.jsx';
import TitleTypeAnimation from
  '../components/UI/TitleTypeAnimation/TitleTypeAnimation.jsx';
import EmblaCarousel from '../components/EmblaCarousel/EmblaCarousel.jsx';
import { ecotrailNames } from '../store/points.js';
import Button from '../components/UI/Button/Button.jsx';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

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
            <Button onClick={() => {
              navigate('/catalog');
              window.scrollTo(0, 0);
            }}>Каталог</Button>
            <Button onClick={() => {
              navigate('/map');
              window.scrollTo(0, 0);
            }}>ЭКО-карта</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

