const slides = document.querySelectorAll(".slide");
let counter = 0;
console.log(slides);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter == 0) {
        counter = slides.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
}

const goNext = () => {
    if (counter == slides.length - 1) {
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
}

const slideImage = () => {
    slides.forEach (
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
    return;
}