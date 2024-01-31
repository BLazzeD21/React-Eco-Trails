import React, { Fragment } from 'react';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';

import Navbar from '../Navbar/Navbar.jsx';
import Container from '../Container/Container.jsx';
import Title from '../UI/Title/Title.jsx';
import logo from '/public/images/logo.png';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import Menu from '../BurgerMenu/Menu.jsx';

const Header = ({ title }) => {
  const mobile = useMediaQuery('screen and (max-width: 767px)');

  const sections = [
    { id: 1, title: 'Главная', url: '/' },
    { id: 2, title: 'Каталог', url: '/catalog' },
    { id: 3, title: 'Эко-карта', url: '/map' },
  ];

  const [opened, { toggle }] = useDisclosure();

  return (
    <Fragment>
      <div className='header__wrapper'>
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
            {
              mobile ?
              <BurgerMenu opened={opened} toggle={toggle}/> :
              <Navbar sections={ sections }/>
            }
          </div>
        </Container>
      </div>
      {
        mobile ?
        <Menu sections={sections} opened={opened} toggle={toggle}/> :
        ''
      }
    </Fragment>
  );
};

export default Header;
