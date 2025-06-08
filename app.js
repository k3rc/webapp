// Навигация по вкладкам
document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
        const tabName = item.getAttribute('data-tab');
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(tabName).classList.add('active');
    });
});

// Пример кнопки Play
document.getElementById('play-btn').addEventListener('click', () => {
    alert('Play/Pause');
});
