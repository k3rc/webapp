document.querySelectorAll('nav ul li').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    const section = document.getElementById(link.dataset.section);
    if (section) section.classList.add('active');
  });
});
