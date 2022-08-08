import React, { useContext, useEffect } from "react";
import TravelContext from "../context/TravelContext";

function ButtonCLEAN() {
  const { expenses, setExpenses } = useContext(TravelContext);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <button
        id="button-clean"
        type="button"
        onClick={() => setExpenses([])}
      >
        CLEAN
      </button>
    </div >
  );
}

export default ButtonCLEAN;
