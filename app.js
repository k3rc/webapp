document.getElementById('recommend-btn').addEventListener('click', async () => {
    const response = await fetch('https://ТВОЙ-BACKEND-URL/api/recommend?track_id=1');
    const data = await response.json();
    document.getElementById('recommendations').innerText = 
        'Recommended tracks: ' + data.recommended_tracks.join(', ');
});
