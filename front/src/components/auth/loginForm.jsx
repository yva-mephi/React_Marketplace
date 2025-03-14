import React, { useState } from 'react';
import { validateForm } from '../../utils/checkAuth';
import styles from './authForm.module.scss';

const LoginForm = ({ onSubmit, rememberMe, onRememberChange }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData, true); // true — это флаг isLogin
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        onSubmit({ ...formData, rememberMe });
    };

    return (
        <form className={styles.authForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                {errors.password && <span className={styles.error}>{errors.password}</span>}
            </div>

            <div className={styles.formGroup}>
                <label>
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => onRememberChange(e.target.checked)}
                    />
                    Запомнить меня
                </label>
            </div>

            <button type="submit">Вход</button>
        </form>
    );
};

export default LoginForm;