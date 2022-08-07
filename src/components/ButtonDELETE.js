import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TravelContext from "../context/TravelContext";

function ButtonDELETE() {
  const navigate = useNavigate();
  const { detailedExpense, setDetailedExpense, expenses, setExpenses } = useContext(TravelContext);

  function handleDELETE() {
    const newExpenses = expenses.filter(expense => expense.id !== detailedExpense.id);
    setExpenses(newExpenses);
    setDetailedExpense("detailedExpense");
    navigate('/');
  }

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
