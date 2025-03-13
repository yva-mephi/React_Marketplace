// src/store/slices/notificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hasUnreadNotifications: false, // По умолчанию уведомлений нет
};

const notificationsSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setNotifications: (state, action) => {
            state.hasUnreadNotifications = action.payload;
        },
    },
});

export const { setNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;