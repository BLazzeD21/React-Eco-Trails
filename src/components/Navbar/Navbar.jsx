import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ sections }) => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
        {sections.map((section) => (
          <li key={section.id} className='navbar__item'>
            <NavLink
              to={section.url}
              className={
                ({ isActive, isPending }) =>
                isPending ? 'pending_page' : isActive ? 'active_page' : ''
              }
            >
              {section.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
