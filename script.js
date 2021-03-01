"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("button").addEventListener("click", start);
}

function start() {
  document.querySelector("#car").classList.add("movethecar");
  document.querySelector(".rim1").classList.add("wheels");
  document.querySelector(".rim2").classList.add("wheels");
  console.log("starts");
  init();
}
