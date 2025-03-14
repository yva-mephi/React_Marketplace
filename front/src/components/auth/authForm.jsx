import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/authSlice';
import AuthToggle from './authToggle';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import styles from './authForm.module.scss';

const AuthForm = ({ isDarkMode }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    const handleSubmit = (data) => {
        dispatch(login({
            token: 'fake-token',
            rememberMe: data.rememberMe
        }));
        navigate('/');
    };

    return (
        <div className={`${styles.authContainer} ${isDarkMode ? styles.dark : ''}`}>
            <AuthToggle isLogin={isLogin} onToggle={() => setIsLogin(!isLogin)} />
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