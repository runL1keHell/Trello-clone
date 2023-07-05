"use strict";
export const timestamp = document.getElementById("timestamp");

function clock() {
let date = new Date();

timestamp.innerHTML = new Intl.DateTimeFormat("ru", {
    // weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric", 
    year: "numeric", 
    month: "long", 
    day: "numeric"}).format(date);
}
setInterval(clock, 1000);
clock();
