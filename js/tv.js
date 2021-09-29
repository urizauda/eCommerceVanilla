
// Create Cards Items

var tvPics = document.getElementById("tvContainer");

for (let i = 0; i < arrayOfProducts.length; i++) {
    if (arrayOfProducts[i].category == "TV") {
        tvPics.innerHTML += `
        <div id="picAndText">
    <div id="imgDiv">
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
    


var cartCounter = document.getElementById("cartCounter");
var cartBtn = document.getElementsByClassName("cartBtn");

cartCounter.innerText = 3;


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