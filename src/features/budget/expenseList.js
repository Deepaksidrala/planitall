export function createExpenseList(expenses) {
  const list = document.createElement("ul");

  expenses.forEach((expense) => {
    const item = document.createElement("li");

    item.textContent = `${expense.title} - ₹${expense.amount}`;

    list.appendChild(item);
  });

  return list;
}