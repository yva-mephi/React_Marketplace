import { logout } from '../store/slices/authSlice';

export const handleLogout = (dispatch) => {
    dispatch(logout());
};