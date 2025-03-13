// src/components/Header.jsx
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './header.module.scss';
import Logo from './logoText';
import SearchBar from './searchBar';
import HeaderMenu from './headerMenu';

const Header = () => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

    return (
        <header className={styles.header} data-theme={isDarkMode ? 'dark' : 'light'}>
            <Logo />
            <div className={styles.searchWrapper}>
                <SearchBar />
            </div>
            <HeaderMenu />
        </header>
    );
};

export default Header;