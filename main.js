// --------------------------Variables-------------------

// ---Change Background---
const header = document.querySelector('header');
const imgUrl = ['./src/background.jpg', './src/background_2.jpg', './src/background_3.jpg'];
//Variable for background loop reset
let imgIndex = 0

//  ----- Menu toggle -----
const menuButton = document.getElementById('menu_button')
const menu = document.getElementsByClassName('menu_container')[0];

// ----- Cars Gallery -----
//buttons
const nextButton = document.querySelectorAll('#next');
let changeIndexButton = 0;
const previousButton = document.querySelectorAll('#previous');
const peugeotGallery = ['./src/vehicule1.png', './src/vehicule1_side.png', './src/vehicule1_rear.png'];
const fordGallery = ['./src/vehicule2.png', './src/vehicule2_side.png', './src/vehicule2_rear.jpg'];
const audiGallery = ['./src/vehicule3.png', './src/vehicule3_side.png', './src/vehicule3_side2.png'];
const opelGallery = ['./src/vehicule4.png', './src/vehicule4_side.jpg', './src/vehicule4_rear.png'];






// functions


// Change Background
setInterval(changeBackground, 7000)

function changeBackground() {
    imgIndex++

    if (imgIndex == imgUrl.length) {
        imgIndex = 0
    }
    header.style.backgroundImage = `url(${imgUrl[imgIndex]})`
}

//Toggle Menu
menuButton.addEventListener('click', function () {

    if (menu.style.display === 'none') {
        menu.style.display = 'flex'
        menuButton.style.color = "rgba(107, 106, 106, 0.7)";
        menuButton.style.backgroundColor = '#FFF'
    } else {
        menu.style.display = 'none'
        menuButton.style.color = "rgb(255, 255, 255, 0.7)";
        menuButton.style.backgroundColor = 'inherit'
    }
})


// Cars Gallery

// ---Next Button---
for (let i = 0; i < nextButton.length; i++) {
    const buttons = nextButton[i];

    buttons.addEventListener('click', function () {
        changeIndexButton++

        //Peugeot 208 Gallery
        const imgToChange = buttons.previousElementSibling;
        if (changeIndexButton == peugeotGallery.length) {
            changeIndexButton = 0;
        };

        if (imgToChange.id === 'peugeotimg') {
            imgToChange.src = `${peugeotGallery[changeIndexButton]}`
        };

        //Ford Gallery
        if (changeIndexButton == fordGallery.length) {
            changeIndexButton = 0;
        };

        if (imgToChange.id === 'fordimg') {
            imgToChange.src = `${fordGallery[changeIndexButton]}`
        };

        //Audi Gallery
        if (changeIndexButton == audiGallery.length) {
            changeIndexButton = 0;
        };

        if (imgToChange.id === 'auditimg') {
            imgToChange.src = `${audiGallery[changeIndexButton]}`
        };

        //Oppel Gallery
        if (changeIndexButton == opelGallery.length) {
            changeIndexButton = 0;
        };

        if (imgToChange.id === 'opelimg') {
            imgToChange.src = `${opelGallery[changeIndexButton]}`
        };
    });


};

// ---Previous Button---

    if (changeIndexButton === 1) {
        changeIndexButton = 2;
    }

    buttonsprev.addEventListener('click', function () {
        changeIndexButton--

        //Peugeot
        const imgToChange = buttonsprev.nextElementSibling;

        if (imgToChange.id === 'peugeotimg') {
            imgToChange.src = `${peugeotGallery[changeIndexButton]}`
        };

        //ford
        if (imgToChange.id === 'fordimg') {
            imgToChange.src = `${fordGallery[changeIndexButton]}`
        };


        //Audi
        if (imgToChange.id === 'auditimg') {
            imgToChange.src = `${audiGallery[changeIndexButton]}`
        };

        //Opel
        if (imgToChange.id === 'opelimg') {
            imgToChange.src = `${opelGallery[changeIndexButton]}`
        };
    });

