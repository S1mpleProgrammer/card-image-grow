const cardHeader = document.querySelector('.card-header');
const detailsBtn = document.querySelector('.details-button');
const cardImg = document.querySelector('.card-img');
const likeBtn = document.querySelector('.like');
const toastContainer = document.querySelector('.toast-container');
const toasts = document.querySelectorAll('.toast-card');

let toastNum = 0;
let marginBottom = 0;
let toastId = 1;
const createNewToastEl = (message) => {
    if (toastNum !== 4) {
        toastNum++;
        const toastCard = document.createElement('div');
        const infoIcon = document.createElement('i');
        const toastText = document.createElement('p');
        const closeButton = document.createElement('i');
    
        toastCard.classList.add('toast-card');
        toastCard.id = `i${toastId}`;
        toastCard.style.marginBottom = `${marginBottom}px`;
        infoIcon.className = "fas fa-info-circle";
        closeButton.className = "fas fa-times close";
    
        toastCard.appendChild(infoIcon);
        toastText.innerText = message;
        toastCard.appendChild(toastText);
        toastCard.appendChild(closeButton);
        toastContainer.appendChild(toastCard);
        toastId++;
        marginBottom += 100;
        setTimeout(() => {
            toastCard.style.opacity = '0';
            toastCard.style.transform = 'translateX(150%)';
            setTimeout(() => {
                toastCard.style.display = 'none';
                marginBottom = 0;
            }, 200);
            marginBottom = 0;
        }, 3500);
    } else {
        marginBottom = 0;
        toastNum = 0;
    }
}

// setInterval(createNewToastEl, 3000);

// const closeToast = (cb) => {
//     console.log("Hello!!!!");
//     const clickedToast = document.getElementById(cb.parentElement.id);
//     clickedToast.style.opacity = '0';
//     clickedToast.style.transform = 'translateX(150%)';
//     setTimeout(() => {
//         toastContainer.removeChild(clickedToast);
//     }, 200);
// }

// closeBtns.forEach(closeBtn => {
//     closeBtn.addEventListener('click', closeToast(closeBtn));
// });

// console.log("Hello!!!!");
        // const clickedToast = document.getElementById(closeBtn.parentElement.id);
        // clickedToast.style.opacity = '0';
        // clickedToast.style.transform = 'translateX(150%)';
        // setTimeout(() => {
        //     toastContainer.removeChild(clickedToast);
        // }, 200);

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
        createNewToastEl("You've just \"Liked\" a story!");
    } else {
        likeBtn.className = 'far fa-heart button like';
        isLiked = false;
        createNewToastEl("You've just \"disliked\" a story!");
    }
});