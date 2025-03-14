import React, { useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { useNavigate } from 'react-router-dom';
import styles from './mainControls.module.scss';

import createIconLight from '../assets/icons/light/create.svg';
import myAdsIconLight from '../assets/icons/light/my_ads.svg';

const MainControls = ({ onSortChange, onFilterChange, onMyAdsClick }) => {
    const [sortMenuOpen, setSortMenuOpen] = useState(false);
    const [filterMenuOpen, setFilterMenuOpen] = useState(false);
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
    const navigate = useNavigate();

    const handleSortClick = (sortType) => {
        onSortChange(sortType);
        setSortMenuOpen(false);
    };

    const handleFilterClick = (filterType) => {
        onFilterChange(filterType);
        setFilterMenuOpen(false);
    };

    const handleCreateAd = () => {
        navigate('/create');
    };

    const toggleSortMenu = () => {
        setSortMenuOpen(!sortMenuOpen);
        setFilterMenuOpen(false);
    };

    const toggleFilterMenu = () => {
        setFilterMenuOpen(!filterMenuOpen);
        setSortMenuOpen(false);
    };

    return (
        <div className={styles.controlsContainer}>
            {/* Кнопка сортировки */}
            <div className={styles.controlGroup}>
                <button
                    className={`${styles.controlButton} ${sortMenuOpen ? styles.active : ''}`}
                    onClick={toggleSortMenu}
                >
                    Сортировка
                    <span className={styles.arrow}>{sortMenuOpen ? '▲' : '▼'}</span>
                </button>
                {sortMenuOpen && (
                    <div className={`${styles.dropdownMenu}`}>
                        <button onClick={() => handleSortClick('price_asc')}>По возрастанию цены</button>
                        <button onClick={() => handleSortClick('price_desc')}>По убыванию цены</button>
                        <button onClick={() => handleSortClick('popularity')}>По популярности</button>
                        <button onClick={() => handleSortClick('rating')}>По рейтингу</button>
                    </div>
                )}
            </div>

            {/* Кнопка фильтрации по типу товара */}
            <div className={styles.controlGroup}>
                <button
                    className={`${styles.controlButton} ${filterMenuOpen ? styles.active : ''}`}
                    onClick={toggleFilterMenu}
                >
                    Вид товара
                    <span className={styles.arrow}>{filterMenuOpen ? '▲' : '▼'}</span>
                </button>
                {filterMenuOpen && (
                    <div className={`${styles.dropdownMenu}`}>
                        <button onClick={() => handleFilterClick('all')}>Все</button>
                        <button onClick={() => handleFilterClick('real_estate')}>Недвижимость</button>
                        <button onClick={() => handleFilterClick('auto')}>Авто</button>
                        <button onClick={() => handleFilterClick('services')}>Услуги</button>
                    </div>
                )}
            </div>

            {/* Кнопка "Мои объявления" */}
            {isLoggedIn && (
                <div className={styles.controlGroup}>
                    <button
                        className={styles.controlButton}
                        onClick={onMyAdsClick}
                    >
                        <img
                            src={myAdsIconLight}
                            alt="Мои объявления"
                            className={styles.myAdsIcon}
                        />
                        Мои объявления
                    </button>
                </div>
            )}

            {/* Кнопка создания объявления */}
            <div className={styles.controlGroup}>
                <button
                    className={styles.controlButton}
                    onClick={handleCreateAd}
                    disabled={!isLoggedIn}
                    title={!isLoggedIn ? 'Для создания объявления необходимо войти в систему' : ''}
                >
                    <img
                        src={createIconLight}
                        alt="Создать объявление"
                        className={styles.createIcon}
                    />
                    Создать объявление
                </button>
            </div>
        </div>
    );
};

export default MainControls;