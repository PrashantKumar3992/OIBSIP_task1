"use strict";

const buttons = document.querySelectorAll(".btn");
const inputText = document.querySelector(".input-value");

let string = "";
let btnArray = Array.from(buttons);
btnArray.forEach((buttons) => {
  buttons.addEventListener("click", function (event) {
    if (event.target.innerHTML == "=") {
        string = eval(string);
        inputText.value = string;
    } else if (event.target.innerHTML == "AC") {
        string = "";
        inputText.value = string;
    } 
    else {
        console.log(event.target);
        string = string + event.target.innerHTML;
      inputText.value = string;
    }
  });
});
