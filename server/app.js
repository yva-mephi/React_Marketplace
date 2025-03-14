const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { ItemTypes, itemsIdCounter, init, usersIdCounter, users } = require("./init");


const app = express();
app.use(bodyParser.json());
app.use(cors());


// In-memory хранилище для объявлений
let items = [...init]

// Регистрация нового пользователя
app.post('/users', (req, res) => {
    const { name, email, password } = req.body;

    // Проверка наличия обязательных полей
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Проверка, что пользователь с таким email уже не существует
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'User with this email already exists' });
    }

    const user = {
        id: usersIdCounter(),
        name,
        email,
        password // В реальном приложении пароль должен быть хэширован!
    };

    users.push(user);
    res.status(201).json(user);
});

// Получение пользователя по email
app.get('/users/:email', (req, res) => {
    const user = users.find(u => u.email === req.params.email);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// Создание нового объявления
app.post('/items', (req, res) => {
    const { name, description, location, type, user_id, ...rest } = req.body;

    // Validate common required fields
    if (!name || !description || !location || !type || !user_id) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = users.find(u => u.id === user_id);
    if (!user) {
        return res.status(400).json({ error: 'User not found' });
    }

    switch (type) {
        case ItemTypes.REAL_ESTATE:
            if (!rest.propertyType || !rest.area || !rest.rooms || !rest.price) {
                return res
                    .status(400)
                    .json({ error: 'Missing required fields for Real estate' });
            }
            break;
        case ItemTypes.AUTO:
            if (!rest.brand || !rest.model || !rest.year || !rest.mileage) {
                return res
                    .status(400)
                    .json({ error: 'Missing required fields for Auto' });
            }
            break;
        case ItemTypes.SERVICES:
            if (!rest.serviceType || !rest.experience || !rest.cost) {
                return res
                    .status(400)
                    .json({ error: 'Missing required fields for Services' });
            }
            break;
        default:
            return res.status(400).json({ error: 'Invalid type' });
    }

    const item = {
        id: itemsIdCounter(),
        user_id,
        name,
        description,
        location,
        type,
        ...rest,
    };

    items.push(item);
    res.status(201).json(item);
});

// Получение всех объявлений
app.get('/items', (req, res) => {
    res.json(items);
});

// Получение объявления по его id
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id, 10));
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Обновление объявления по его id
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id, 10));
    if (item) {
        Object.assign(item, req.body);
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Удаление объявления по его id
app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id, 10));
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Item not found');
    }
});

// Получение всех объявлений пользователя по его id
app.get('/users/:id/items', (req, res) => {
    const userItems = items.filter(i => i.user_id === parseInt(req.params.id, 10));
    res.json(userItems);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
