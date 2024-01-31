import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ sections, opened, toggle }) => {
  return (
    <div className={opened ? 'menu menu__active' : 'menu'}>
      <div className='menu__list'>
        {sections.map((section) => (
          <div key={section.id} className='menu__item'>
            <NavLink
              to={section.url}
              onClick={toggle}
              className={
                ({ isActive, isPending }) =>
                isPending ? 'pending_item' :
                isActive ? 'active_item' : ''
              }
            >
              {section.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
