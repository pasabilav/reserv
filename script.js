//  function setUpdateTime() {
//     const now = new Date();
//
//     // Получаем часы и минуты, добавляем 0 спереди, если число меньше 10
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//
//     // Получаем день, месяц и год
//     const day = String(now.getDate()).padStart(2, '0');
//     const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы в JS идут от 0 до 11
//     const year = now.getFullYear();
//
//     // Формируем строку как на скриншоте
//     const timeString = `${hours}:${minutes}`;
//     const dateString = `${day}.${month}.${year}`;
//     const fullMessage = `Документ оновлено о ${timeString} | ${dateString} • `;
//
//     // Вставляем текст в оба блока для бесшовной анимации
//     document.getElementById('update-text-2').innerText = fullMessage;
// }
//
//     // Запускаем функцию при загрузке страницы
//     window.onload = setUpdateTime;

function initMarquee() {
    const container = document.getElementById('marquee-container');
    const textElement = container.querySelector('.update-text');

    // 1. Твой произвольный текст
    const customText = "• Документ оновлено о 10:10 | 10.03.2026";

    // 2. Получаем текущее время и дату
    const now = new Date();
    const timeStr = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    const dateStr = now.toLocaleDateString('uk-UA');

    // Формируем финальную строку: Сначала твой текст, потом дата
    // \u00A0 — это неразрывный пробел, чтобы текст не слипался
    const fullText = `${customText} • Документ оновлено о ${timeStr} | ${dateStr} •\u00A0\u00A0\u00A0\u00A0`;

    // 3. Устанавливаем текст
    textElement.innerText = fullText;

    // 4. Клонируем содержимое для эффекта бесконечности
    // Важно: делаем это ПОСЛЕ того, как вставили текст
    const content = container.querySelector('.marquee-content');
    const clone = content.cloneNode(true);
    container.appendChild(clone);

    // 5. Запускаем анимацию (15s — скорость, можно менять)
    container.style.animation = "scroll-infinite 20s linear infinite";
}

document.addEventListener('DOMContentLoaded', initMarquee);

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', initMarquee);