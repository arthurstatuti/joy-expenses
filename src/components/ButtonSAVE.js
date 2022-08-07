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
    when,
    setWhen,
    price,
    setPrice,
    currency,
    setCurrency,
    rate,
    setRate,
  } = useContext(TravelContext);

  const [disabled, setDisabled] = useState(true);

  function toggleButtonSAVE() {
    if (what !== '' && where !== '' && when !== '' && price !== '' && currency !== '') {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  };

  useEffect(() => {
    toggleButtonSAVE(); // eslint-disable-next-line
  }, [what, where, when, price, currency]);

  function handleSave() {
    setExpenses(
      [...expenses, {
        "what": what,
        "where": where,
        "when": when,
        "price": price,
        "currency": currency,
        "rate": rate,
        "newPrice": price * rate
      }]
    );
    setWhat("");
    setWhere("");
    setWhen("");
    setPrice("");
    setCurrency("");
    setRate("rate");
    document.getElementById("what").value = "";
    document.getElementById("where").value = "";
    document.getElementById("when").value = "";
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
