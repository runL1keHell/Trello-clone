"use strict";
// export let date = new Date(); 
let date = new Date();

export const timestamp = document.getElementById("timestamp");

timestamp.innerHTML = new Intl.DateTimeFormat("ru", {
    // weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric", 
    year: "numeric", 
    month: "long", 
    day: "numeric"}).format(date);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#specifications
