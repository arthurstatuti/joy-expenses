import React, { useContext, useEffect } from "react";
import TravelContext from "../context/TravelContext";

function ButtonCLEAN() {
  const { expenses, setExpenses } = useContext(TravelContext);

  function handleCLEAN() {
    setExpenses([])
    alert('Despesa salva com sucesso!');
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <button
        className=" bg-red-400 hover:bg-yellow-700 hover:text-white border border-yellow-800 rounded-xl py-5 px-4 md:px-8 font-bold hover:cursor-pointer shadow-sm hover:shadow-md transition ease-out duration-100 flex justify-center"
        id="button-clean"
        type="button"
        onClick={handleCLEAN}
      >
        LIMPAR
      </button>
    </div >
  );
}

export default ButtonCLEAN;
