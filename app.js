// Change title

function toggleTitle(titulo) {
    titulo.innerHTML = (titulo.innerHTML === "Práctica de Javascript")
        ? "Hola que tal! ! !"
        : "Práctica de Javascript";
}


// Change font sizes

let fontSizes = [
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18
];

let currentFontSize;

// Increase font size

function increaseFontSize() {
    currentFontSize++;
    if (currentFontSize > fontSizes.length - 1) {
        currentFontSize = fontSizes.length - 1;
    }
    changeFontSize(fontSizes[currentFontSize]);
}

// Decrease font size

function decreaseFontSize() {
    currentFontSize--;
    if (currentFontSize < 0) {
        currentFontSize = 0;
    }
    changeFontSize(fontSizes[currentFontSize]);
}

//Reset font size


function resetFontSize() {
    currentFontSize = 4; // Math.floor(fontSizes.length / 2);
    changeFontSize(fontSizes[currentFontSize]);
}

resetFontSize();


//Do change font size

function changeFontSize(newSize) {
    let paragraphs = document.querySelectorAll("section p");
    paragraphs.forEach(
        (paragraph) => paragraph.style.fontSize = newSize + "px"
    );
}


// Show menues

function hideAllMenues() {
    let submenus = document.querySelectorAll("#sub_caja, #sub_texto, #sub_imagen");
    submenus.forEach(
        (menu) => menu.style.display = "none"
    )
}

function openMenu(menuId) {
    hideAllMenues();
    document.getElementById(menuId).style.display = "block";
}

// Menu color

function changeContentColors(newBg, newColor) {
    let e = document.querySelector("#container section");
    e.style.backgroundColor = newBg;
    e.style.color = newColor;
}

hideAllMenues();

// Menu font

let fonts = [
    'Tahoma, Geneva, sans-serif',
    'Arial, Helvetica, sans-serif',
    '"Courier New", Courier, monospace',
    '"Trebuchet Ms", Arial, Helvetica, sans-serif'
]

function changeContentFont(fontId) {
    let paragraphs = document.querySelectorAll("section p");
    paragraphs.forEach(
        (paragraph) => paragraph.style.fontFamily = fonts[fontId]
    );
}

changeContentFont(0);

//Menu images

function changeImg(imageId = Math.floor(Math.random() * 8)) {
    document.getElementById('section-image').src = `img/${imageId}.jpg`;
}

changeImg(0);

//Enable button

function enableButtons() {
    let buttons = document.querySelectorAll('header ul li a');
    for (let i = 0; i < buttons.lenght; i++) {
        buttons[i].classList.remove('disabled')
    }
}

function toggleButton(dataAction, enabled) {
    let btn = document.querySelector("header ul li a[data-action='" + dataAction + " ' ] ");
    enabled ? btn.classList.remove("disabled") : btn.classList.add("disabled");
}