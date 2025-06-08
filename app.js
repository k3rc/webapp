document.querySelectorAll('.sidebar li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.sidebar li').forEach(li => {
            li.classList.remove('active-tab');
        });
        item.classList.add('active-tab');
        
        const tabName = item.getAttribute('data-tab');
        
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.remove('active');
        });
        
        document.getElementById(tabName).classList.add('active');
    });
});

let playing = false;
document.getElementById('play-btn').addEventListener('click', () => {
    playing = !playing;
    document.getElementById('play-btn').innerText = playing ? '⏸️' : '▶️';
});

document.querySelector('.add-playlist').addEventListener('click', () => {
    const playlistsList = document.getElementById('playlists-list');
    const newPlaylist = document.createElement('div');
    newPlaylist.className = 'track-card';
    newPlaylist.innerText = 'Новый плейлист ' + (playlistsList.children.length + 1);
    playlistsList.appendChild(newPlaylist);
});
