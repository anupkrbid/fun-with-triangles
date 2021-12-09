const inputs = document.querySelectorAll("input");
const message = document.querySelector("#message");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  message.style.display = "none";
  if (!inputs[0].value || !inputs[1].value || !inputs[2].value) {
    showMessage("Enter value in all fields!");
  } else if (
    Number(inputs[0].value) <= 0 ||
    Number(inputs[1].value) <= 0 ||
    Number(inputs[2].value) <= 0
  ) {
    showMessage("Enter positive value in all fields!");
  } else {
    const area = calculateArea();
    showMessage(
      "Area of a triangle using heron's formula is " +
        area.toFixed(2) +
        " units"
    );
  }
});

function showMessage(msg) {
  message.style.display = "block";
  message.textContent = msg;
}

function calculateHypotenuse(side1, side2) {
  const sumOfSquaresOfSide =
    Math.pow(Number(side1), 2) + Math.pow(Number(side2), 2);
  return Math.sqrt(sumOfSquaresOfSide);
}

function calculateArea() {
  const base = Number(inputs[2].value);
  const height = calculateHypotenuse(
    Number(inputs[0].value),
    Number(inputs[1].value)
  );
  return 0.5 * base * height;
}
