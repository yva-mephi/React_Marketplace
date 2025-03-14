import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchItems } from '../../utils/itemService';
import ItemCard from './itemCard';
import styles from './itemsList.module.scss';

const ItemsList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const currentUser = useSelector((state) => state.auth.user); // Получаем текущего пользователя

    useEffect(() => {
        const loadItems = async () => {
            try {
                const data = await fetchItems(currentUser.id);
                setItems(data);
            } catch (err) {
                setError('Ошибка при загрузке объявлений');
            } finally {
                setLoading(false);
            }
        };

        loadItems();
    }, [currentUser]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <div className={styles.list}>
            {items.map((item) => (
                <ItemCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    location={item.location}
                    type={item.type}
                    isOwner={item.isOwner}
                />
            ))}
        </div>
    );
};

export default ItemsList;