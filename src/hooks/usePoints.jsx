import { useState, useEffect } from 'react';
import { ecotrailPoints } from '../store/points.js';

export const usePoints = (setSearchParams) => {
  const [SearchText, setSearchText] = useState('');
  const [FilteredPoints, setFilteredPoints] = useState([]);

  useEffect(() => {
    const sorted = ecotrailPoints.filter(
        (point) =>
          (point.name &&
          point.name.toLowerCase().includes(SearchText.toLowerCase())) ||
        (point.shortName &&
          point.shortName.toLowerCase().includes(SearchText.toLowerCase())) ||
        (point.address &&
          point.address.toLowerCase().includes(SearchText.toLowerCase())) ||
        (point.id && point.id === Number(SearchText)),
    );

    localStorage.searchQueue = SearchText;

    setFilteredPoints(sorted);
    setSearchParams({ search: SearchText });
  }, [SearchText, setSearchParams]);

  return [SearchText, FilteredPoints, setSearchText];
};
