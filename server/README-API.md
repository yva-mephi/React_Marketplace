# API для управления объявлениями

## Начало работы

1. Установка зависимостей

   ```bash
   npm install
   ```

2. Запуск сервера

   ```bash
   npm start
   ```

Сервер будет запущен на порту 3000 или на порту, указанном в переменной окружения `PORT`

## Конечные точки API

### Создание объявления

- **Метод:** `POST /items`
- **Ожидает:**
  - **Тело запроса:** JSON объект с данными объявления.
    - Общие поля:
      - `name` (string, обязательное): Название объявления.
      - `description` (string, обязательное): Описание объявления.
      - `location` (string, обязательное): Локация объявления.
      - `type` (string, обязательное): Тип объявления. Возможные значения: "Недвижимость", "Авто", "Услуги".
    - Дополнительные поля в зависимости от `type`:
      - **Недвижимость:**
        - `propertyType` (string, обязательное): Тип недвижимости.
        - `area` (number, обязательное): Площадь в квадратных метрах.
        - `rooms` (number, обязательное): Количество комнат.
        - `price` (number, обязательное): Цена в рублях.
      - **Авто:**
        - `brand` (string, обязательное): Марка автомобиля.
        - `model` (string, обязательное): Модель автомобиля.
        - `year` (number, обязательное): Год выпуска.
        - `mileage` (number, опциональное): Пробег в километрах.
      - **Услуги:**
        - `serviceType` (string, обязательное): Тип услуги.
        - `experience` (number, обязательное): Опыт работы в годах.
        - `cost` (number, обязательное): Стоимость услуги в рублях.
        - `workSchedule` (string, опциональное): График работы.

**Примеры тела запроса:**

- **Недвижимость:**

  ```json
  {
    "name": "Квартира в центре",
    "description": "Просторная квартира в центре города",
    "location": "Москва",
    "type": "Недвижимость",
    "propertyType": "Квартира",
    "area": 100,
    "rooms": 3,
    "price": 15000000
  }
  ```

- **Авто:**

  ```json
  {
    "name": "Toyota Camry",
    "description": "Надежный автомобиль",
    "location": "Москва",
    "type": "Авто",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2020,
    "mileage": 15000
  }
  ```

- **Услуги:**
  ```json
  {
    "name": "Ремонт квартир",
    "description": "Качественный ремонт квартир",
    "location": "Москва",
    "type": "Услуги",
    "serviceType": "Ремонт",
    "experience": 5,
    "cost": 50000,
    "workSchedule": "Пн-Пт, 9:00-18:00"
  }
  ```

**Возвращает:**

- **JSON объект:** Созданное объявление с уникальным `id`.

```json
{
  "id": 1,
  "name": "Квартира в центре",
  "description": "Просторная квартира в центре города",
  "location": "Москва",
  "type": "Недвижимость",
  "propertyType": "Квартира",
  "area": 100,
  "rooms": 3,
  "price": 15000000
}
```

### Получение всех объявлений

- **Метод:** `GET /items`
- **Возвращает:**
  - **Массив JSON объектов:** Все объявления.

### Получение объявления по ID

- **Метод:** `GET /items/:id`
- **Возвращает:**
  - **JSON объект:** Объявление, если найдено.
  - **Сообщение об ошибке:** Если объявление не найдено.

### Обновление объявления по ID

- **Метод:** `PUT /items/:id`
- **Ожидает:**
  - **Тело запроса:** JSON объект с обновленными данными объявления.
- **Возвращает:**
  - **JSON объект:** Обновленное объявление, если найдено.
  - **Сообщение об ошибке:** Если объявление не найдено.

### Удаление объявления по ID

- **Метод:** `DELETE /items/:id`
- **Возвращает:**
  - **Статус 204:** При успешном удалении.
  - **Сообщение об ошибке:** Если объявление не найдено.
