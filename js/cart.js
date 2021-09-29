

var cart = [
    { id: 12, name: "NEO QLED", price: 800, description: "High Quality TV", category: "TV", pic: "../media/img/categoryTV/12a.jpg" },
    { id: 35, name: "HP", price: 1099, description: "i3", category: "Laptops", pic: "../media/img/categoryLaptops/35a.jpg" },
    { id: 70, name: "BREVILLE", price: 279, description: "For a Crispy Toast", category: "toasters", pic: "../media/img/categoryKitchen/toasters/70a.jpeg" }
];

//----------------------------------------------------------------------------------------------------
// Cart Items Display

var cartTable = document.getElementById("cartTable");


for (let i = 0; i < cart.length; i++) {
    cartTable.innerHTML += `
    <tr class="cartItems" id ="${cart[i].id}">
        <td id="tdPicDescription"><img src = "${cart[i].pic}" style ="width: 25%"></td>
        <td id="brand">${cart[i].name}</td>
        <td>${cart[i].price}$</td>
        <td><button onclick = "removeFromCart(${cart[i].id})" class ="removeFromCartBtn">x</button></td>
    </tr>`;
}



var removeFromCartBtn = document.getElementsByClassName("removeFromCartBtn");
var cartItems = document.getElementsByClassName("cartItems");
var totalSum = document.getElementById("totalSum");

//----------------------------------------------------------------------------------------------------
// Remove From Cart

var btnContainer = document.getElementById("btnContainer");


function removeFromCart(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart.splice(i, 1)
            document.getElementById(id).innerHTML = "";
            let total = calculateSum()
            totalSum.innerHTML = `<p id ="totalInpt">Total: &nbsp&nbsp ${total}$</p>`;
            console.log(cart);
        }
    }
    if (cart.length == 0) {
        btnContainer.innerHTML = "";
    }
}

//-----------------------------------------------------------------------------------------------------
// Remove From Total


function calculateSum() {

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}


//-----------------------------------------------------------------------------------------------------
// Total Display

var sum = 0;

for (let i = 0; i < cart.length; i++) {
    sum += cart[i].price;
    totalSum.innerHTML = `<p id ="totalInpt">Total: &nbsp ${sum}$</p>`;
}


//-----------------------------------------------------------------------------------------------------
//Thanks For Buying Message

var tnx4buy = document.getElementById("tnx4Buy")
var buyNowBtn = document.getElementById("buyNowBtn");

buyNowBtn.onclick = () => {
    tnx4buy.style.visibility = "visible";
    setTimeout(() => {
        tnx4buy.style.visibility = "hidden";
    }, 2000);
}


