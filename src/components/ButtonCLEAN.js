import React, { useContext, useEffect } from "react";
import TravelContext from "../context/TravelContext";

function ButtonCLEAN() {
  const { expenses, setExpenses } = useContext(TravelContext);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className=" bg-red-400 border border-yellow-800 rounded-xl py-5 px-4 sm:px-12 sm:text-lg font-bold transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-200">
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
