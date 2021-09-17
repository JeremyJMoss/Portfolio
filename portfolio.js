"use strict";

const hamburger = document.querySelector("#hamburgerMenu");
const blurBackground = document.querySelector(".blackFadeBackground");
const pageLinks = document.querySelector(".pageLinks");
const closeBtn = document.querySelector(".closeBtn");

const openCloseMenu = function () {
  blurBackground.classList.toggle("hide");
  pageLinks.classList.toggle("hide");
};

hamburger.addEventListener("click", openCloseMenu);
closeBtn.addEventListener("click", openCloseMenu);
