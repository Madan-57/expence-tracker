import React, { useState } from "react";

const ExpenseForm = ({ groupMembers, setExpenses, expenses }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [payer, setPayer] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    if (description.trim() && amount && payer) {
      setExpenses([...expenses, { description, amount: parseFloat(amount), payer }]);
      setDescription("");
      setAmount("");
      setPayer("");
    }
  };

  return (
    <React.Fragment>
      <h2>➕ Add Expense</h2>
      <form onSubmit={addExpense} className="form">
        <input
          type="text"
          placeholder="What was this expense for?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="$ Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input"
        />
        <select
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
          className="input"
        >
          <option value="">Select who paid</option>
          {groupMembers.map((member, index) => (
            <option key={index} value={member}>
              {member}
            </option>
          ))}
        </select>
        <button type="submit" className="button">
          Add Expense
        </button>
      </form>
    </React.Fragment>
  );
};

export default ExpenseForm;
