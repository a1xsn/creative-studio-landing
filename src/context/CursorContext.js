import React, {useState, useEffect, createContext} from 'react';

export const cursorContext = createContext();

const CursorProvider = ({children}) => {
  return (
    <CursorContext.Provider value={'this is a cursor context'}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
