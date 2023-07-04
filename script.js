let display = document.getElementById("display");
let currentCalculation = "";

function appendToDisplay(value) {
  currentCalculation += value;
  display.value = currentCalculation;
}

function calculate() {
  try {
    currentCalculation = eval(currentCalculation).toString();
    display.value = currentCalculation;
  } catch (error) {
    display.value = "Error";
    currentCalculation = "";
  }
}

function clearDisplay() {
  currentCalculation = "";
  display.value = "";
}
