// src/App.jsx
import React from 'react';
import { Routes } from './routes';
import { useAppSelector } from './store/hooks';

function App() {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div className="App" data-theme={isDarkMode ? 'dark' : 'light'}>
      <Routes />
    </div>
  );
}

export default App;