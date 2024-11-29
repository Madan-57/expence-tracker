import React from "react";

const calculateBalances = (groupMembers, expenses) => {
  const balances = groupMembers.reduce((acc, member) => {
    acc[member] = 0;
    return acc;
  }, {});

  expenses.forEach(({ amount, payer }) => {
    const share = amount / groupMembers.length;
    groupMembers.forEach((member) => {
      if (member === payer) balances[member] += amount - share;
      else balances[member] -= share;
    });
  });

  return balances;
};

const ExpenseSummary = ({ groupMembers, expenses }) => {
  const balances = calculateBalances(groupMembers, expenses);

  return (
    <React.Fragment>
      <h2>🗓️ Settlement Summary</h2>
      <ul>
        {Object.entries(balances).map(([member, balance]) => (
          <li key={member}>
            {member}:{" "}
            {balance > 0
              ? `owes $${balance.toFixed(2)}`
              : `is owed $${(-balance).toFixed(2)}`}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ExpenseSummary;
