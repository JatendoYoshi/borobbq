 const ordersDiv = document.getElementById("orders");

let orders = [
  { id: 1, number: "033", status: "preparing" },
  { id: 2, number: "034", status: "preparing" }
];

function renderStaffOrders() {
  ordersDiv.innerHTML = "";

  orders.forEach(order => {
    const row = document.createElement("div");
    row.className = "order";

    const number = document.createElement("div");
    number.textContent = order.number;

    const bumpBtn = document.createElement("button");
    bumpBtn.textContent = "Bump";
    bumpBtn.onclick = () => bumpOrder(order.id);

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.onclick = () => cancelOrder(order.id);

    row.append(number, bumpBtn, cancelBtn);
    ordersDiv.appendChild(row);
  });
}

function bumpOrder(id) {
  orders = orders.map(o =>
    o.id === id ? { ...o, status: "ready" } : o
  );
  renderStaffOrders();
}

function cancelOrder(id) {
  orders = orders.filter(o => o.id !== id);
  renderStaffOrders();
}

renderStaffOrders();
