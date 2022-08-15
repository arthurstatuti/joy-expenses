import React from "react";
import PropTypes from 'prop-types';
import ButtonDETAILS from "../components/ButtonDETAILS";

function CardExpenseRow({ expense }) {
  const date = expense.date;
  const dateSplit = date.split('-');
  const dateBr = `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`;

  return (
    <div className=" text-gray-700 border-b border-red-300 my-7 transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-500 grid grid-cols-3">

      <div className=" font-bold ml-4">
        {`R$ ${parseFloat(expense.newPrice).toFixed(2)}`}
      </div>

      <div className=" flex justify-center ml-20">
        {`${dateBr}`}
      </div>

      <div className=" flex justify-center ml-10">
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
