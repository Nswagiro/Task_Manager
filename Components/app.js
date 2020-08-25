let menuMobile = document.getElementById('menu-mobile');
let buttonToggle = document.getElementById('button');
let Slider = document.getElementById('slider-image');
let desktopMenu = document.querySelector('.Menu');
let cancel = document.getElementById('cancel');

menuMobile.style.display = 'none';

buttonToggle.addEventListener('click', () => {
    menuMobile.style.display === 'none' ?
        (
            menuMobile.style.display = 'block',
            menuMobile.style.backgroundColor = 'white',
            menuMobile.style.width = '25%',
            menuMobile.style.height = '35%',
            menuMobile.style.textAlign = 'left',
            menuMobile.style.position = 'absolute',
            menuMobile.style.right = '12%',
            menuMobile.style.top = '10px',
            menuMobile.style.padding = '15px',
            menuMobile.style.border = '1px solid white',
            menuMobile.style.borderRadius = '5px',
            menuMobile.style.zIndex = 100,
            menuMobile.style.fontSize = '25px',
            desktopMenu.style.display = 'none',
            Slider.style.display = 'none'
        )
        :
        ( 
           menuMobile.style.display = 'none',
           Slider.style.display = 'block'
        )
} )

cancel.addEventListener('click', () => {
    menuMobile.style.display = 'none';
    Slider.style.display = 'block';
})

// display sliders
let slideIndex = 0;

function displaySlider() {
    let slide = document.getElementsByClassName('mySlides');
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none'
    }

    slideIndex++;

    if (slideIndex > slide.length) {
        slideIndex = 1;
    }

    slide[slideIndex - 1].style.display = 'block';
    setTimeout(displaySlider, 2000);
}

displaySlider()