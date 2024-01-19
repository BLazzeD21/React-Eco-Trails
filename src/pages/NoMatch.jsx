import React from 'react';
import Container from '../components/Container/Container.jsx';
import Button from '../components/UI/Button/Button.jsx';

const NoMatch = () => {
  return (
    <div className='noMatch__wrapper'>
      <Container>
        <div className='noMatch'>
          <h2 className='noMatch__error'>404</h2>
          <div className='noMatch__title'>СТРАНИЦА НЕ НАЙДЕНА</div>
          <div className='noMatch__descr'>
            Извините, страница, которую вы ищете, не существует
          </div>
        </div>
        <div className="noMatch__btn">
          <Button to={'/'}>На главную</Button>
        </div>
      </Container>
    </div>

  );
};

export default NoMatch;
