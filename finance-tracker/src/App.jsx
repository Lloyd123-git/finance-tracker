import React, { useState } from 'react';
import './index.css';

function App() {
  //This array will store all transaction objects
  const [transactions, setTransactions] = useState ([
    // Temporary data to test inital layout render
    {
      id: 1, 
      description: 'Paycheck',
      amount: 2500,
      type: 'income'
     },
    {
      id: 2, 
      description: 'Electric Bill',
      amount: 120,
      type: 'expense'
    }
  ]);

  return (
    <div className = "container">

      {/* Placeholder components where modular files will go next */}
      <div className = "balance-summary-box">
        <h3>Your Balance Summary</h3>
        <p>Total Items Tracked: {transactions.length}</p>
      </div>

      <div className="transaction-form-box">
        <h3>Add New Transaction (Placeholder) </h3>
      </div>

      <div className="transaction-list-box">
        <h3>History (Placeholder)</h3>
        <ul>
          {transactions.map(item => (
            <li 
              key = {item.id} 
              className = {item.type === 'expense' ? 'expense-item' : 'income-item'}
            >
              <span>{item.description}</span>
              <span>{item.type === 'expense' ? '-' : '+'}${item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;