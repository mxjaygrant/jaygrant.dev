let colorPicker;
const defaultColor = "#FB2AC7";    //color picker only tolerates hex, no I don't know why it keeps defaulting to a purple

window.addEventListener("load", startup, false);


function startup() {
    colorPicker = document.querySelector("#colorPicker");
    colorPicker.value = defaultColor;
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateAll, false);
    colorPicker.select();
  }
  

function switchColorTheme() {
    let colorScheme = document.body.style.colorScheme;

    if ((colorScheme == "") || (colorScheme == "light")) {
        document.body.style.colorScheme = "dark";
    } else {
        document.body.style.colorScheme = "light";
    }
}


function updateFirst(event) {
    root = document.querySelector(':root');
    rootStyle = getComputedStyle(document.querySelector(':root'));
    root.style.setProperty('--primary-color', event.target.value);
  }

  function updateAll(event) {
    root = document.querySelector(':root');
    rootStyle = getComputedStyle(document.querySelector(':root'));
    root.style.setProperty('--primary-color', event.target.value);
  }
  
  

function changePrimaryColor(input) {
    root = document.querySelector(':root');
    rootStyle = getComputedStyle(document.querySelector(':root'));

}