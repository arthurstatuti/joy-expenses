import React, { useEffect, useContext, useState } from "react";
import TravelContext from "../context/TravelContext";

function ButtonSAVE() {
  const {
    expenses,
    setExpenses,
    what,
    setWhat,
    where,
    setWhere,
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    price,
    setPrice,
    currency,
    setCurrency,
    rate,
    setRate,
  } = useContext(TravelContext);

  const [disabled, setDisabled] = useState(true);

  function toggleButtonSAVE() {
    if (what !== '' && where !== '' && day !== '' && month !== '' && year !== '' && price !== '' && currency !== '') {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  useEffect(() => {
    toggleButtonSAVE(); // eslint-disable-next-line
  }, [what, where, day, month, year, price, currency]);

  function handleSave() {
    setExpenses(
      [...expenses, {
        "what": what,
        "where": where,
        "day": day,
        "month": month,
        "year": year,
        "price": price,
        "currency": currency,
        "rate": rate,
        "newPrice": price * rate
      }]
    );
    setWhat("");
    setWhere("");
    setDay("");
    setMonth("");
    setYear("");
    setPrice("");
    setCurrency("");
    setRate("rate");

    document.getElementById("what").value = "";
    document.getElementById("where").value = "";
    document.getElementById("day").value = "";
    document.getElementById("month").value = "";
    document.getElementById("year").value = "";
    document.getElementById("price").value = "";
    document.getElementById("currency").value = "";
  }

  return (
    <div>
      <button
        id="button-save"
        type="button"
        disabled={disabled}
        onClick={handleSave}
      >
        SAVE
      </button>
    </div>
  );
}

export default ButtonSAVE;
