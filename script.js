const cardHeader = document.querySelector('.card-header');
const detailsBtn = document.querySelector('.details-button');
const cardImg = document.querySelector('.card-img');
const likeBtn = document.querySelector('.like');
const toastContainer = document.querySelector('.toast-container');
const toasts = document.querySelectorAll('.toast-card');

let toastNum = 0;
let marginBottom = 0;
let toastId = 1;

cardHeader.addEventListener('mouseenter', () => {
    cardImg.classList.add('active');
    detailsBtn.classList.add('active');
});

cardHeader.addEventListener('mouseleave', () => {
    cardImg.classList.remove('active');
    detailsBtn.classList.remove('active');
});

let isLiked = false;
likeBtn.addEventListener('click', () => {
    if (!isLiked) {
        likeBtn.className = 'fas fa-heart button like';
        isLiked = true;
    } else {
        likeBtn.className = 'far fa-heart button like';
        isLiked = false;
    }
});
