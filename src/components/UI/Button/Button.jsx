import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick}
      className='custom_button'>
      {children.toUpperCase()}
    </button>
  );
};

export default Button;
