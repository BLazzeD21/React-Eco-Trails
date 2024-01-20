import React from 'react';
import Container from '../Container/Container.jsx';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer__wrapper">
      <Container>
        <div className='footer'>
          <div className='footer__title'>
            © Экотропы Ленобласти, {currentYear}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
