import React, { useContext } from "react";
import Header from "../components/Header";
import ButtonDELETE from "../components/ButtonDELETE";
import ButtonBACK from "../components/ButtonBACK";
import TravelContext from "../context/TravelContext";

function Details() {
  const { detailedExpense } = useContext(TravelContext);

  return (
    <div>
      <Header />
      <h2> EXPENSE DETAILS </h2>

      <h3> WHAT </h3>
      {detailedExpense.what}

      <h3> WHERE </h3>
      {detailedExpense.where}

      <p></p>

      <span> {`R$ ${parseFloat(detailedExpense.newPrice).toFixed(2)}`} </span>
      <span> {`${detailedExpense.day}/${detailedExpense.month}/${detailedExpense.year}`} </span>

      <p>
        {`Original Price ${detailedExpense.price}`} <br />
        {`Original Currency ${detailedExpense.currency}`} <br />
        {`Exchange Rate ${detailedExpense.rate}`}
      </p>

      <ButtonDELETE />
      <ButtonBACK />
    </div>
  )
}

export default Details;
