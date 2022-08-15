import React, { useContext } from "react";
import TravelContext from "../context/TravelContext";

function Header() {
  const { expenses } = useContext(TravelContext);
  const total = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.newPrice;
  }, 0);

  return (
    <div className=" text-gray-700 bg-gray-100 border-b border-red-400 flex justify-between px-6 py-4 text-lg sm:text-xl font-bold ">
      <h1 className=" flex items-center px-4"> TRAVEL <br /> EXPENSES </h1>
      <h1 className=" flex items-end text-xl px-4 py-1"> R$ {parseFloat(total).toFixed(2)} </h1>
    </div>

  );
}

export default Header;
