const overlay = document.getElementById('reserveOverlay');
const sheet = document.querySelector('.reserve-sheet');
const handle = document.querySelector('.sheet-handle');

let startY = 0;
let currentY = 0;
let isDragging = false;

// Открытие (для теста, если у вас уже есть логика вызова — оставьте свою)
function openReserveSheet() {
    overlay.style.display = 'flex';
    sheet.style.transform = 'translateY(0)';
}

// Закрытие
function closeReserveSheet() {
    sheet.style.transform = 'translateY(100%)';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300); // время совпадает с transition в CSS
}

// Начало касания
sheet.addEventListener('touchstart', (e) => {
    // Если скролл внутри контента не в самом верху, не активируем свайп на закрытие
    if (sheet.scrollTop > 0) return;

    startY = e.touches[0].clientY;
    isDragging = true;
    sheet.style.transition = 'none'; // Убираем анимацию при движении пальца
});

// Движение пальца
sheet.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;

    // Если тянем вниз
    if (deltaY > 0) {
        e.preventDefault(); // Запрещаем стандартный скролл страницы
        sheet.style.transform = `translateY(${deltaY}px)`;
    }
});

// Конец касания
sheet.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;

    const deltaY = currentY - startY;
    sheet.style.transition = 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)';

    // Порог закрытия: 150 пикселей
    if (deltaY > 150) {
        closeReserveSheet();
    } else {
        // Возвращаем обратно, если протянули мало
        sheet.style.transform = 'translateY(0)';
    }

    // Сброс координат
    startY = 0;
    currentY = 0;
});

// Закрытие при клике на темный фон
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeReserveSheet();
});