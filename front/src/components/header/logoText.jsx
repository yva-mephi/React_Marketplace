import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { useNavigate } from 'react-router-dom';
import styles from './logoText.module.scss';

import logo from '../../assets/logo.svg';

const Logo = () => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    const navigate = useNavigate(); // Хук для навигации

    const handleClick = () => {
        navigate('/'); // Переход на главную страницу
    };

    return (
        <div className={styles.logo} onClick={handleClick}>
            <img src={logo} alt="FireStore Logo" />
            <span className={isDarkMode ? styles.darkText : styles.lightText}>FireStore</span>
        </div>
    );
};

export default Logo;