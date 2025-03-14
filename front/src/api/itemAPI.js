class ItemAPI {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    // Получение всех объявлений
    async getAllItems() {
        const response = await fetch(`${this.baseUrl}/items`);

        if (!response.ok) {
            throw new Error('Ошибка при получении объявлений');
        }

        return response.json();
    }

    // Получение объявления по его id
    async getItemById(itemId) {
        const response = await fetch(`${this.baseUrl}/items/${itemId}`);

        if (!response.ok) {
            throw new Error('Объявление не найдено');
        }

        return response.json();
    }

    // Создание нового объявления
    async createItem(itemData) {
        const response = await fetch(`${this.baseUrl}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Ошибка при создании объявления');
        }

        return response.json();
    }

    // Обновление объявления по его id
    async updateItem(itemId, itemData) {
        const response = await fetch(`${this.baseUrl}/items/${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData),
        });

        if (!response.ok) {
            throw new Error('Ошибка при обновлении объявления');
        }

        return response.json();
    }

    // Удаление объявления по его id
    async deleteItem(itemId) {
        const response = await fetch(`${this.baseUrl}/items/${itemId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Ошибка при удалении объявления');
        }

        return response.status === 204 ? null : response.json();
    }
}

// Экспортируем экземпляр API с базовым URL
export const itemAPI = new ItemAPI('http://localhost:3001');