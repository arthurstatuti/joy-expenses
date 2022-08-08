import PropTypes from 'prop-types';
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TravelContext from "../context/TravelContext";

function ButtonDETAILS({ expense }) {
  const navigate = useNavigate();
  const { setDetailedExpense } = useContext(TravelContext);

  const handleDETAILS = () => {
    localStorage.setItem('detailedExpense', JSON.stringify(expense));
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

ButtonDETAILS.propTypes = {
  expense: PropTypes.shape({
    "id": PropTypes.string,
    "what": PropTypes.string,
    "where": PropTypes.string,
    "date": PropTypes.string,
    "price": PropTypes.string,
    "currency": PropTypes.string,
    "rate": PropTypes.number,
    "newPrice": PropTypes.number,
  }),
}

export default ButtonDETAILS;
