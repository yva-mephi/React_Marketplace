class UserAPI {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    // Регистрация нового пользователя
    async registerUser(userData) {
        const response = await fetch(`${this.baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Ошибка при регистрации пользователя');
        }

        return response.json();
    }

    // Получение пользователя по email
    async getUserByEmail(email) {
        const response = await fetch(`${this.baseUrl}/users/${email}`);

        if (!response.ok) {
            throw new Error('Пользователь не найден');
        }

        return response.json();
    }

    // Получение всех объявлений пользователя по его id
    async getUserItems(userId) {
        const response = await fetch(`${this.baseUrl}/users/${userId}/items`);

        if (!response.ok) {
            throw new Error('Ошибка при получении объявлений пользователя');
        }

        return response.json();
    }
}

// Экспортируем экземпляр API с базовым URL
export const userAPI = new UserAPI('http://localhost:3001');