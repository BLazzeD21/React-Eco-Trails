import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Container from '../Container/Container.jsx';
import Title from '../UI/Title/Title.jsx';
import logo from '/public/images/logo.png';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  const sections = [
    { id: 1, title: 'Главная', url: '/' },
    { id: 2, title: 'Каталог', url: '/catalog' },
    { id: 3, title: 'Эко-карта', url: '/map' },
  ];

  return (
    <header className='header__wrapper'>
      <Container>
        <div className='header'>
          <Link to={'/'}>
            <div className='header__inner'>
              <img className='header__logo'src={logo} alt="Logo" />
              <Title className='header__title'>
                {title}
              </Title>
            </div>
          </Link>
          <Navbar sections={ sections }/>
        </div>
      </Container>
    </header>
  );
};

export default Header;
