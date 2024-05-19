const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const colorPicker = document.getElementById("colorPicker");
const applyColor = document.getElementById("applyColor");
const resetButton = document.getElementById("reset");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const color = e.target.id;
    changeBackgroundColor(color);
  });
});

applyColor.addEventListener("click", () => {
  const color = colorPicker.value;
  changeBackgroundColor(color);
});

resetButton.addEventListener("click", () => {
  body.style.backgroundColor = "#f0f0f0";
  body.style.backgroundImage = "none";
});

function changeBackgroundColor(color) {
  body.style.backgroundColor = color;
  body.style.backgroundImage = `linear-gradient(45deg, ${color} 30%, white 90%)`;
  confetti();
}
