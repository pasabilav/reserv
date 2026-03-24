function initAllMarquees() {
    // 1. Получаем время и дату
    const now = new Date();
    const timeStr = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    const dateStr = now.toLocaleDateString('uk-UA');
    const fullText = `Документ оновлено о ${timeStr} | ${dateStr} •\u00A0\u00A0`;

    // 2. Находим ВСЕ блоки бегущей строки
    const wrappers = document.querySelectorAll('.marquee-wrapper');

    wrappers.forEach(wrapper => {
        // Очищаем старое содержимое (на случай перезапуска)
        wrapper.innerHTML = '';

        // 3. Создаем первый блок с текстом
        const content = document.createElement('div');
        content.className = 'marquee-content';
        content.innerHTML = `<span class="update-text">${fullText}${fullText}</span>`;

        wrapper.appendChild(content);

        // 4. Клонируем его для бесшовности
        const clone = content.cloneNode(true);
        wrapper.appendChild(clone);

        // 5. Принудительно запускаем анимацию через JS
        wrapper.style.display = "flex";
        wrapper.style.width = "max-content";
        wrapper.style.animation = "scroll-infinite 25s linear infinite";
    });
}

// Запуск после полной загрузки страницы
window.addEventListener('load', initAllMarquees);