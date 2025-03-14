import React, { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { login } from './store/slices/authSlice';
import { Routes } from './routes';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      dispatch(login({ token, rememberMe: true }));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;