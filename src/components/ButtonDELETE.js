import React, { useContext, useEffect, useState } from "react";
import TravelContext from "../context/TravelContext";

function ButtonDELETE() {
  const [disabled, setDisabled] = useState(true);
  const { detailedExpense, expenses, setExpenses } = useContext(TravelContext);

  function handleDELETE() {
    localStorage.setItem('detailedExpense', JSON.stringify([]));
    const newExpenses = expenses.filter(expense => expense.id !== detailedExpense.id);
    setExpenses(newExpenses);
    setDisabled(true);
    alert('Despesa excluída com sucesso!');
  }

  useEffect(() => {
    if (expenses.length !== 0) {
      setDisabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <button
        className=" bg-red-400 enabled:hover:bg-yellow-700 enabled:hover:text-white border border-yellow-800 rounded-xl py-5 px-5 md:px-10 font-bold hover:cursor-pointer shadow-sm hover:shadow-md transition ease-out duration-100 flex justify-center disabled:opacity-25 disabled:cursor-not-allowed"
        id="button-delete"
        type="button"
        disabled={disabled}
        onClick={handleDELETE}
      >
        EXCLUIR
      </button>
    </div>
  );
}

export default ButtonDELETE;
