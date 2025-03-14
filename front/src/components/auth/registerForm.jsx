import React, { useState } from 'react';
import { validateForm } from '../../utils/checkAuth';
import styles from './authForm.module.scss';

const RegisterForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: '',
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
        const validationErrors = validateForm(formData, false); // false — это флаг isLogin
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        onSubmit(formData);
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
                <label htmlFor="confirmPassword">Подтвердите пароль</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                />
                {errors.confirmPassword && (
                    <span className={styles.error}>{errors.confirmPassword}</span>
                )}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="name">Имя</label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>

            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegisterForm;