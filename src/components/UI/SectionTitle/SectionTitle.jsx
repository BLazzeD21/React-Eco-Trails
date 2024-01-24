import React from 'react';

const SectionTitle = ({ children }) => {
  const title = children.toUpperCase();

  return (
    <div className="sectionTitle__wrapper">
      <h1 className="sectionTitle">{title}</h1>
    </div>
  );
};

export default SectionTitle;
