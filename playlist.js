const playlistData = [
  { title: "Cyberwave Dreams", artist: "Neon Vibes" },
  { title: "Eclipse Runner", artist: "Synth Master" },
  { title: "Nocturne Lights", artist: "DJ Shadow" },
  { title: "Deep Space Groove", artist: "Astral Beats" },
  { title: "Retro Pulse", artist: "Laserhawk" }
];

const playlistElement = document.getElementById("playlist");

playlistData.forEach(track => {
  const li = document.createElement("li");
  li.textContent = `🎵 ${track.title} - ${track.artist}`;
  playlistElement.appendChild(li);
});
