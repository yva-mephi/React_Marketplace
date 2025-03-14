export const validateForm = (formData, isLogin) => {
    const errors = {};

    if (!formData.email) {
        errors.email = 'Поле Email обязательно для заполнения';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Некорректный формат Email';
    }

    if (!formData.password) {
        errors.password = 'Поле Пароль обязательно для заполнения';
    } else if (formData.password.length < 6) {
        errors.password = 'Пароль должен содержать не менее 6 символов';
    }

    if (!isLogin) {
        if (!formData.name) {
            errors.name = 'Поле Имя обязательно для заполнения';
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Подтвердите пароль';
        } else if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = 'Пароли не совпадают';
        }
    }

    return errors;
};