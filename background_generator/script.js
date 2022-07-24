var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function getRndNum() {
	var number = Math.floor(Math.random() * 256);
	var hexNumber = number.toString(16).padStart(2, '0');
	return hexNumber;
}

function setRandomBackgroundAfterClick () {
	color1.value = "#" + getRndNum() + getRndNum() + getRndNum();
	color2.value = "#" + getRndNum() + getRndNum() + getRndNum();
	setGradient();
}

function setGradient () {
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();

randomButton.addEventListener("click", setRandomBackgroundAfterClick);
