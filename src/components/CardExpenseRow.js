import React from "react";
import PropTypes from 'prop-types';
import ButtonDETAILS from "../components/ButtonDETAILS";

function CardExpenseRow({ expense }) {
  return (
    <div>

      <div>
        {`R$ ${parseFloat(expense.newPrice).toFixed(2)}`}
      </div>

      <div>
        {`${expense.date}`}
      </div>

      <div>
        <ButtonDETAILS expense={expense} />
      </div>

    </div>
  )
}

CardExpenseRow.propTypes = {
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

export default CardExpenseRow;
