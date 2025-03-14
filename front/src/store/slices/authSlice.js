import { createSlice } from '@reduxjs/toolkit';

const loadInitialState = () => {
    const userData = localStorage.getItem('user');
    const rememberMe = localStorage.getItem('rememberMe') === 'true';

    let user = null;
    if (userData && rememberMe) {
        try {
            user = JSON.parse(userData);
        } catch (error) {
            console.error('Ошибка при парсинге данных пользователя:', error);
            localStorage.removeItem('user');
        }
    }

    return {
        isLoggedIn: !!user,
        token: user ? 'fake-token' : null,
        user: user || null,
        rememberMe: rememberMe || false,
    };
};

const authSlice = createSlice({
    name: 'auth',
    initialState: loadInitialState(),
    reducers: {
        login: (state, action) => {
            const { token, user, rememberMe } = action.payload;

            if (!user || (user.id !== 0 && !user.id) || !user.email) {
                console.error('Некорректные данные пользователя:', user);
                return;
            }

            state.isLoggedIn = true;
            state.token = token;
            state.user = { id: user.id, email: user.email };
            state.rememberMe = rememberMe;

            if (rememberMe) {
                localStorage.setItem('user', JSON.stringify({ id: user.id, email: user.email }));
                localStorage.setItem('rememberMe', 'true');
            } else {
                localStorage.removeItem('user');
                localStorage.removeItem('rememberMe');
            }
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            state.user = null;
            state.rememberMe = false;

            localStorage.removeItem('user');
            localStorage.removeItem('rememberMe');
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;