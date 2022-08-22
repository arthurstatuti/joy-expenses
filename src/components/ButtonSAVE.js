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

    alert('Despesa salva com sucesso!');
  }

  function toggleButtonSAVE() {
    if (what !== "" && where !== "" && date !== "" && price !== "" && currency !== "") {
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
    <div>
      <button
        className=" bg-lime-500 enabled:hover:bg-yellow-700 enabled:hover:text-white border border-yellow-800 rounded-xl py-5 px-5 md:px-10 font-bold hover:cursor-pointer shadow-sm hover:shadow-md transition ease-out duration-100 flex justify-center disabled:opacity-25 disabled:cursor-not-allowed"
        id="button-save"
        type="button"
        disabled={disabled}
        onClick={handleSAVE}
      >
        SALVAR
      </button>
    </div>
  );
}

export default ButtonSAVE;
