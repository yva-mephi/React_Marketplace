import React, { useState } from 'react';
import styles from './headerMenu.module.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import DarkModeModule from '../darkModeModule';
import AccountMenu from './accountMenu';
import { setNotifications } from '../../store/slices/notificationsSlice';

import deliverIconDark from '../../assets/icons/dark/deliver.svg';
import basketIconDark from '../../assets/icons/dark/basket.svg';
import favoriteIconDark from '../../assets/icons/dark/favorite.svg';
import accountIconDark from '../../assets/icons/dark/account.svg';

import deliverIconLight from '../../assets/icons/light/deliver.svg';
import basketIconLight from '../../assets/icons/light/basket.svg';
import favoriteIconLight from '../../assets/icons/light/favorite.svg';
import accountIconLight from '../../assets/icons/light/account.svg';

const HeaderMenu = () => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    const hasUnreadNotifications = useAppSelector(
        (state) => state.notifications.hasUnreadNotifications
    );
    const dispatch = useAppDispatch();
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

    // Выбираем иконки в зависимости от темы
    const deliverIcon = isDarkMode ? deliverIconLight : deliverIconDark;
    const basketIcon = isDarkMode ? basketIconLight : basketIconDark;
    const favoriteIcon = isDarkMode ? favoriteIconLight : favoriteIconDark;
    const accountIcon = isDarkMode ? accountIconLight : accountIconDark;

    const toggleAccountMenu = () => {
        setIsAccountMenuOpen(!isAccountMenuOpen);
    };

    return (
        <div className={styles.menu}>
            <div className={styles.iconWrapper}>
                <img src={deliverIcon} alt="Доставка" title="Доставка" />
                {hasUnreadNotifications && <span className={styles.notificationBadge} />}
            </div>
            <div className={styles.iconWrapper}>
                <img src={basketIcon} alt="Корзина" title="Корзина" />
                {hasUnreadNotifications && <span className={styles.notificationBadge} />}
            </div>
            <div className={styles.iconWrapper}>
                <img src={favoriteIcon} alt="Избранное" title="Избранное" />
                {hasUnreadNotifications && <span className={styles.notificationBadge} />}
            </div>
            <div className={styles.accountWrapper}>
                <div className={styles.iconWrapper}>
                    <img
                        src={accountIcon}
                        alt="Аккаунт"
                        title="Аккаунт"
                        onClick={toggleAccountMenu}
                    />
                    {hasUnreadNotifications && <span className={styles.notificationBadge} />}
                </div>
                {isAccountMenuOpen && <AccountMenu onClose={() => setIsAccountMenuOpen(false)} />}
            </div>
            <DarkModeModule className="toggle" />
        </div>
    );
};

export default HeaderMenu;