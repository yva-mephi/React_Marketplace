import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleLogin, handleRegister } from '../../utils/authLogic';
import AuthToggle from './authToggle';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import styles from './authForm.module.scss';

const AuthForm = ({ isDarkMode }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (data) => {
        setError('');
        if (isLogin) {
            handleLogin(data, dispatch, navigate, setError);
        } else {
            handleRegister(data, dispatch, navigate, setError);
        }
    };

    return (
        <div className={`${styles.authContainer} ${isDarkMode ? styles.dark : ''}`}>
            <AuthToggle isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
            {error && <div className={styles.errorMessage}>{error}</div>}
            {isLogin ? (
                <LoginForm
                    onSubmit={handleSubmit}
                    rememberMe={rememberMe}
                    onRememberChange={setRememberMe}
                />
            ) : (
                <RegisterForm onSubmit={handleSubmit} />
            )}
        </div>
    );
};

export default AuthForm;