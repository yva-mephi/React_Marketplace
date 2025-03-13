// src/pages/main/mainPage.jsx
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import Header from '../../components/header/header';
import styles from './mainPage.module.scss';

const MainPage = () => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

    return (
        <div className={styles.container} data-theme={isDarkMode ? 'dark' : 'light'}>
            <Header isDarkMode={isDarkMode} />
            <main>
                <nav>
                    <ul>
                        <li>
                            <a href="/items">Перейти к списку товаров</a>
                        </li>
                        <li>
                            <a href="/create">Создать товар</a>
                        </li>
                        <li>
                            <a href="/auth">Авторизация</a>
                        </li>
                    </ul>
                </nav>
            </main>
            <h1>Главная страница</h1>
            <p>Добро пожаловать на наш сайт!</p>
        </div>
    );
};

export default MainPage;