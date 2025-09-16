const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const carousel = document.querySelector('.carousel');

leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -260, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 260, behavior: 'smooth' });
});
