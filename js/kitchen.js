// Create Cards Items


var microwavesPics = document.getElementById("matoContainer");

for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].id >= 61 && arrayOfProducts[i].id <= 65) {
        microwavesPics.innerHTML += `
        <div id="picAndTextMicrowaves">
    <div id="imgDivMicrowaves">
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


var toastersPics = document.getElementById("tstContainer");

for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].id >= 66 && arrayOfProducts[i].id <= 70) {
        toastersPics.innerHTML += `
        <div id="picAndTextToasters">
    <div id="imgDivToasters">
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


var mixersPics = document.getElementById("mxrContainer");

for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].id >= 71 && arrayOfProducts[i].id <= 75) {
        mixersPics.innerHTML += `
        <div id="picAndTextMixers">
    <div id="imgDivMixers">
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


var stovesPics = document.getElementById("stvContainer");

for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].id >= 76 && arrayOfProducts[i].id <= 80) {
        stovesPics.innerHTML += `
        <div id="picAndTextStoves">
    <div id="imgDivStoves">
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