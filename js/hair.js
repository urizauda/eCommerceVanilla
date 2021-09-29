// Create Cards Items

var shavingPics = document.getElementById("shavingContainer");


for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].id >= 41 && arrayOfProducts[i].id <= 45) {
        shavingPics.innerHTML += `
        <div id="picAndTextShaving">
    <div id="imgDivShaving">
<img class= "imageFront" src = "${arrayOfProducts[i].pics[0]}">
<img class= "imageBack" src = "${arrayOfProducts[i].pics[1]}">
</div>
<p>Brand: ${arrayOfProducts[i].name} </p>
<p>Description: ${arrayOfProducts[i].description}</p>
<p>Price: ${arrayOfProducts[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addToCart(${arrayOfProducts[i].id})">Add to Cart</button>
</div>`
    }
};


var hairStraightenerPics = document.getElementById("hairStraightenerContainer");

for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].id >= 46 && arrayOfProducts[i].id <= 50) {
        hairStraightenerPics.innerHTML += `
        <div id="picAndTextHairStraighteners">
    <div id="imgDivHairStraighteners">
<img class= "imageFront" src = "${arrayOfProducts[i].pics[0]}">
<img class= "imageBack" src = "${arrayOfProducts[i].pics[1]}">
</div>
<p>Brand: ${arrayOfProducts[i].name} </p>
<p>Description: ${arrayOfProducts[i].description}</p>
<p>Price: ${arrayOfProducts[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addToCart(${arrayOfProducts[i].id})">Add to Cart</button>
</div>`
    }
};


var trimersPics = document.getElementById("trimersContainer");

for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].id >= 51 && arrayOfProducts[i].id <= 55) {
        trimersPics.innerHTML += `
        <div id="picAndTextTrimers">
    <div id="imgDivTrimers">
<img class= "imageFront" src = "${arrayOfProducts[i].pics[0]}">
<img class= "imageBack" src = "${arrayOfProducts[i].pics[1]}">
</div>
<p>Brand: ${arrayOfProducts[i].name} </p>
<p>Description: ${arrayOfProducts[i].description}</p>
<p>Price: ${arrayOfProducts[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addToCart(${arrayOfProducts[i].id})">Add to Cart</button>
</div>`
    }
};


var hairDryerPics = document.getElementById("hairDryerContainer");

for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].id >= 56 && arrayOfProducts[i].id <= 60) {
        hairDryerPics.innerHTML += `
        <div id="picAndTextHairDryers">
    <div id="imgDivHairDryers">
<img class= "imageFront" src = "${arrayOfProducts[i].pics[0]}">
<img class= "imageBack" src = "${arrayOfProducts[i].pics[1]}">
</div>
<p>Brand: ${arrayOfProducts[i].name} </p>
<p>Description: ${arrayOfProducts[i].description}</p>
<p>Price: ${arrayOfProducts[i].price}$</p><br><br><br>
<button class ="cartBtn" onclick = "addToCart(${arrayOfProducts[i].id})">Add to Cart</button>
</div>`
    }
};



var cartCounter = document.getElementById("cartCounter")
var cartBtn = document.getElementsByClassName("cartBtn")

cartCounter.innerHTML = 3;


//------------------------------------------------------------------------------------------
// Add To Cart


function addToCart(id) {
    for (var i = 0; i < arrayOfProducts.length; i++) {
        if (arrayOfProducts[i].id == id) {
            cart.push(arrayOfProducts[i]);
            cartCounter.innerText = cart.length;
            console.log(cart);
        }
    }
}