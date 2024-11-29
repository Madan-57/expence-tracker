import React, { useState } from "react";
import GroupForm from "./Components/GroupForm";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseSummary from "./Components/ExpenseSummary";
import "./App.css";

const App = () => {
  const [groupMembers, setGroupMembers] = useState([]);
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="app">
      <header className="header">
        <h1>💰 Expense Splitter</h1>
      </header>
      <div className="container">
        {/* Group Members */}
        <div className="card">
          <GroupForm setGroupMembers={setGroupMembers} groupMembers={groupMembers} />
        </div>

        {/* Recent Expenses */}
        <div className="card">
          <h2>📜 Recent Expenses</h2>
          {expenses.length === 0 ? (
            <p className="placeholder">No expenses added yet</p>
          ) : (
            <ul>
              {expenses.map((expense, index) => (
                <li key={index}>
                  {expense.description}: ${expense.amount}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Add Expense */}
        <div className="card">
          <ExpenseForm
            groupMembers={groupMembers}
            setExpenses={setExpenses}
            expenses={expenses}
          />
        </div>

        {/* Settlement Summary */}
        <div className="card">
          <ExpenseSummary groupMembers={groupMembers} expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
