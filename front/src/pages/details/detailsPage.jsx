import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { itemAPI } from '../../api/itemAPI';
import Header from '../../components/header/header';
import AddFavoriteButton from '../../components/decription/addFavoriteButton';
import Rating from '../../components/decription/rating';
import Reviews from '../../components/decription/reviews';
import styles from './detailsPage.module.scss';
import { useAppSelector } from '../../store/hooks';

const DetailsPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const [rating, setRating] = useState(Math.floor(Math.random() * 6)); // Рандомный рейтинг от 0 до 5
    const [reviews, setReviews] = useState([]);
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await itemAPI.getItemById(id);
                setItem(data);
            } catch (err) {
                setError('Ошибка при загрузке данных о товаре');
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const handleAddReview = (review) => {
        setReviews([...reviews, review]);
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!item) {
        return <div>Товар не найден</div>;
    }

    return (
        <div className={styles.container} data-theme={isDarkMode ? 'dark' : 'light'}>
            <header>
                <Header isDarkMode={isDarkMode} />
            </header>
            <main className={styles.detailsPage}>
                <div className={styles.imageContainer}>
                    <img
                        src={item.photos?.[0] || 'https://via.placeholder.com/600'}
                        alt={item.name}
                        className={styles.image}
                    />
                </div>
                <div className={styles.detailsContainer}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <p><strong>Локация:</strong> {item.location}</p>
                    <p><strong>Тип:</strong> {item.type}</p>

                    {/* Дополнительные поля в зависимости от типа товара */}
                    {item.type === 'Недвижимость' && (
                        <>
                            <p><strong>Тип недвижимости:</strong> {item.propertyType}</p>
                            <p><strong>Площадь:</strong> {item.area} м²</p>
                            <p><strong>Количество комнат:</strong> {item.rooms}</p>
                            <p><strong>Цена:</strong> {item.price} руб.</p>
                        </>
                    )}

                    {item.type === 'Авто' && (
                        <>
                            <p><strong>Марка:</strong> {item.brand}</p>
                            <p><strong>Модель:</strong> {item.model}</p>
                            <p><strong>Год выпуска:</strong> {item.year}</p>
                            {item.mileage && <p><strong>Пробег:</strong> {item.mileage} км</p>}
                        </>
                    )}

                    {item.type === 'Услуги' && (
                        <>
                            <p><strong>Тип услуги:</strong> {item.serviceType}</p>
                            <p><strong>Опыт работы:</strong> {item.experience} лет</p>
                            <p><strong>Стоимость:</strong> {item.cost} руб.</p>
                            {item.workSchedule && <p><strong>График работы:</strong> {item.workSchedule}</p>}
                        </>
                    )}

                    <div className={styles.actions}>
                        <Rating rating={rating} onRate={() => { }} />
                        <AddFavoriteButton isFavorite={isFavorite} onToggle={handleToggleFavorite} />
                        <button className={styles.orderButton}>Заказать</button>
                    </div>
                </div>
                <Reviews reviews={reviews} onAddReview={handleAddReview} />
            </main>
        </div>
    );
};

export default DetailsPage;