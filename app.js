document.getElementById('recommend-btn').addEventListener('click', async () => {
    const response = await fetch('g4-production.up.railway.app');
    const data = await response.json();
    document.getElementById('recommendations').innerText = 
        'Recommended tracks: ' + data.recommended_tracks.join(', ');
});
