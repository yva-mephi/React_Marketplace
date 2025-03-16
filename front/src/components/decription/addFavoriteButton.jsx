import React from 'react';
import styles from './addFavoriteButton.module.scss';

const AddFavoriteButton = ({ isFavorite, onToggle }) => {
    return (
        <div className={styles.bookmarkCheckbox}>
            <input
                className={styles.bookmarkCheckbox__input}
                id="bookmark-toggle"
                type="checkbox"
                checked={isFavorite}
                onChange={onToggle}
            />
            <label className={styles.bookmarkCheckbox__label} htmlFor="bookmark-toggle">
                <svg viewBox="0 0 24 24" className={styles.bookmarkCheckbox__icon}>
                    <defs>
                        <linearGradient y2="100%" x2="100%" y1="0%" x1="0%" id="gradientFill">
                            <stop style={{ stopColor: '#ff5a5f', stopOpacity: 1 }} offset="0%"></stop>
                            <stop style={{ stopColor: '#ff9a44', stopOpacity: 1 }} offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <path
                        fill={isFavorite ? 'url(#gradientFill)' : 'none'}
                        d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                        className={styles.bookmarkCheckbox__iconBack}
                    ></path>
                    <path
                        d="M8 11l3 3 5-5"
                        className={styles.bookmarkCheckbox__iconCheck}
                    ></path>
                </svg>
            </label>
        </div>
    );
};

export default AddFavoriteButton;