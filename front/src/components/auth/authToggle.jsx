import React from 'react';
import styles from './authForm.module.scss';

const AuthToggle = ({ isLogin, onToggle }) => {
    return (
        <div className={styles.authToggleWrapper}>
            <input
                id="auth-switch"
                type="checkbox"
                checked={!isLogin}
                onChange={onToggle}
                className={styles.authSwitch}
            />
            <label htmlFor="auth-switch" className={styles.authToggle}>
                <div className={styles.names}>
                    <p className={isLogin ? styles.active : ''}>Войти</p>
                    <p className={!isLogin ? styles.active : ''}>Регистрация</p>
                </div>
                <div className={styles.toggle}></div>
            </label>
        </div>
    );
};

export default AuthToggle;