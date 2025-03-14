import { createSlice } from '@reduxjs/toolkit';

const loadInitialState = () => {
    const token = localStorage.getItem('authToken');
    return {
        isLoggedIn: !!token,
        token: token || null,
    };
};

const authSlice = createSlice({
    name: 'auth',
    initialState: loadInitialState(),
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload;
            if (action.payload.rememberMe) {
                localStorage.setItem('authToken', action.payload.token);
            }
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            localStorage.removeItem('authToken');
        }
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;