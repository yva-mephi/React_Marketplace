import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { itemAPI } from '../../api/itemAPI';
import Header from '../../components/header/header';
import styles from './createItemPage.module.scss';
import { useAppSelector } from '../../store/hooks';

const CreateItemPage = () => {
    const navigate = useNavigate();
    const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    const currentUser = useAppSelector((state) => state.auth.user);
    console.log(currentUser.id);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
        type: 'Недвижимость', // По умолчанию выбран тип "Недвижимость"
        propertyType: '',
        area: '',
        rooms: '',
        price: '',
        brand: '',
        model: '',
        year: '',
        mileage: '',
        serviceType: '',
        experience: '',
        cost: '',
        workSchedule: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const itemData = {
                name: formData.name,
                description: formData.description,
                location: formData.location,
                type: formData.type,
                user_id: currentUser.id,
                ...(formData.type === 'Недвижимость' && {
                    propertyType: formData.propertyType,
                    area: parseFloat(formData.area),
                    rooms: parseInt(formData.rooms),
                    price: parseFloat(formData.price),
                }),
                ...(formData.type === 'Авто' && {
                    brand: formData.brand,
                    model: formData.model,
                    year: parseInt(formData.year),
                    mileage: formData.mileage ? parseFloat(formData.mileage) : undefined,
                }),
                ...(formData.type === 'Услуги' && {
                    serviceType: formData.serviceType,
                    experience: parseInt(formData.experience),
                    cost: parseFloat(formData.cost),
                    workSchedule: formData.workSchedule || undefined,
                }),
            };

            await itemAPI.createItem(itemData);
            navigate('/');
        } catch (error) {
            console.error('Ошибка при создании объявления:', error);
        }
    };

    return (
        <div className={styles.container} data-theme={isDarkMode ? 'dark' : 'light'}>
            <header>
                <Header isDarkMode={isDarkMode} />
            </header>
            <main className={styles.createItemPage}>
                <h1>Создать объявление</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Название</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="description">Описание</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="location">Локация</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="type">Тип объявления</label>
                        <select
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                        >
                            <option value="Недвижимость">Недвижимость</option>
                            <option value="Авто">Авто</option>
                            <option value="Услуги">Услуги</option>
                        </select>
                    </div>

                    {/* Поля для недвижимости */}
                    {formData.type === 'Недвижимость' && (
                        <>
                            <div className={styles.formGroup}>
                                <label htmlFor="propertyType">Тип недвижимости</label>
                                <input
                                    type="text"
                                    id="propertyType"
                                    name="propertyType"
                                    value={formData.propertyType}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="area">Площадь (м²)</label>
                                <input
                                    type="number"
                                    id="area"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="rooms">Количество комнат</label>
                                <input
                                    type="number"
                                    id="rooms"
                                    name="rooms"
                                    value={formData.rooms}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="price">Цена (руб.)</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </>
                    )}

                    {/* Поля для авто */}
                    {formData.type === 'Авто' && (
                        <>
                            <div className={styles.formGroup}>
                                <label htmlFor="brand">Марка</label>
                                <input
                                    type="text"
                                    id="brand"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="model">Модель</label>
                                <input
                                    type="text"
                                    id="model"
                                    name="model"
                                    value={formData.model}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="year">Год выпуска</label>
                                <input
                                    type="number"
                                    id="year"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="mileage">Пробег (км)</label>
                                <input
                                    type="number"
                                    id="mileage"
                                    name="mileage"
                                    value={formData.mileage}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}

                    {/* Поля для услуг */}
                    {formData.type === 'Услуги' && (
                        <>
                            <div className={styles.formGroup}>
                                <label htmlFor="serviceType">Тип услуги</label>
                                <input
                                    type="text"
                                    id="serviceType"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="experience">Опыт работы (лет)</label>
                                <input
                                    type="number"
                                    id="experience"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="cost">Стоимость (руб.)</label>
                                <input
                                    type="number"
                                    id="cost"
                                    name="cost"
                                    value={formData.cost}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="workSchedule">График работы</label>
                                <input
                                    type="text"
                                    id="workSchedule"
                                    name="workSchedule"
                                    value={formData.workSchedule}
                                    onChange={handleChange}
                                />
                            </div>
                        </>
                    )}

                    <button type="submit" className={styles.submitButton}>
                        Опубликовать
                    </button>
                </form>
            </main>
        </div>
    );
};

export default CreateItemPage;