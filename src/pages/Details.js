import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import ButtonDELETE from "../components/ButtonDELETE";
import ButtonBACK from "../components/ButtonBACK";
import TravelContext from "../context/TravelContext";

function Details() {
  const { detailedExpense, setDetailedExpense } = useContext(TravelContext);

  const date = detailedExpense.date;
  const dateSplit = date.split('-');
  const yearBrFormat = dateSplit[0].slice(2);
  const dateBrFormat = `${dateSplit[2]}/${dateSplit[1]}/${yearBrFormat}`;

  const newPrice = detailedExpense.newPrice;
  const newPriceBrFormat = newPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  useEffect(() => {
    const lcStDetExpense = JSON.parse(localStorage.getItem('detailedExpense'));
    if (lcStDetExpense) {
      setDetailedExpense(lcStDetExpense);
    }
    // eslint-disable-next-line
  }, []);

  if (detailedExpense.length === 0) {
    return (
      <div className=" text-gray-700">
        <Header />
        <h3 className="flex justify-center font-bold text-lg m-20"> NO EXPENSE SELECTED </h3>

        <div className="flex justify-evenly mx-12 my-4">
          <ButtonBACK />
        </div>
      </div>
    )
  } else {
    return (
      <div className=" text-gray-700 text-lg">
        <Header />

        <h2 className=" text-gray-700 bg-gray-100 border-b border-red-300 flex justify-center p-4 font-bold"> EXPENSE DETAILS </h2>

        <div className="flex justify-center font-bold mx-4 mt-8">
          <h3> WHAT </h3>
        </div>
        <div className="flex justify-center">
          {detailedExpense.what}
        </div>

        <div className="flex justify-center font-bold mx-4 mt-8">
          <h3> WHERE </h3>
        </div>
        <div className="flex justify-center">
          {detailedExpense.where}
        </div>

        <div className=" text-2xl flex justify-center font-bold mx-4 mt-16"> {newPriceBrFormat} </div>

        <div className="flex justify-center mx-4 mt-1"> {`${dateBrFormat}`} </div>

        <p className=" text-gray-700 flex justify-center p-4 m-10 mb-8">
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
