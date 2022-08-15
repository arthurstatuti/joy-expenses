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
    <div className=" text-gray-700 bg-gray-100 border border-red-300 rounded py-5 px-5 sm:px-12 sm:text-lg font-bold transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-200 flex justify-center">
      <button
        id="button-back"
        type="button"
        onClick={handleBACK}
      >
        BACK
      </button>
    </div>
  );
}

export default ButtonBACK;
