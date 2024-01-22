import React from 'react';
import Container from '../components/Container/Container.jsx';
import TitleTypeAnimation from
  '../components/UI/TitleTypeAnimation/TitleTypeAnimation.jsx';

const Home = () => {
  return (
    <div className='home__wrapper'>
      <Container>
        <div className="home">
          <TitleTypeAnimation />
        </div>
      </Container>
    </div>
  );
};

export default Home;
