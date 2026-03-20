 function setUpdateTime() {
    const now = new Date();

    // Получаем часы и минуты, добавляем 0 спереди, если число меньше 10
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    // Получаем день, месяц и год
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы в JS идут от 0 до 11
    const year = now.getFullYear();

    // Формируем строку как на скриншоте
    const timeString = `${hours}:${minutes}`;
    const dateString = `${day}.${month}.${year}`;
    const fullMessage = `Документ оновлено о ${timeString} | ${dateString} • `;

    // Вставляем текст в оба блока для бесшовной анимации
    document.getElementById('update-text-2').innerText = fullMessage;
}

    // Запускаем функцию при загрузке страницы
    window.onload = setUpdateTime;