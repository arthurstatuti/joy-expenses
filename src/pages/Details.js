import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import ButtonDELETE from "../components/ButtonDELETE";
import ButtonBACK from "../components/ButtonBACK";
import TravelContext from "../context/TravelContext";

function Details() {
  const { detailedExpense, setDetailedExpense } = useContext(TravelContext);

  useEffect(() => {
    const lcStDetExpense = JSON.parse(localStorage.getItem('detailedExpense'));
    if (lcStDetExpense) {
      setDetailedExpense(lcStDetExpense);
    }
    // eslint-disable-next-line
  }, []);

  if (detailedExpense.length === 0) {
    return (
      <div>
        <Header />
        <h3> NO EXPENSE SELECTED </h3>
        <ButtonBACK />
      </div>
    )
  } else {
    return (
      <div className=" text-gray-700">
        <Header />

        <h2 className=" text-gray-700 bg-gray-100 border-b border-red-300 flex justify-center p-4 font-bold"> EXPENSE DETAILS </h2>

        <div className="flex justify-center font-bold mt-4">
          <h3> WHAT </h3>
        </div>
        <div className="flex justify-center">
          {detailedExpense.what}
        </div>

        <div className="flex justify-center font-bold mt-4">
          <h3> WHERE </h3>
        </div>
        <div className="flex justify-center">
          {detailedExpense.where}
        </div>

        <div className="flex justify-center font-bold mt-4"> {`${detailedExpense.date}`} </div>

        <div className="flex justify-center font-bold mt-4"> {`R$ ${parseFloat(detailedExpense.newPrice).toFixed(2)}`} </div>

        <p className=" text-gray-700 flex justify-center p-4">
          {`Original Price ${detailedExpense.price}`} <br />
          {`Original Currency ${detailedExpense.currency}`} <br />
          {`Exchange Rate ${detailedExpense.rate}`}
        </p>

        <div className="flex justify-evenly mx-12 my-4">
          <ButtonDELETE />
          <ButtonBACK />
        </div>

      </div>
    )
  }
}

export default Details;
