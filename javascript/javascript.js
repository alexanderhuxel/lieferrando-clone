let heart = "fas fa-heart";
let info = "fas fa-info";
let search = "fas fa-search";

getmeal();

function getmeal() {

    fetch("../javascript/data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let i = 0; i < data.burger.length; i++) {
                let burger = data.burger[i];
                document.getElementById("foodbox").innerHTML += returnmeal(burger)
            } for (let x = 0; x < data.pasta.length; x++) {
                burger = data.pasta[x];
                document.getElementById("foodbox").innerHTML += returnmeal(burger)
            }
            for (let y = 0; y < data.pizza.length; y++) {
                burger = data.pizza[y];
                document.getElementById("foodbox").innerHTML += returnmeal(burger)
            } for (let v = 0; v < data.drinks.length; v++) {
                burger = data.drinks[v];
                document.getElementById("foodbox").innerHTML += returnmeal(burger)
            }
        });
}


function returnmeal(burger, i) {
    return `<div class="meal">
    <div class="meal__name">
        <div class="name">${burger.name}</div>
        <div class="add__button--cta"><i class="fas fa-plus"></i></div>
    </div>
    <div class="meal__discription">
        <p>${burger.ingredients}</p>
    </div>
    <div class="meal__price">
        <p>${burger.price}</p>
    </div>
</div>`
}

function returnmealtemplate(burgertempl) {
    return ` < div class="meal__template" >
             <img src="../img/pexels-vinicius-benedit-1082343 (1).jpg">
                <div class="meal__category">Pizza</div>
                <p class="meal__info">${burgertempl}</p></div>`
}