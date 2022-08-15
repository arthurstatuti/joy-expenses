import React, { useContext } from "react";
import TravelContext from "../context/TravelContext";

function Header() {
  const { expenses } = useContext(TravelContext);
  const total = expenses.reduce((accumulator, expense) => {
    return accumulator + expense.newPrice;
  }, 0);
  const totalBrFormat = total.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });

  return (
    <div className=" text-gray-700 bg-gray-100 border-b border-red-300 flex justify-between items-center px-6 py-4 text-lg sm:text-xl font-bold ">

      <h1 className="flex items-center px-4"> TRAVEL <br /> EXPENSES </h1>

      <h1 className="flex items-end text-lg sm:text-xl px-4 py-1">
        {totalBrFormat}
      </h1>

    </div>

  );
}

export default Header;
