import React from 'react';
import { useAppSelector } from '../../store/hooks';
import AuthForm from '../../components/auth/authForm';
import Header from '../../components/header/header';
import styles from './authPage.module.scss';

const AuthPage = () => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    return (
        <div className={styles.container} data-theme={isDarkMode ? 'dark' : 'light'}>
            <Header />
            <div className={styles.content}>
                <AuthForm isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};

export default AuthPage;