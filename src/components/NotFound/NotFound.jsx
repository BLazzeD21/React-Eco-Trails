import React from 'react';

const NotFound = () => {
  const output = 'Упс! Что-то пошло не так :(\n\nПо вашему запросу ничего не найдено';

  return (
    <h1 className='notFount'>
      {output}
    </h1>);
};

export default NotFound;
