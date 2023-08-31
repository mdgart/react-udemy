import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formVisible, setformVisible] = useState(false);
  const hideForm = () => {
    setformVisible(true)
  }
  const showForm = () => {
    setformVisible(false)
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {formVisible ? (
        <ExpenseForm onCancelClick={showForm} onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={hideForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
