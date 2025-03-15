import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './itemCard.module.scss';
import { useAppSelector } from '../../store/hooks';

import realEstateIcon from '../../assets/icons/real_estate.svg';
import carIcon from '../../assets/icons/car.svg';
import serviceIcon from '../../assets/icons/service.svg';
import heartIcon from '../../assets/icons/dark/favorite.svg';
import deleteIconLight from '../../assets/icons/light/delete.svg';
import editIconLight from '../../assets/icons/light/edit.svg';

const ItemCard = ({ id, name, description, location, type, isOwner, photos }) => {
    const [hovered, setHovered] = useState(false);
    const theme = useAppSelector((state) => state.theme.isDarkMode);
    const navigate = useNavigate();

    // Иконки для типов объявлений
    const typeIcons = {
        Недвижимость: realEstateIcon,
        Авто: carIcon,
        Услуги: serviceIcon,
    };

    // Переход на страницу деталей
    const handleDetailsClick = () => {
        navigate(`/details/${id}`);
    };

    // Используем первое изображение из массива photos или заглушку
    const imageUrl = photos?.[0] || typeIcons[type];

    return (
        <div className={`${styles.card} ${theme}`}>
            <div
                className={styles.imageContainer}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={handleDetailsClick}
            >
                <img
                    src={imageUrl}
                    alt={name}
                    className={`${styles.image} ${hovered ? styles.hovered : ''}`}
                />
                {hovered && (
                    <div className={styles.overlay}>
                        <h3>{type}</h3>
                        <p>{description}</p>
                    </div>
                )}
                {isOwner && hovered && (
                    <div className={styles.ownerButtons}>
                        <button className={styles.editButton}>
                            <img src={editIconLight} alt="Редактировать" />
                        </button>
                        <button className={styles.deleteButton}>
                            <img src={deleteIconLight} alt="Удалить" />
                        </button>
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <h2 onClick={handleDetailsClick}>{name}</h2>
                <p>{location}</p>

                <div className={styles.buttons}>
                    <button className={styles.cartButton}>Добавить в корзину</button>
                    <button className={styles.favoriteButton}>
                        <img src={heartIcon} alt="Избранное" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;