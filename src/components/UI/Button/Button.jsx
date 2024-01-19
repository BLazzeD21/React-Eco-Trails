import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ children, to }) => {
  const navigate = useNavigate();
  return (
    <button onClick={()=> {
      navigate(to);
    }}
    className='custom_button'>
      {children.toUpperCase()}
    </button>
  );
};

export default Button;
