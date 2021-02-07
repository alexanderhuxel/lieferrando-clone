let heart = "fas fa-heart";
let info = "fas fa-info";
let search = "fas fa-search";
let order = "past,pizza,burger,drinks";



/**
 * initiate all needed functions to 
 * display the homepage
 * @function getMeal(key,templatenumber)
 * @function getMeal(key,templatenumber)
 * @function getMeal(key,templatenumber)
 * @function getMeal(key,templatenumber)
 */
function init() {
    getMeal("pasta", 0);
    getMeal("pizza", 1);
    getMeal("burger", 2);
    getMeal("drinks", 3);
    setInterval(() => {
        checkBasketVersion();
    }, 50);
}

function checkBasketVersion() {
    if (window.innerWidth > 800) {
        console.log("Desktop Version")
        setBasket();
    } if (window.innerWidth < 800) {
        setBasketMedia();
        console.log("Mobile Version")
    }
}

function setBasketMedia() {
    document.getElementById("basket").innerHTML = getBasketMedia();
}

function setBasket() {
    document.getElementById("basket").innerHTML = getBasket();
}

function getBasketMedia() {
    return `   <span>
    <p id="basket-logo-media"><i class="fas fa-shopping-cart"></i></p>
    <p>1</p>
</span>
<span>
    <p id="basket-summary-media">Warenkorb (8,00€)</p>
</span>`
}

function getBasket() {
    return ` <h2>Warenkorb</h2>
    <span id="cart__description">
        <i class="fas fa-shopping-cart"></i>
        <p>Wähle leckere Gerichte aus der Karte und bestelle Dein Menü.</p>
    </span>
    <span id="cart__row1">
        <p>Zwischensumme:</p>
        <p>0,00€</p>
    </span>
    <span id="cart__row2">
        <p>Gesamt:</p>
        <p>0,00€</p>
    </span>
    <p id="orderinicator">Leider kannst Du noch nicht bestellen. Pizza Parma liefert erst ab einem
        Mindestbestellwert von 18,00 €
        (exkl. Lieferkosten).</p>
    <button>Bestellen</button>`
}

document.addEventListener('scroll', () => {
    if (window.innerWidth > 800) {
        if (scrollY > 50) {
            document.getElementById("basket").style.position = ("fixed");
            document.getElementById("basket").style.top = ("0");
            document.getElementById("header").classList.toggle("d-none");
        } if (scrollY < 50) {
            document.getElementById("basket").style.top = ("70");
            document.getElementById("basket").style.position = ("position: absolute");
            document.getElementById("header").classList.toggle("d-none");
        }
    }
});

function getMeal(key, templatenumber) {
    fetch("../javascript/data.json")
        .then(response => response.json())
        .then(data => {
            let template = data.templates[templatenumber];
            returnmealtemplate(template);
            for (let i = 0; i < data[key].length; i++) {
                let index = data[key][i]
                document.getElementById("foodbox").innerHTML += returnmeal(index);
            }
        });
}


function returnmeal(index) {
    return `<div class="meal">
    <div class="meal__name">
        <div class="name">${index.name}</div>
        <div class="add__button--cta"><i class="fas fa-plus"></i></div>
    </div>
    <div class="meal__discription">
        <p>${index.ingredients}</p>
    </div>
    <div class="meal__price">
        <p>${index.price}</p>
    </div>
</div>`
}

function returnmealtemplate(template) {
    document.getElementById("foodbox").innerHTML += `
    <div class="meal__template" >
    <img src="${template.img}">
    <div class="meal__category">${template.name}</div>
    <p class="meal__info">${template.discription}</p></div>`
}