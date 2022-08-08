import React from "react";
import PropTypes from 'prop-types';
import ButtonDETAILS from "../components/ButtonDETAILS";

function CardExpenseRow({ expense }) {
  return (
    <div>
      <span> {`R$ ${parseFloat(expense.newPrice).toFixed(2)}`} </span>
      <span> {`${expense.day}/${expense.month}/${expense.year}`} </span>
      <ButtonDETAILS expense={expense} />
    </div>
  )
}

CardExpenseRow.propTypes = {
  expense: PropTypes.shape({
    "id": PropTypes.string,
    "what": PropTypes.string,
    "where": PropTypes.string,
    "day": PropTypes.string,
    "month": PropTypes.string,
    "year": PropTypes.string,
    "price": PropTypes.string,
    "currency": PropTypes.string,
    "rate": PropTypes.number,
    "newPrice": PropTypes.number,
  }),
}

export default CardExpenseRow;
