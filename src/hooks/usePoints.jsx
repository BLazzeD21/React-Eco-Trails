
import React, { useMemo, useState } from 'react';
import { ecotrailPoints } from '../store/points.js';

export const usePoints = (SearchText, setSearchText) => {
  const [FilteredPoints, setFilteredPoints] = useState([]);

  useMemo(() => {
    const sorted = ecotrailPoints.filter((point) =>
      point.name.toLowerCase().includes(SearchText.toLowerCase()),
    );

    setFilteredPoints(sorted);
  }
  , [SearchText]);

  return [SearchText, FilteredPoints, setSearchText];
};
