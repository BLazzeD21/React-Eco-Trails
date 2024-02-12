import { useState, useEffect } from 'react';
import { ecotrailPoints } from '../store/points.js';

export const usePoints = (setSearchParams) => {
  const [SearchText, setSearchText] = useState('');
  const [FilteredPoints, setFilteredPoints] = useState([]);

  useEffect(() => {
    const filtered = ecotrailPoints.filter((point) => {
      const searchTextLowerCase = SearchText.toLowerCase();
      const matchesSearch =
        point.name.toLowerCase().includes(searchTextLowerCase) ||
        point.shortName.toLowerCase().includes(searchTextLowerCase) ||
        point.address.toLowerCase().includes(searchTextLowerCase) ||
        point.id === Number(SearchText);
      return matchesSearch;
    });

    localStorage.searchQueue = SearchText;

    setFilteredPoints(filtered);

    setSearchParams({ search: SearchText });
  }, [SearchText, setSearchParams]);

  return [SearchText, FilteredPoints, setSearchText];
};
