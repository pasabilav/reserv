// Находим новые элементы
const viewDocItem = document.querySelector('.sheet-item'); // Первая кнопка в шторке "Переглянути"
const fullDocPage = document.getElementById('full-doc-page');
const closeDocBtn = document.getElementById('close-doc-btn');

// Открыть детальную страницу
if (viewDocItem) {
    viewDocItem.addEventListener('click', function(e) {
        e.preventDefault();
        fullDocPage.classList.add('active');
        hideMenu(); // Скрываем шторку (функция из прошлого шага)
    });
}

// Закрыть страницу (кнопка назад)
if (closeDocBtn) {
    closeDocBtn.addEventListener('click', function() {
        fullDocPage.classList.remove('active');
    });
}