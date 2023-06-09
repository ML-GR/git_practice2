// ******* SELECT ITEMS *******
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// EDIT OPTION
let editElement;
let editFlag = false;
let editID =""; 

// ******* EVENT LISTENERS *******
// submbit form 
form.addEventListener("submit", addItem)

// ******* FUNCTIONS *******
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString()
    if(value !== '' && editFlag === false) {
        console.log('adding item to the list');
    } else if (value !== '' && editFlag ===true){
        console.log("editing");
    } else {
        console.log("empty value")
    }
}

// ******* LOCAL STORAGE *******

// ******* SETUP ITEMS *******