// Ждем, пока загрузится весь документ
document.addEventListener('DOMContentLoaded', function() {

    // 1. Находим нужные элементы на странице
    const addBtn = document.getElementById('add-btn'); // Наша кнопка "+"
    const bottomSheet = document.getElementById('bottom-sheet'); // Сама шторка
    const overlay = document.getElementById('menu-overlay'); // Фон-затемнение

    // 2. ФУНКЦИЯ: Показать шторку
    function showMenu() {
        bottomSheet.classList.add('active'); // Выплывает меню
        overlay.classList.add('active'); // Затемняется фон
    }

    // 3. ФУНКЦИЯ: Скрыть шторку
    function hideMenu() {
        bottomSheet.classList.remove('active'); // Прячется меню
        overlay.classList.remove('active'); // Убирается затемнение
    }

    // 4. ДОБАВЛЯЕМ ДЕЙСТВИЕ: При клике на "+"
    if (addBtn) {
        addBtn.addEventListener('click', function() {
            // Если меню скрыто — показываем. И наоборот.
            if (bottomSheet.classList.contains('active')) {
                hideMenu();
            } else {
                showMenu();
            }
        });
    }

    // 5. ДОБАВЛЯЕМ ДЕЙСТВИЕ: Закрыть меню при клике на черный фон
    if (overlay) {
        overlay.addEventListener('click', hideMenu);
    }
});

// Скрывается меню
const menuOverlay = document.getElementById('menuOverlay'); // Твое первое меню
const docOverlay = document.getElementById('reserveOverlay'); // Вторая страница (документ)
const openDocBtn = document.getElementById('openDocBtn'); // Кнопка "Переглянути документ"

openDocBtn.addEventListener('click', () => {
    // 1. Прячем первое меню (или делаем прозрачным)
    menuOverlay.style.display = 'none';

    // 2. Показываем вторую страницу
    docOverlay.style.display = 'flex';
});