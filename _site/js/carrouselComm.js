const quotes = document.querySelectorAll(".dontShowQuote");
const leftArrow = document.getElementById("leftArrowComm");
const rigthArrow = document.getElementById("rigthArrowComm");

let count = 0;
const total = quotes.length;
let active = quotes[count];
active.classList.remove("dontShowQuote");
