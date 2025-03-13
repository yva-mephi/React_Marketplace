// src/components/AccountMenu.jsx
import React from 'react';
import styles from './AccountMenu.module.scss';
import { useAppSelector } from '../../store/hooks';

import newsIconDark from '../../assets/icons/dark/news.svg';
import newsIconLight from '../../assets/icons/light/news.svg';

const AccountMenu = ({ onClose }) => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const newsIcon = isDarkMode ? newsIconLight : newsIconDark;

    return (
        <div className={styles.accountMenu}>
            {!isLoggedIn && (
                <>
                    <button className={styles.menuItem}>Регистрация</button>
                    <button className={styles.menuItem}>Вход</button>
                </>
            )}
            {isLoggedIn && (
                <>
                    <button className={styles.menuItem}>Настройки</button>
                    <button className={styles.menuItem}>Обращения</button>
                    < img src={newsIcon} alt="Новости" className={styles.newsIcon} />
                </>
            )}
        </div>
    );
};

export default AccountMenu;