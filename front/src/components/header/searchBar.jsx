// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './searchBar.module.scss';

// Импортируем иконку поиска
import searchIconDark from '../../assets/icons/dark/search.svg';
import searchIconLight from '../../assets/icons/light/search.svg';

const SearchBar = () => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    const searchIcon = isDarkMode ? searchIconDark : searchIconLight;
    const [isFocused, setIsFocused] = useState(false);

    const handleSearch = () => {
        // Логика для обработки поиска
        console.log('Поиск выполнен');
    };

    return (
        <div className={`${styles.searchBar} ${isFocused ? styles.focused : ''}`}>
            <input
                type="text"
                placeholder="Поиск..."
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <button className={styles.searchButton} onClick={handleSearch}>
                <img src={searchIcon} alt="Search" />
            </button>
        </div>
    );
};

export default SearchBar;