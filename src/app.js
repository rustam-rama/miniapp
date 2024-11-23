// src/app.js
import { getRandomColor } from './utils';

function initApp() {
    // Создаем кнопку
    const button = document.createElement('button');
    button.className = 'button';
    button.textContent = 'Изменить цвет страницы';
    document.body.appendChild(button);

    // Добавляем обработчик события
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });
}

export default initApp;