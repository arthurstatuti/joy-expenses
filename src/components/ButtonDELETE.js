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
    <div className=" bg-red-400 border border-yellow-800 rounded-xl py-5 px-2 md:px-8 font-bold hover:cursor-pointer transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-500 flex justify-center">
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
