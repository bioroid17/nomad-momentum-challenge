const momentum = document.getElementById("momentum");
const dark = document.querySelector("#font-color span:first-child");
const bright = document.querySelector("#font-color span:last-child");

function darkFont() {
	momentum.classList.add("dark");
	momentum.classList.remove("bright");
}
function brightFont() {
	momentum.classList.add("bright");
	momentum.classList.remove("dark");
}

dark.addEventListener("click", darkFont);
bright.addEventListener("click", brightFont);
