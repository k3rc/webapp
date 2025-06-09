// Upload file
function uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Uploaded:", data.filename);
        loadTracks();
    });
}

// Load track list
function loadTracks() {
    fetch("http://localhost:8000/tracks")
        .then(response => response.json())
        .then(data => {
            const playlist = document.getElementById("playlist");
            playlist.innerHTML = "";

            data.tracks.forEach(track => {
                const li = document.createElement("li");
                li.innerHTML = `
                    🎵 ${track}
                    <audio controls src="http://localhost:8000/track/${track}" style="width: 100%; margin-top: 5px;"></audio>
                `;
                playlist.appendChild(li);
            });
        });
}

// Init
document.addEventListener("DOMContentLoaded", () => {
    loadTracks();

    document.getElementById("fileInput").addEventListener("change", (e) => {
        uploadFile(e.target.files[0]);
    });
});
