// Навигация по вкладкам с анимацией
document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
        // Убираем active-tab со всех
        document.querySelectorAll('.sidebar li').forEach(li => {
            li.classList.remove('active-tab');
        });
        item.classList.add('active-tab');
        
        const tabName = item.getAttribute('data-tab');
        
        // Скрываем все табы
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        // Показываем выбранный
        document.getElementById(tabName).classList.add('active');
    });
});

// Пример для плеера Play/Pause
let playing = false;
document.getElementById('play-btn').addEventListener('click', () => {
    playing = !playing;
    document.getElementById('play-btn').innerText = playing ? '⏸️' : '▶️';
    // Тут можно добавить реальное управление аудио
});

// Пример кнопки "Создать плейлист"
document.getElementById('create-playlist').addEventListener('click', () => {
    const playlistsList = document.getElementById('playlists-list');
    const newPlaylist = document.createElement('div');
    newPlaylist.innerText = 'Новый плейлист ' + (playlistsList.children.length + 1);
    playlistsList.appendChild(newPlaylist);
});
