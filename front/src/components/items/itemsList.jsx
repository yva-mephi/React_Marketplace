import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchItems } from '../../utils/itemService';
import ItemCard from './itemCard';
import styles from './itemsList.module.scss';

const ItemsList = ({ sortType, filterType, showMyAds }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const currentUser = useSelector((state) => state.auth.user);

    useEffect(() => {
        const loadItems = async () => {
            try {
                const data = await fetchItems(currentUser?.id || null);
                setItems(data);
            } catch (err) {
                setError('Ошибка при загрузке объявлений');
            } finally {
                setLoading(false);
            }
        };

        loadItems();
    }, [currentUser]);

    // Фильтрация товаров
    const filteredItems = items.filter((item) => {
        if (showMyAds) {
            return item.user_id === currentUser?.id;
        }
        if (filterType === 'all') return true;
        return item.type === filterType;
    });

    // Сортировка товаров
    const sortedItems = filteredItems.sort((a, b) => {
        if (sortType === 'price_asc') return a.price - b.price;
        if (sortType === 'price_desc') return b.price - a.price;
        return 0;
    });

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <div className={styles.list}>
            {sortedItems.map((item) => (
                <ItemCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    location={item.location}
                    type={item.type}
                    isOwner={item.user_id === currentUser?.id}
                    photos={item.photos} // Передаем массив photos
                />
            ))}
        </div>
    );
};

export default ItemsList;