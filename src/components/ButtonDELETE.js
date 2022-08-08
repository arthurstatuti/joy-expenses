import React, { useContext, useEffect } from "react";
import TravelContext from "../context/TravelContext";

function ButtonDELETE() {
  const { detailedExpense, expenses, setExpenses } = useContext(TravelContext);

  function handleDELETE() {
    localStorage.setItem('detailedExpense', JSON.stringify([]));
    const newExpenses = expenses.filter(expense => expense.id !== detailedExpense.id);
    setExpenses(newExpenses);
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <button
        id="button-delete"
        type="button"
        onClick={handleDELETE}
      >
        DELETE
      </button>
    </div>
  );
}

export default ButtonDELETE;
