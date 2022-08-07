import React, { useContext } from "react";
import TravelContext from "../context/TravelContext";

function Header() {
  const { expenses } = useContext(TravelContext);
  const total = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.newPrice;
  }, 0);

  return (
    <div>
      <h1> TRAVEL EXPENSES </h1>
      <h3> TOTAL: R$ {parseFloat(total).toFixed(2)} </h3>
    </div>

  );
}

export default Header;
