//* Access HTML Elements
let screen = document.getElementById("screen");

//! Value is accessed from the input field and the btnClick is added as onclick event in HTML - Input field

//* Add EventListener to button
function btnClick(value) {
  screen.value += value;
}

//* Clean Screen
function clearScreen() {
  screen.value = "";
}

//* To find result
function findResult() {
  let result = eval(screen.value);
  screen.value = result;
}
