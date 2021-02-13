// declaring all variables
var currentDate = document.getElementById("currentDay");
var confirmButton = document.querySelectorAll(".confirmBtn");
var userInput = document.querySelectorAll(".inputField");
var currentTime = document.getElementById("currentTime");
var inputTime = document.querySelectorAll(".time");
var rows = document.querySelectorAll(".row");
// time and date moment.js implementation
function timedateUpdate() {
    currentDate.textContent = moment().format("MMM Do, YYYY");
    currentTime.textContent = moment().format("h a");
};

// for loop allowing us to tie confirm button to local storage
for (var i = 0; i < confirmButton.length; i++) {
    confirmButton[i].addEventListener("click", function () {
        var currentText = this.parentNode.parentNode.children[1].querySelector(".inputField").value;
        // save text to localStorage 
        localStorage.setItem("userInput", currentText);
    })
}

// get info from local storage and put it in the textArea
var local = localStorage.getItem(userInput);
userInput.textContent = local;

if ((moment().format("h")) === inputTime) {
    rows.style.backgroundColor = red;
} else if (moment().format("h") > inputTime) {
    rows.style.backgroundColor = green;
} else {
    rows.style.backgroundColor = black;
}

// some leftover pieces of the time and date function, mostly about having it run every second
timedateUpdate();
setInterval(function(){
    timedateUpdate();
}, 1000);