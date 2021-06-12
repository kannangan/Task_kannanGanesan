import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const event = window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    });
    return () => window.removeEventListener('resize', event);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isTablet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
