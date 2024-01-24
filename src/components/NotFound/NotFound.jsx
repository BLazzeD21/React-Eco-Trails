import React from 'react';

const NotFound = () => {
  const output = 'Упс! Что-то пошло не так :(\n\nПо вашему запросу ничего не найдено';

  return (
    <h1 style={
      { marginTop: '25%',
        textAlign: 'center',
        fontWeight: '200',
        fontSize: '32px',
        whiteSpace: 'pre-line',
      }
    }>
      {output}
    </h1>);
};

export default NotFound;
