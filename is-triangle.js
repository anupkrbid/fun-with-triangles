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
    if (isTriangle()) {
      showMessage("Yay, these angles form a triangle!");
    } else {
      showMessage("Oh Oh! These angle don't form a triangle!");
    }
  }
});

function showMessage(msg) {
  message.style.display = "block";
  message.textContent = msg;
}

function isTriangle() {
  return calculateSumOfAngles() === 180;
}

function calculateSumOfAngles() {
  return (
    Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value)
  );
}
