let Basket = [];
let Food = [];
let Summary = [];
let data = JSON.parse(localStorage.getItem("Food"));




/**
 * initiate all needed functions to 
 * display the homepage
 * @event window.addEventListener("resize",  @function checkBasketVersion()
 */
function init() {
    fillArrayWithData();
    getMeal();
    checkBasketVersion();

}

/**
 * set an item to the localstorage
 * @param {string} key -- "keyword"
 * @param {string} value --"value"
 */
function setArray(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


/**
* load a Array out of the Localstorage
* @param {string} key 
*/
function getArray(key) {
    return JSON.parse(localStorage.getItem(key));
}

/**
 * get data out of a JSON-file from a Server
 * @function fetch(url)
 * 
 */

function fillArrayWithData() {
    fetch(
        "../javascript/data.json")
        .then(response => response.json())
        .then(data => {
            Food.push(...data.pasta);
            Food.push(...data.pizza);
            Food.push(...data.burger);
            Food.push(...data.drinks);
            localStorage.setItem('Food', JSON.stringify(Food));
        }).catch((error) => {
            console.error('Error:', error);
        });;
}

let date = JSON.parse(localStorage.getItem("Food"));






/**
 * check the innerWidth 
 * if is > 800 run
 * @function setBasket()
 * is is < 800 run
 * @function setBasketMedia()
 */
function checkBasketVersion() {
    window.addEventListener("resize", checkBasketVersion);
    if (window.innerWidth > 800) {
        setBasket();
    } if (window.innerWidth < 800) {
        setBasketMedia();
    }
}

/**
 * change the innerHTML of "Basket"
 * to the returned data of 
 * @function getBasketMedia()
 */

function setBasketMedia() {
    document.getElementById("basket").innerHTML = getBasketMedia();
}


/**
 * change the innerHTML of "Basket"
 * to the returned data of 
 * @function getBasket()
 */
function setBasket() {
    document.getElementById("basket").innerHTML = getBasket();
}





/**
 * @returns
 * the HTML for the Basket 
 * MobileVersion
 */
function getBasketMedia() {
    return `   <span>
    <p id="basket-logo-media"><i class="fas fa-shopping-cart"></i></p>
    <p>1</p>
</span>
<span>
    <p id="basket-summary-media">(${"Warenkorb " + Summary})</p>
</span>`
}






/**
 * @returns
 * the HTML for the Basket 
 * DesktopVersion
 * with the @var Summary
 */
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
        <p id="basket-summary">${Summary}</p>
    </span>
    <p id="Foodinicator">Leider kannst Du noch nicht bestellen. Pizza Parma liefert erst ab einem
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

function createNavigationBar() {
    for (let i = 0; i < date[41][0].length; i++) {
        document.getElementById("bar").innerHTML +=
            `<p  ${data.templates[0][i].name}">${data.templates[0][i].name}</p>`
    }
}




function createBasketItem(name,price) {
    return {
        "name": name,
        "price": price
    }
}
console.log()
function addToBasket(i){
    
    Basket.push(createBasketItem(date[i].name,date[i].price));
    console.log(Basket)
    Summary.push(Basket[i].price);
    console.log(Summary)

}











// Meal and Template
// Meal and Template
// Meal and Template
// Meal and Template
function getMeal() {
    for (let i = 0; i < date.length; i++) {
        if (date[i].category == undefined) {
            document.getElementById("foodbox").innerHTML += returnmeal(i);
        }
        if (date[i].category == "template") {
            getMealTemplate(i);
        }
    }
}


/**
 * @returns the HTML for the Menu
 * @param {string} nameOfArray 
 * @param {number} numberOfArray 
 * @param {number} i 
 */
function returnmeal(i) {
    return `<div class="meal">
    <div class="meal__name">
    <div  class="name">${date[i].name}</div>
    <div onclick="addToBasket(${i})" class="add__button--cta"><i  class="fas fa-plus"></i></div>
    </div>
    <div class="meal__discription">
    <p>${date[i].ingredients}</p>
    </div>
    <div class="meal__price">
    <p>${date[i].price}</p>
    </div>
    </div>`
}

/**
 * get the informations from @function returnMealtemplate();
 * @param {number} templateNumber 
 */
function getMealTemplate(i) {
    document.getElementById("foodbox").innerHTML += returnMealtemplate(i);
}
/**
 * @returns the HTML for the Template of the Menu
 * @param {number} templateNumber 
 */
function returnMealtemplate(i) {
    return ` 
    <div  class="meal__template" >
    <img src="${date[i].img}">
    <div class="meal__category">${date[i].name}</div>
    <p class="meal__info">${date[i].discription}</p></div>`
}