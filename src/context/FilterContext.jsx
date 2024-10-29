import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    unitType: '',
    community: '',
    country: '',
  });

  return (
    <FilterContext.Provider value={[selectedFilters, setSelectedFilters]}>
      {children}
    </FilterContext.Provider>
  );
};