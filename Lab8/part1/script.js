let items = document.querySelectorAll('.slider .item');
let active = 0;

function loadShow() {
    items.forEach((item, index) => {
        item.style.transform = `none`;
        item.style.zIndex = 1;
        item.style.filter = 'none';
        item.style.opacity = 0;
    });

    items[active].style.opacity = 1;

    if (items.length > 1) {
        let prevIndex = (active - 1 + items.length) % items.length;
        let nextIndex = (active + 1) % items.length;

        items[prevIndex].style.transform = `translateX(${-280}px) scale(${0.8}) `;
        items[prevIndex].style.zIndex = -1;
        items[prevIndex].style.opacity = 0.8;

        items[nextIndex].style.transform = `translateX(${280}px) scale(${0.8}) `;
        items[nextIndex].style.zIndex = -1;
        items[nextIndex].style.opacity = 0.8;
    }
}

let sliderButtonsContainer = document.querySelector('.slider-buttons');
for (let i = 0; i < items.length; i++) {
    let button = document.createElement('button');
    button.innerHTML = "_";
    button.onclick = function () {
        active = i;
        loadShow();
        updateButtonStyles();
    };
    sliderButtonsContainer.appendChild(button);
}

updateButtonStyles();

function updateButtonStyles() {
    let buttons = document.querySelectorAll('.slider-buttons button');
    buttons.forEach((button, index) => {
        button.style.width = "10px";
        button.style.height = "20px";
        button.style.marginRight = "20px";
        button.style.border = "none";
        button.style.backgroundColor = "transparent";
        button.style.opacity = index === active ? 0.8 : 0.2;
        button.style.transition = "opacity 0.5s";
        button.style.color = "grey";
        button.style.fontFamily = "monospace";
        button.style.fontSize = "40px";
    });
}
loadShow();

function autoSlide() {
    active = (active + 1) % items.length;
    loadShow();
    updateButtonStyles();

}

let slideInterval = setInterval(autoSlide, 5000);

function stopAutoSlide() {
    clearInterval(slideInterval);
}

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function () {
    active = (active + 1) % items.length;
    loadShow();
    updateButtonStyles();
    stopAutoSlide();
};

prev.onclick = function () {
    active = (active - 1 + items.length) % items.length;
    loadShow();
    updateButtonStyles();
    stopAutoSlide();
};