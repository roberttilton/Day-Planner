var currentDate = document.getElementById("currentDay");
//var timeDivs = document.getElementById("timeSelect").querySelectorAll("div")
var confirmButton = document.querySelectorAll(".confirmBtn")
var userInput = document.querySelectorAll(".inputField")
var currentTime;
function timedateUpdate() {
    currentDate.textContent = moment().format("MMM Do, YYYY" + " " + "hh:mm:ss");
    currentTime = moment().format()
};

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

// function dateColor () {
//     if (timeDivs = timedateUpdate()) {
//         timeDivs.
//     }
// }

timedateUpdate();
setInterval(function(){
    timedateUpdate();
}, 1000);


console.log(moment().format("MMM Do, YYYY"));