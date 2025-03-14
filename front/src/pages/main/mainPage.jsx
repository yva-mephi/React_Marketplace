import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import Header from '../../components/header/header';
import styles from './mainPage.module.scss';
import MainControls from '../../components/mainControls';
import ItemsList from '../../components/items/itemsList';

const MainPage = () => {
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    const [sortType, setSortType] = useState('price_asc');
    const [filterType, setFilterType] = useState('all');
    const [showMyAds, setShowMyAds] = useState(false); // Состояние для отображения "Мои объявления"

    const handleSortChange = (sortType) => {
        setSortType(sortType);
        console.log('Сортировка:', sortType);
    };

    const handleFilterChange = (filterType) => {
        setFilterType(filterType);
        setShowMyAds(false); // Сбрасываем фильтр "Мои объявления" при выборе другого фильтра
        console.log('Фильтр:', filterType);
    };

    const handleMyAdsClick = () => {
        setShowMyAds(!showMyAds); // Переключаем состояние "Мои объявления"
        console.log('Мои объявления:', !showMyAds);
    };

    const handleCreateAd = () => {
        console.log('Создание объявления');
    };

    return (
        <div className={styles.container} data-theme={isDarkMode ? 'dark' : 'light'}>
            <header>
                <Header isDarkMode={isDarkMode} />
            </header>
            <main>
                <MainControls
                    onSortChange={handleSortChange}
                    onFilterChange={handleFilterChange}
                    onMyAdsClick={handleMyAdsClick}
                    onCreateAd={handleCreateAd}
                />
                <ItemsList sortType={sortType} filterType={filterType} showMyAds={showMyAds} />
            </main>
        </div>
    );
};

export default MainPage;