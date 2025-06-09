// Загрузка и проигрывание треков
function uploadFile(file) {
  const form = new FormData();
  form.append("file", file);

  fetch("http://localhost:8000/upload", {
    method: "POST",
    body: form
  })
  .then(res=>res.json())
  .then(_=> loadTracks());
}

function loadTracks() {
  fetch("http://localhost:8000/tracks")
    .then(res=>res.json())
    .then(data=>{
      const ul = document.getElementById("playlist");
      ul.innerHTML = "";
      data.tracks.forEach(t=>{
        const li = document.createElement("li");
        li.innerHTML = `🎵 ${t}
          <audio controls src="http://localhost:8000/track/${t}"></audio>`;
        ul.appendChild(li);
      });
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
  loadTracks();
  document.getElementById("fileInput")
    .addEventListener("change", e=>uploadFile(e.target.files[0]));
});
