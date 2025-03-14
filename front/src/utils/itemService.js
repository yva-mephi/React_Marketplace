import { itemAPI } from '../api/itemAPI';

export const fetchItems = async (currentUserId) => {
    try {
        const items = await itemAPI.getAllItems();
        console.log('Товары:', items);
        console.log('Текущий пользователь ID:', currentUserId);

        return items.map((item) => ({
            ...item,
            isOwner: currentUserId === item.user_id,
        }));
    } catch (error) {
        console.error('Ошибка при загрузке товаров:', error);
        throw error;
    }
};