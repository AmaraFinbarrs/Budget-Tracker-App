//to display number on screen
let inputValue = document.getElementById("input-field");
let one = document.getElementById("One");
let two = document.getElementById("Two");
let three = document.getElementById("Three");
let four = document.getElementById("Four");
let five = document.getElementById("Five");
let six = document.getElementById("Six");
let seven = document.getElementById("Seven");
let eight = document.getElementById("Eight");
let nine = document.getElementById("Nine");
let zero = document.getElementById("Zero");

let number = "";

// function to type 1 in the input field
function typeNumberOne() {
    let value = one.textContent;
    number += value;
    if(inputValue.innerText.length<=15){
        inputValue.innerText = number;
    }
}

// function to type 2 in the input field
function typeNumberTwo() {
    let value = two.textContent;
    number += value;
    if(inputValue.innerText.length<=15){
        inputValue.innerText = number;
    }
}

// function to type 3 in the input field
function typeNumberThree() {
    let value = three.textContent;
    number += value;
    if(inputValue.innerText.length<=15){
        inputValue.innerText = number;
    }
}

// function to type 4 in the input field
function typeNumberFour() {
    let value = four.textContent;
    number += value;
    if(inputValue.innerText.length<=15){
        inputValue.innerText = number;
    }
}

// function to type 5 in the input field
function typeNumberFive() {
    let value = five.textContent;
    number += value;
    if(inputValue.innerText.length<=15){
        inputValue.innerText = number;
    }
}

// function to type 6 in the input field
function typeNumberSix() {
    let value = six.textContent;
    number += value;
    if(inputValue.innerText.length<=15){
        inputValue.innerText = number;
    }
}

// function to type 7 in the input field
function typeNumberSeven() {
    let value = seven.textContent;
    number += value;
    if(inputValue.innerText.length<=15){
        inputValue.innerText = number;
    }
}

// function to type 8 in the input field
function typeNumberEight() {
    let value = eight.textContent;
    number += value;
    if(inputValue.innerText.length<=15){
        inputValue.innerText = number;
    }
}

// function to type 9 in the input field
function typeNumberNine() {
    let value = nine.textContent;
    number += value;
    if(inputValue.innerText.length<=15){
        inputValue.innerText = number;
    }
}

// function to type 0 in the input field
function typeNumberZero() {
    let value = zero.textContent;
    number += value;
    if(inputValue.innerText.length<=15){
        inputValue.innerText = number;
    }
}

//function for backspace
function backSpace(){
    let value = inputValue.textContent.slice(0, -1);
    if(inputValue != null){
        inputValue.innerText = value;
        number = value;
    }
}

//function to save value, add new list of items and their prices to history page
let saveEl = document.getElementById("save-el");
let inpText = document.getElementById("inp-text");

// defined variables to store items and thier respective prices
let savedItemValue = new Array(); let savedItem = "Saved Items";
savedItemValue.splice(0, savedItemValue.length);
let savedPriceValue = new Array(); let savedPrice = "Saved Prices";
savedPriceValue.splice(0, savedPriceValue.length);


function save(){
    //To save value
    if(number !== "" && inpText.value !== ""){
        //create a varible to store the current number value 
        let totalVal = Number(number);

        //render the variable in the saveEl
        saveEl.innerText = Number(saveEl.textContent) + totalVal;
        // const currentPrice = saveEl.innerText;

        //render the inpText values in the items list
        renderItem(inpText);

        //render the number in the prices list
        renderPrice(totalVal);
       
        //save the value in the web local storage
        let savedKey = "Saved Value";
        let savedValue = saveEl.innerText.toString();
        localStorage.setItem(savedKey, savedValue);
        
        //reset the number to an empty string to start afresh
        number = "";

        //Display an empty text field
        inputValue.innerText = number;
    }
}

//function to render the inpText values in the items list
function renderItem(inpText){
    if(savedItemValue.length == 0 && localStorage.getItem("Saved Items") !== null) {
        // let savedItem = "Saved Items";
        // savedItemValue = new Array();
        console.log(savedItemValue.length);
        savedItemValue[0] = inpText.value;
        console.log(savedItemValue);
    } else if(savedItemValue.length !== 0 && localStorage.getItem("Saved Items") !== null){
        savedItemValue.push(inpText.value);
        console.log(savedItemValue);
    }
    localStorage.setItem(savedItem, JSON.stringify(savedItemValue));
}

//function to render the number in the prices list
function renderPrice(totalVal){
    if (savedPriceValue.length == 0) {
        // let savedPrice = "Saved Prices";
        // savedPriceValue = new Array();
        savedPriceValue[0] = totalVal.toString();
    } else if(savedPriceValue.length !== 0 && localStorage.getItem("Saved Prices") !== null){
        console.log(savedPriceValue);
        savedPriceValue.push(totalVal.toString());
    }
    localStorage.setItem(savedPrice, JSON.stringify(savedPriceValue));
}

//Data stored in local storage to prevent data loss
window.onload = function() {
    if(localStorage.getItem("Saved Value") !== null){
        saveEl.innerText = localStorage.getItem("Saved Value");
    }
}
