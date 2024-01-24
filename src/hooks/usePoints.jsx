
import React, { useMemo, useState } from 'react';
import { ecotrailPoints } from '../store/points.js';

export const usePoints = () => {
  const [SearchText, setSearchText] = useState('');
  const [FiltredPoints, setFiltredPoints] = useState([]);

  useMemo(() => {
    const sorted = ecotrailPoints.filter((point) =>
      point.name.toLowerCase().includes(SearchText.toLowerCase()),
    );

    setFiltredPoints(sorted);
  }
  , [SearchText]);

  return [SearchText, FiltredPoints, setSearchText];
};
