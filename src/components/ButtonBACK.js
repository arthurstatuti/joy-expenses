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
    <div className=" bg-yellow-400 border border-yellow-800 rounded-xl py-5 px-5 md:px-10 font-bold hover:cursor-pointer transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-500 flex justify-center"
      onClick={handleBACK}>
      <button
        id="button-back"
        type="button"
      >
        BACK
      </button>
    </div>
  );
}

export default ButtonBACK;
