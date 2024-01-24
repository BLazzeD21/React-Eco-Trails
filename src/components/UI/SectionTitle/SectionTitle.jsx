import React from 'react';

const SectionTitle = ({ children }) => {
  const title = children.toUpperCase();

  return (
    <div className="sectionTitle__wrapper">
      <div className="sectionTitle">{title}</div>
    </div>
  );
};

export default SectionTitle;
