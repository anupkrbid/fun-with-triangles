const cp = document.querySelector("#cp");
const quantity = document.querySelector("#quantity");
const sp = document.querySelector("#sp");
const message = document.querySelector("#message");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  message.style.display = "none";

  if (!cp.value || !quantity.value || !sp.value) {
    showMessage("Enter value in all the fields");
  } else {
    // profit
    if (sp.value > cp.value) {
      let profit = sp.value - cp.value;
      let profitPercent = Math.trunc((profit / cp.value) * 100);
      showMessage(
        "Hey, the profit is " +
          profit * quantity.value +
          " and the percent is " +
          profitPercent +
          "%"
      );
    } else {
      let loss = cp.value - sp.value;
      let lossPercent = Math.trunc((loss / cp.value) * 100);
      showMessage(
        "Hey, the loss is " +
          loss * quantity.value +
          " and the percent is " +
          lossPercent +
          "%"
      );
    }
  }
});

function showMessage(msg) {
  message.style.display = "block";
  message.textContent = msg;
}
