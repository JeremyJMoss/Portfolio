"use strict";

const hamburger = document.querySelector("#hamburgerMenu");
const blurBackground = document.querySelector(".blackFadeBackground");
const pageLinks = document.querySelector(".pageLinks");
const closeBtn = document.querySelector(".closeBtn");
const typeContainer = document.querySelector(".typewriterContainer");
const welcome = document.querySelector(".welcomeText");
let writtenText = [
	"Front-End Developer",
	"Eager to Learn More",
	"Python Enthusiast"
];
let index = 0;
let arrPos = 0;

const typewriter = function () {
	typeContainer.innerHTML = writtenText[arrPos].slice(0, index);

	index++;

	if (index > writtenText[arrPos].length) {
		setTimeout(function () {
			index = 0;
			arrPos++;
			if (arrPos > 2) arrPos = 0;
		}, 1500);
	}
};

const dynamicWelcomeMessage = function () {
	const today = new Date();
	const currentHour = today.getHours();
	console.log(currentHour);
	if (currentHour => 5 && currentHour < 12) {
		welcome.innerHTML = "Good Morning, ";
	} else if (currentHour >= 12 && currentHour <= 17) {
		welcome.innerHTML = "Good Day, ";
	} else {
		welcome.innerHTML = "Good Evening, ";
	}
};

const openCloseMenu = function () {
	blurBackground.classList.toggle("hide");
	pageLinks.classList.toggle("hide");
};

hamburger.addEventListener("click", openCloseMenu);
closeBtn.addEventListener("click", openCloseMenu);
setInterval(typewriter, 150);
dynamicWelcomeMessage();
