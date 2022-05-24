//to display items and their prices

function displayItem(){
    let items = document.getElementById("items");
    // let newItem = document.createElement("li");
    let saved_Items = JSON.parse(localStorage.getItem("Saved Items"));

    for (let i = 0; i < saved_Items.length; i++){
        let newItemValue = document.createTextNode(saved_Items[i]);
        let newItem = document.createElement("li");
        newItem.appendChild(newItemValue);
        items.appendChild(newItem);
    }
}

function displayPrice(){
    let prices = document.getElementById("prices");
    // let newPrice = document.createElement("li");
    let saved_Prices = JSON.parse(localStorage.getItem("Saved Prices"));

    for (let i = 0; i < saved_Prices.length; i++){
    let newPriceValue = document.createTextNode(saved_Prices[i]);
    let newPrice = document.createElement("li");
    newPrice.appendChild(newPriceValue);
    prices.appendChild(newPrice);
    }
}

//Data stored in local storage to prevent data loss
let total = document.getElementById("total");
window.onload = function() {
    if (localStorage.getItem("Saved Items") !== null){
        displayItem();
        displayPrice();
    }

    if(localStorage.getItem("Saved Value") !== null){
        total.innerText = localStorage.getItem("Saved Value");
    }
}

//to delete all entries
function deleteAllEntries() {
    localStorage.clear();
    location.reload();
    // document.getElementById("overlay2").style.visibility = "hidden";
}

