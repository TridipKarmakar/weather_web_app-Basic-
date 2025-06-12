document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseName = document.getElementById("expense-name");
  const expenseAmount = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalDisplayAmount = document.getElementById("total-amount");

  const expense = [];

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value.trim());
    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = { id: Date.now(), name: name, amount: amount };
      expense.push(newExpense);
      updateTotal();
      renderExpenses();
    }
  });

  function renderExpenses() {
    expenseList.innerHTML = "";
    expense.forEach((element) => {
      const li = document.createElement("li");
      li.innerHTML = `${element.name} - $${element.amount} <button type="delete">delete</button>`;
      expenseList.appendChild(li);
    });
  }

  function updateTotal() {
    let totalAmount = 0;
    expense.forEach((element) => {
      totalAmount = totalAmount + parseFloat(element.amount);
    });
    totalDisplayAmount.innerHTML = "";
    totalDisplayAmount.innerHTML = `${totalAmount}`;
  }
});
