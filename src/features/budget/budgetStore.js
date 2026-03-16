import { getCurrentEvent } from "../events/eventStore.js";

export function setBudget(total) {
  const event = getCurrentEvent();
  if (!event) return;

  event.budget = total;
}

export function addExpense(title, amount) {
  const event = getCurrentEvent();
  if (!event) return;

  if (!event.expenses) {
    event.expenses = [];
  }

  const newExpense = {
    id: Date.now(),
    title,
    amount: Number(amount)
  };

  event.expenses.push(newExpense);

  return newExpense;
}

export function getExpenses() {
  const event = getCurrentEvent();

  if (!event || !event.expenses) {
    return [];
  }

  return event.expenses;
}

export function getBudgetSummary() {
  const event = getCurrentEvent();
  if (!event) return null;

  const expenses = event.expenses || [];

  const spent = expenses.reduce((sum, e) => sum + e.amount, 0);

  return {
    totalBudget: event.budget || 0,
    totalSpent: spent,
    remaining: (event.budget || 0) - spent
  };
}