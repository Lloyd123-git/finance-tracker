import React, { useState } from 'react';

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
    <div style= {{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '0 20px',
      fontFamily: 'sans-serif'
    }}>

      {/* Placeholder components where modular files will go next */}
      <div className = "balance-summary-box" 
        style = {{
        background: '#f4f4f4',
        padding: '15px',
        borderRadius: '8px'
      }}>
      <h3>Your Balance Summary (Placeholder)</h3>
      <p>Total Items Tracked: {transactions.length}</p>
      </div>

      <div className="transaction-form-box" 
      style={{
        margin: '20px 0'
      }}>
        <h3>Add New Transaction (Placeholder) </h3>
      </div>

      <div className="transaction-list-box">
        <h3>History (Placeholder)</h3>
        <ul>
          {transactions.map(item => (
            <li key = {item.id}>
              {item.description} : {item.type === 'expense' ? '-' : '+'}${item.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;