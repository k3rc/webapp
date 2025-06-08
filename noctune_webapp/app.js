// Автопрокрутка карусели
const carouselTrack = document.querySelector('.carousel-track');
let scrollAmount = 0;
setInterval(() => {
    scrollAmount += 2;
    if (scrollAmount > carouselTrack.scrollWidth - carouselTrack.clientWidth) {
        scrollAmount = 0;
    }
    carouselTrack.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}, 50);

// Плеер Play/Pause
const player = document.querySelector('.player');
const trackTitle = document.querySelector('.track-title');
let playing = false;

player.addEventListener('click', () => {
    playing = !playing;
    if (playing) {
        trackTitle.textContent = '▶️ Playing: Mind Lose';
    } else {
        trackTitle.textContent = '⏸️ Paused: Mind Lose';
    }
});
