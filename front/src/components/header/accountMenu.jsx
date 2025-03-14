import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { handleLogout } from '../../utils/exit';
import styles from './accountMenu.module.scss';

import newsIconDark from '../../assets/icons/dark/news.svg';
import newsIconLight from '../../assets/icons/light/news.svg';

const AccountMenu = ({ onClose }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const newsIcon = isDarkMode ? newsIconLight : newsIconDark;

    const handleAuthAction = (mode) => {
        navigate('/auth', { state: { mode } });
        onClose();
    };

    const handleLogoutClick = () => {
        handleLogout(dispatch);
        onClose();
    };

    return (
        <div className={styles.accountMenu}>
            {!isLoggedIn ? (
                <>
                    <button className={styles.menuItem} onClick={() => handleAuthAction('register')}>
                        Регистрация
                    </button>
                    <button className={styles.menuItem} onClick={() => handleAuthAction('login')}>
                        Вход
                    </button>
                </>
            ) : (
                <>
                    <img src={newsIcon} alt="Новости" className={styles.newsIcon} />
                    <button className={styles.menuItem}>Настройки</button>
                    <button className={styles.menuItem}>Обращения</button>
                    <button className={styles.menuItem} onClick={handleLogoutClick}>
                        Выйти
                    </button>
                </>
            )}
        </div>
    );
};

export default AccountMenu;