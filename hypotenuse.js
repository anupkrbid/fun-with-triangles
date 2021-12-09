const inputs = document.querySelectorAll("input");
const message = document.querySelector("#message");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  message.style.display = "none";
  if (!inputs[0].value || !inputs[1].value) {
    showMessage("Enter value in all fields!");
  } else if (Number(inputs[0].value) <= 0 || Number(inputs[1].value) <= 0) {
    showMessage("Enter positive value in all fields!");
  } else {
    const hypoLength = calculateHypotenuse();
    showMessage("The length of hypotenuse is " + hypoLength);
  }
});

function showMessage(msg) {
  message.style.display = "block";
  message.textContent = msg;
}

function calculateHypotenuse() {
  const sumOfSquaresOfSide =
    Math.pow(Number(inputs[0].value), 2) + Math.pow(Number(inputs[1].value), 2);
  return Math.sqrt(sumOfSquaresOfSide);
}
