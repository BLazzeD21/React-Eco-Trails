import React from 'react';
import { Burger } from '@mantine/core';

const BurgerMenu = ({ opened, toggle }) => {
  return (
    <Burger
      color='white'
      opened={opened}
      onClick={toggle}
      aria-label="Toggle navigation"
    />
  );
};

export default BurgerMenu;
