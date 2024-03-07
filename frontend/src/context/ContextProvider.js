import React, { createContext, useState, useContext } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [currentMode, setCurrentMode] = useState('Light');

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  return (
    <StateContext.Provider value={{ isLoggedIn, activeSidebar, currentMode, setIsLoggedIn, setActiveSidebar, setMode }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  return useContext(StateContext);
};