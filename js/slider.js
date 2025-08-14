const slider = document.querySelector(".testimonials__slider-content");
let sliderItems = document.querySelectorAll(".testimonials__slider-item");
const sliderItemsLength = sliderItems.length;
const nextButton = document.querySelector(".testimonials__slider-toright")
const prevButton = document.querySelector(".testimonials__slider-toleft");
slideWidth = sliderItems[0].offsetWidth + 80;
currentIndex = 1;

const firstClone = slider.firstElementChild.cloneNode(true);

const lastClone = slider.lastElementChild.cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slider.firstChild);

sliderItems = document.querySelectorAll(".testimonials__slider-item");

slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

nextButton.addEventListener("click", ()=>{
    if (currentIndex >= sliderItemsLength) {
        currentIndex = 0
    }
    currentIndex++;
    slider.style.transition = "transform 0.5s easy-in-out";
    slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
});

prevButton.addEventListener("click", ()=>{
    
    if (currentIndex <= -1) {
        currentIndex = 2;
    }
    currentIndex--;
    slider.style.transition = "transform 0.5s easy-in-out";
    slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    console.log(currentIndex)
});

