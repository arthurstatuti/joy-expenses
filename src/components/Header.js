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
    <div>

      <div>
        <h1 className=" italic text-white bg-purple-600 border-b border-yellow-800 flex justify-center items-center px-6 py-4 text-lg font-bold "
        > JOY EXPENSES
        </h1>
      </div>

      <div className=" flex justify-center items-center text-white bg-purple-600 border-b border-yellow-800 py-4 text-lg font-bold ">

        <h1 className=" ">
          <div className=" flex justify-start"> Despesa </div>
          <div className=" flex justify-end"> Total: </div>
        </h1>

        <h1 className=" pl-10 py-1">
          {totalBrFormat}
        </h1>

      </div>

    </div>

  );
}

export default Header;
