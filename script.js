var currentDate = document.getElementById("currentDay");

function timedateUpdate() {
    currentDate.textContent = moment().format("MMM Do, YYYY" + " " + "hh:mm:ss");
};

timedateUpdate();
setInterval(function(){
    timedateUpdate();
}, 1000);


console.log(moment().format("MMM Do, YYYY"));