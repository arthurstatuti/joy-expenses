import React from "react";
import PropTypes from 'prop-types';
import ButtonDETAILS from "../components/ButtonDETAILS";

function CardExpenseRow({ expense }) {
  const date = expense.date;
  const dateSplit = date.split('-');
  const yearBrFormat = dateSplit[0].slice(2);
  const dateBrFormat = `${dateSplit[2]}/${dateSplit[1]}/${yearBrFormat}`;

  const newPrice = expense.newPrice;
  const newPriceBrFormat = newPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

  return (
    <div className=" text-gray-700 border-b border-red-300 my-7 transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-500 grid grid-cols-3 text-sm">

      <div className=" font-bold">
        {`${dateBrFormat}`}
      </div>

      <div className="flex justify-start font-bold">
        {newPriceBrFormat}
      </div>

      <div className=" flex justify-center">
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
