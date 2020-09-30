const slides = document.getElementsByClassName('carousel-item');
const prevBtn = document.getElementById('carousel-button-prev');
const nextBtn = document.getElementById('carousel-button-next');
const totalSlides = slides.length;

let slidePosition = 0;

function hideAllSlides() {
  for (let slide of slides) {
      slide.classList.remove('carousel-item-visible');
      slide.classList.add('carousel-item-hidden');
  }
}

function moveToPrevSlide(){
  console.log('Previous btn was clicked');
}

function moveToNextSlide(){
  hideAllSlides();
  if(slidePosition === totalSlides - 1){
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
  console.log(slidePosition);
}
prevBtn.addEventListener('click', moveToPrevSlide);
nextBtn.addEventListener('click', moveToNextSlide);
