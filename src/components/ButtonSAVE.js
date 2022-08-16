import React, { useContext, useEffect, useState } from "react";
import TravelContext from "../context/TravelContext";

function ButtonSAVE() {
  const [disabled, setDisabled] = useState(true);

  const {
    expenses,
    setExpenses,
    what,
    setWhat,
    where,
    setWhere,
    date,
    setDate,
    price,
    setPrice,
    currency,
    setCurrency,
    rate,
    setRate
  } = useContext(TravelContext);

  function handleSAVE() {
    setExpenses(
      [...expenses, {
        "id": Math.random().toFixed(4),
        "what": what,
        "where": where,
        "date": date,
        "price": price,
        "currency": currency,
        "rate": rate,
        "newPrice": price * rate
      }]
    );

    setWhat("");
    setWhere("");
    setDate("");
    setPrice("");
    setCurrency("");
    setRate(0);

    document.getElementById("what").value = "";
    document.getElementById("where").value = "";
    document.getElementById("date").value = "";
    document.getElementById("price").value = "";
    document.getElementById("currency").value = "";
  }

  function toggleButtonSAVE() {
    if (what !== '' && where !== '' && date !== '' && price !== '' && currency !== '') {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  useEffect(() => {
    toggleButtonSAVE();
    // eslint-disable-next-line
  }, [what, where, date, price, currency]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className=" bg-lime-500 border border-yellow-800 rounded-xl py-5 px-5 sm:px-12 sm:text-lg font-bold transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-200 flex justify-center"
      onClick={handleSAVE}>
      <button
        id="button-save"
        type="button"
        disabled={disabled}
      >
        SAVE
      </button>
    </div>
  );
}

export default ButtonSAVE;
