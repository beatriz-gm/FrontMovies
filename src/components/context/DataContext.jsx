import React, {createContext, useContext, useState} from 'react';

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [data, setData] = useState('');

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

function useData() {
  return useContext(DataContext);
}

export {DataProvider, useData};