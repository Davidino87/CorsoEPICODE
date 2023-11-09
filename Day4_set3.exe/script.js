document.addEventListener("DOMContentLoaded", function () {
  const tombolaContainer = document.getElementById("tombola-container");
  const table = document.createElement("table");
  table.setAttribute("id", "tombola-table");

  let number = 1;

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");

    for (let j = 1; j <= 8; j++) {
      const cell = document.createElement("td");
      cell.textContent = number++;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  tombolaContainer.appendChild(table);
});
