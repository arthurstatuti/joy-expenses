import React, { useContext } from "react";
import TravelContext from "../context/TravelContext";

function Header() {
  const { expenses } = useContext(TravelContext);
  const total = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.newPrice;
  }, 0);

  return (
    <div className="flex justify-between m-4">
      <h1> TRAVEL EXPENSES </h1>
      <h3> R$ {parseFloat(total).toFixed(2)} </h3>
    </div>

  );
}

export default Header;
