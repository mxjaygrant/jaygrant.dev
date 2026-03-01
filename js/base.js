let colorPicker;
const defaultColor = "#FB2AC7";    //color picker only tolerates hex

window.addEventListener("load", startup, false);

function startup() {
		colorPicker = document.querySelector("#colorPicker");
		colorPicker.value = defaultColor;
		colorPicker.addEventListener("input", updateFirst, false);
		colorPicker.addEventListener("change", updateAll, false);
		colorPicker.select();

		const canvas = document.querySelector("canvas");
		const ctx = canvas.getContext("2d");
		ctx.fillStyle = defaultColor;
		ctx.fillRect(10, 10, 100, 100);
	}
	

function switchColorTheme() {
		let colorScheme = document.body.style.colorScheme;

		if ((colorScheme == "") || (colorScheme == "light")) {
				document.body.style.colorScheme = "dark";
		} else {
				document.body.style.colorScheme = "light";
		}
}

/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color */
function updateFirst(event) {
		root = document.querySelector(':root');
		rootStyle = getComputedStyle(document.querySelector(':root'));
		root.style.setProperty('--primary-color', event.target.value);
		document.querySelector("canvas").getContext('2d').fillStyle = event.target.value;
	}

function updateAll(event) {
	root = document.querySelector(':root');
	rootStyle = getComputedStyle(document.querySelector(':root'));
	root.style.setProperty('--primary-color', event.target.value);
	document.querySelector("canvas").getContext('2d').fillStyle = event.target.value;
}
	
function changePrimaryColor(input) {
		root = document.querySelector(':root');
		rootStyle = getComputedStyle(document.querySelector(':root'));
}