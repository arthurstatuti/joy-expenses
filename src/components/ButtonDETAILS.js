import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TravelContext from "../context/TravelContext";

function ButtonDETAILS() {
  const navigate = useNavigate();
  const { setDetailedExpense } = useContext(TravelContext);

  const handleDETAILS = ({ expense }) => {
    setDetailedExpense(expense);
    navigate('/details');
  };

  return (
    <div>
      <button
        id="button-details"
        type="button"
        onClick={handleDETAILS}
      >
        DETAILS
      </button>
    </div>
  );
}

export default ButtonDETAILS;