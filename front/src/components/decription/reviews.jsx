import React, { useState } from 'react';
import styles from './reviews.module.scss';

const Reviews = ({ reviews, onAddReview }) => {
    const [newReview, setNewReview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.trim()) {
            onAddReview(newReview);
            setNewReview('');
        }
    };

    return (
        <div className={styles.reviews}>
            <h2>Отзывы</h2>
            <ul className={styles.reviewsList}>
                {reviews.map((review, index) => (
                    <li key={index} className={styles.reviewItem}>
                        <p>{review}</p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className={styles.reviewForm}>
                <textarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Оставьте ваш отзыв..."
                    required
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default Reviews;