# Архитектура проекта: Сайт рекламного агентства
## Обзор системы

Система состоит из двух независимых проектов в монорепозитории:
1. website - клиентское SPA для пользователей агентства
2. ui-library - библиотека переиспользуемых UI-компонентов

### Структура проектов
1. Основное приложение (website)
```
website/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   ├── ServiceCalculator/
│   │   ├── TestimonialSlider/
│   │   ├── SimpleForm/
│   │   └── PortfolioCase/
│   │         ├── PortfolioCase.tsx
│   │         ├── PortfolioCase.css
│   │         ├── PortfolioCase.test.tsx
│   │         └── index.ts
│   ├── pages/
│   │   ├── Home/
│   │   ├── Services/
│   │   ├── ServiceDetails/
│   │   ├── Portfolio/
│   │   ├── About/
│   │   └── Contacts/
│   ├── data/
│   │   ├── services.json
│   │   ├── portfolio.json
│   │   └── testimonials.json
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tsconfig.json
└── eslint.config.js
```

2. Библиотека UI-компонентов (ui-library)
```
ui-library/
├── src/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── Button.module.css
│   ├── Input/
│   │   ├── Input.tsx
│   │   └── Input.module.css
│   ├── Card/
│   │   ├── Card.tsx
│   │   └── Card.module.css
│   ├── Modal/
│   │   ├── Modal.tsx
│   │   └── Modal.module.css
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   └── index.ts
├── package.json
├── vite.config.ts
├── tsconfig.json
├── jest.config.js
└── eslint.config.js
```

### Технологический стек

#### Runtime зависимости
```
react	^18.3.1	UI библиотека
react-dom	^18.3.1	Рендеринг React
react-router-dom	^6.8.0	Маршрутизация между страницами
ui-library	*	Локальные UI-компоненты
react-hook-form	^7.43.5	Управление формами
```
#### Dev зависимости
```
typescript	~5.9.3	Статическая типизация
vite	^4.5.14	Сборщик и dev-сервер
eslint	^8.57.1	Линтинг кода
jest	^29.7.0	Тестирование
```
#### Компоненты UI-библиотеки
```
Button	Универсальная кнопка с вариантами стилей
Input	Поле ввода с валидацией
Card	Контейнер для контента услуг и портфолио
Modal	Модальное окно для форм
Header	Навигационная панель с меню
Footer	Нижний колонтитул с контактами
```
### Структура роутинга
Основное приложение
```
/
├── /services
│   ├── /:serviceId
├── /portfolio
├── /about
└── /contacts
```
### Хранение данных
Данные хранятся в локальных JSON-файлах в папке src/data/. Состояние управляется через React hooks (useState). Все данные статические и редактируются напрямую в JSON-файлах.