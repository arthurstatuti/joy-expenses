import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TravelContext from "../context/TravelContext";

function ButtonBACK() {
  const navigate = useNavigate();
  const {
    setWhat,
    setWhere,
    setDate,
    setPrice,
    setCurrency,
    setRate,
    setDetailedExpense
  } = useContext(TravelContext);

  function handleBACK() {
    localStorage.setItem('detailedExpense', JSON.stringify([]));

    setWhat("");
    setWhere("");
    setDate("");
    setPrice("");
    setCurrency("");
    setRate(0);
    setDetailedExpense([]);
    navigate('/');
  }

  return (
    <div>
      <button
        className=" bg-yellow-400 hover:bg-yellow-700 hover:text-white border border-yellow-800 rounded-xl py-5 px-5 md:px-10 font-bold hover:cursor-pointer shadow-sm hover:shadow-md transition ease-out duration-100 flex justify-center"
        id="button-back"
        type="button"
        onClick={handleBACK}
      >
        VOLTAR
      </button>
    </div>
  );
}

export default ButtonBACK;
