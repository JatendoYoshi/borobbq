const preparingDiv = document.getElementById("preparing");
const readyDiv = document.getElementById("ready");

// TEMP DATA (will come from Firebase later)
const orders = [
  { number: "033", status: "preparing" },
  { number: "034", status: "preparing" },
  { number: "035", status: "ready" }
];

function renderOrders() {
  preparingDiv.innerHTML = "";
  readyDiv.innerHTML = "";

  orders.forEach(order => {
    const div = document.createElement("div");
    div.className = "order";
    div.textContent = order.number;

    if (order.status === "preparing") {
      preparingDiv.appendChild(div);
    } else {
      readyDiv.appendChild(div);
    }
  });
}

renderOrders();
