const ItemTypes = {
    REAL_ESTATE: 'Недвижимость',
    AUTO: 'Авто',
    SERVICES: 'Услуги',
};

const makeCounter = () => {
    let count = 0;
    return () => count++;
};

const itemsIdCounter = makeCounter();

const init = [
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Квартира в центре",
        description: "Уютная квартира в центре города с прекрасным видом.",
        location: "Москва",
        photos: ["https://salon.ru/storage/thumbs/gallery/631/630382/835_3500_s265.jpg"],
        type: ItemTypes.REAL_ESTATE,
        propertyType: "Квартира",
        area: 55,
        rooms: 2,
        price: 7500000
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Toyota Camry 2020",
        description: "Автомобиль в отличном состоянии, без ДТП.",
        location: "Санкт-Петербург",
        photos: ["https://d8a6a33f-3369-444b-9b5f-793c13ff0708.selcdn.net/uploads/projects/toyota_tradedealer/uploads/images/mob-1_tcm-3020-2215376.jpg"],
        type: ItemTypes.AUTO,
        brand: "Toyota",
        model: "Camry",
        year: 2020,
        mileage: 45000
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Ремонт квартир",
        description: "Качественный ремонт квартир под ключ.",
        location: "Екатеринбург",
        photos: ["https://static.tildacdn.com/tild3038-3463-4466-b137-356634386561/nBkSUhL2hFYjm86_IL6B.jpg"],
        type: ItemTypes.SERVICES,
        serviceType: "Ремонт",
        experience: 5,
        cost: 50000,
        schedule: "Пн-Пт, 9:00-18:00"
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Апартаменты",
        description: "Уютные апартаменты",
        location: "Москва",
        photos: ["https://www.palladaran.ru/uploads/images/apartamenty-v-gostinice.jpg"],
        type: ItemTypes.REAL_ESTATE,
        propertyType: "Апартаменты",
        area: 55,
        rooms: 2,
        price: 7500000
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Nissan Qashqai",
        description: "Автомобиль в отличном состоянии, без ДТП.",
        location: "Москва",
        photos: ["https://kia.irbis-auto.ru/uploads/auto_catalog/910x/photo/1507/4079771/orig/fdbac0e64d78026eac4c959e5eb39fd4.jpg"],
        type: ItemTypes.AUTO,
        brand: "Nissan",
        model: "Qashqai",
        year: 2020,
        mileage: 45000
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Уборка квартир",
        description: "Полная уборка квартиры",
        location: "Екатеринбург",
        photos: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqCU3fcLbsO3pvBEKhUUIUMlyCmZp4aDHdPg&s"],
        type: ItemTypes.SERVICES,
        serviceType: "Уборка",
        experience: 5,
        cost: 5000,
        schedule: "Пн-Пт, 9:00-18:00"
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Дом за городом",
        description: "Двухэтажный частный дом с огородом",
        location: "Московская область",
        photos: ["https://www.ccnova.ru/images/blog/kak-pravilno-razmestit-dom-na-uchastke/organizacija-dvora-v-chastnom-dome.jpeg"],
        type: ItemTypes.REAL_ESTATE,
        propertyType: "Дом",
        area: 100,
        rooms: 2,
        price: 20500000
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Renault Kaptur",
        description: "Автомобиль в отличном состоянии, без ДТП.",
        location: "Санкт-Петербург",
        photos: ["https://s.auto.drom.ru/i24207/c/photos/fullsize/renault/kaptur/renault_kaptur_690855.jpg"],
        type: ItemTypes.AUTO,
        brand: "Renault",
        model: "Kaptur",
        year: 2020,
        mileage: 50000
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Сантехник",
        description: "Быстрое решение проблемы",
        location: "Санкт-Петербург",
        photos: ["https://www.santehnik24.pro/cache-image/x/b/1-4c118fceb458d7feb59fd8bf79a762c9.jpg"],
        type: ItemTypes.SERVICES,
        serviceType: "Сантехник",
        experience: 7,
        cost: 6000,
        schedule: "Пн-Пт, 9:00-18:00"
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Квартира",
        description: "Уютная квартира на окраине города с прекрасным видом на завод.",
        location: "Москва",
        photos: ["https://salon.ru/storage/thumbs/gallery/496/495192/835_3500_s291.jpg"],
        type: ItemTypes.REAL_ESTATE,
        propertyType: "Квартира",
        area: 55,
        rooms: 2,
        price: 6500000
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Mercedes E Class",
        description: "Автомобиль в отличном состоянии, без ДТП.",
        location: "Москва",
        photos: ["https://cdn5.vedomosti.ru/image/2016/24/w7p1y/original-15qy.jpg"],
        type: ItemTypes.AUTO,
        brand: "Mercedes",
        model: "E Class",
        year: 2020,
        mileage: 90000
    },
    {
        id: itemsIdCounter(),
        user_id: 0,
        name: "Дезинсекция",
        description: "Быстро убираем нежелаемых соседей",
        location: "Екатеринбург",
        photos: ["https://lh5.googleusercontent.com/proxy/K3Cw8ZujGFMdlhnRPxSuXGY801hoYLjM47xPtlT08XRKyrbq0XG70bxtL-q7Gl1pm1YGAjRR3ifbcGzsaEn1Zkq6pxPHZmUuT2aHgSTGsLc"],
        type: ItemTypes.SERVICES,
        serviceType: "Дезинсекция",
        experience: 5,
        cost: 10000,
        schedule: "Пн-Пт, 9:00-18:00"
    }
]

const usersIdCounter = makeCounter();

const users = [
    {
        id: usersIdCounter(),
        name: "Иван Иванов",
        email: "ivan@example.com",
        password: "password123" // В реальном приложении пароль должен быть хэширован!
    }
];

module.exports = { ItemTypes, itemsIdCounter, init, usersIdCounter, users };
