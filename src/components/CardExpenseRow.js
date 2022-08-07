import React from "react";
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

export default CardExpenseRow;
