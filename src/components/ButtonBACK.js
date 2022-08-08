import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TravelContext from "../context/TravelContext";

function ButtonBACK() {
  const navigate = useNavigate();
  const {
    setWhat,
    setWhere,
    setDay,
    setMonth,
    setYear,
    setPrice,
    setCurrency,
    setRate,
    setDetailedExpense
  } = useContext(TravelContext);

  function handleBACK() {
    setWhat("");
    setWhere("");
    setDay("");
    setMonth("");
    setYear("");
    setPrice("");
    setCurrency("");
    setRate(0);
    setDetailedExpense([]);
    navigate('/');
  }

  return (
    <div>
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
