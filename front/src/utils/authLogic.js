import { userAPI } from '../api/userAPI';
import { login } from '../store/slices/authSlice';

export const handleLogin = async (data, dispatch, navigate, setError) => {
    try {
        const user = await userAPI.getUserByEmail(data.email);
        console.log('Пользователь:', user);

        if (!user || !user.email) {
            setError('Неверный email или пароль');
            return;
        }

        if (user.password === data.password) {
            dispatch(login({
                token: 'fake-token',
                rememberMe: data.rememberMe,
                user: { id: user.id, email: user.email },
            }));
            navigate('/');
        } else {
            setError('Неверный email или пароль');
        }
    } catch (err) {
        setError('Неверный email или пароль');
    }
};

export const handleRegister = async (data, dispatch, navigate, setError) => {
    try {
        const newUser = await userAPI.registerUser({
            name: data.name,
            email: data.email,
            password: data.password,
        });

        if (!newUser || !newUser.id || !newUser.email) {
            setError('Ошибка при регистрации');
            return;
        }

        dispatch(login({
            token: 'fake-token',
            rememberMe: false,
            user: { id: newUser.id, email: newUser.email },
        }));
        navigate('/');
    } catch (err) {
        setError(err.message || 'Ошибка при регистрации');
    }
};