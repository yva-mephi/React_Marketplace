import React, { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { login } from './store/slices/authSlice';
import { Routes } from './routes';
import Cookies from 'js-cookie';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = Cookies.get('authToken');
    const userData = Cookies.get('user');

    let user = null;
    if (userData) {
      try {
        user = JSON.parse(userData);
      } catch (error) {
        console.error('Ошибка при парсинге данных пользователя:', error);
        Cookies.remove('user');
      }
    }

    if (token && user) {
      dispatch(login({ token, rememberMe: true, user }));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;