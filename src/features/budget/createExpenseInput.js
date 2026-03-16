import { addExpense } from "./budgetStore.js";

export function createExpenseInput(onExpenseAdded) {
  const container = document.createElement("div");

  const nameInput = document.createElement("input");
  nameInput.placeholder = "Expense name";

  const amountInput = document.createElement("input");
  amountInput.type = "number";
  amountInput.placeholder = "Amount";

  const button = document.createElement("button");
  button.textContent = "Add Expense";

  button.addEventListener("click", () => {
    const title = nameInput.value.trim();
    const amount = amountInput.value;

    if (!title || !amount) return;

    addExpense(title, amount);

    nameInput.value = "";
    amountInput.value = "";

    if (onExpenseAdded) {
      onExpenseAdded();
    }
  });

  container.appendChild(nameInput);
  container.appendChild(amountInput);
  container.appendChild(button);

  return container;
}