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
    <div className=" text-white bg-purple-600 border-b border-yellow-800 flex justify-between items-center px-6 py-4 text-lg font-bold ">

      <h1 className="flex items-center px-4"> TRAVEL <br /> EXPENSES </h1>

      <h1 className="flex items-end px-4 py-1">
        {totalBrFormat}
      </h1>

    </div>

  );
}

export default Header;
