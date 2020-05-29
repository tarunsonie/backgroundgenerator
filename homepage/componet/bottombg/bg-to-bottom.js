var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function getbackground() {
	body.style.background = 
	"linear-gradient( " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")"  ;
	body.style.backgroundSize = "400% 400%";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", getbackground);

color2.addEventListener("input", getbackground);