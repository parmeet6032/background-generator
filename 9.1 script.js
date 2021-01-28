var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector("button");

function setGradient() {
    // body.style.background = 
    // "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    h3.textContent = body.style.background + ";";
}

function setRandom() {
    var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    color1.value = `#${randomColor1}`;
    color2.value = `#${randomColor2}`;
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandom)