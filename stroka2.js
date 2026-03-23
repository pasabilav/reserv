// function initAllMarquees() {
//     // Получаем текущее время и дату один раз для всех строк
//     const now = new Date();
//     const timeStr = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
//     const dateStr = now.toLocaleDateString('uk-UA');
//
//     // Формируем текст
//     const fullMessage = `Документ оновлено о ${timeStr} | ${dateStr} •\u00A0\u00A0`;
//
//     // Находим все контейнеры (и на главной, и в Резерв ID)
//     const containers = document.querySelectorAll('.marquee-wrapper');
//
//     containers.forEach(container => {
//         const textElement = container.querySelector('.update-text');
//
//         if (textElement) {
//             // 1. Устанавливаем текст
//             textElement.innerText = fullMessage;
//
//             // 2. Очищаем контейнер от старых клонов (если вдруг функция вызвалась дважды)
//             const contents = container.querySelectorAll('.marquee-content');
//             if (contents.length > 1) {
//                 for (let i = 1; i < contents.length; i++) contents[i].remove();
//             }
//
//             // 3. Клонируем содержимое 3-4 раза, чтобы точно не было пустот при длинных экранах
//             const content = contents[0];
//             for (let i = 0; i < 3; i++) {
//                 container.appendChild(content.cloneNode(true));
//             }
//
//             // 4. Запускаем анимацию
//             container.style.animation = "scroll-infinite 20s linear infinite";
//         }
//     });
// }
//
// // Запуск при загрузке
// document.addEventListener('DOMContentLoaded', initAllMarquees);

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