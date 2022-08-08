import React, { useContext } from "react";
import Header from "../components/Header";
import ButtonSAVE from "../components/ButtonSAVE";
import ButtonBACK from "../components/ButtonBACK";
import TravelContext from "../context/TravelContext";

function Add() {
  const {
    currenciesData,
    setWhat,
    setWhere,
    setDate,
    setPrice,
    setCurrency,
    setRate,
  } = useContext(TravelContext);

  function setCurrencyAndSetRate({ target: { value } }) {
    if (value === '') {
      setCurrency("");
      setRate("rate");
    } else if (value === "BRL") {
      setCurrency("BRL");
      setRate(1);
    } else {
      setCurrency(value);
      const rate = parseFloat(currenciesData[0][value].ask);
      setRate(rate);
    }
  }

  if (currenciesData.length === 0) {
    return (
      "loading..."
    )
  } else {
    const currencyKeys = Object.keys(currenciesData[0]);
    currencyKeys.push("");
    currencyKeys.push("BRL");

    const sortedCurrencyKeys = [...currencyKeys].sort();
    const currencies = sortedCurrencyKeys;

    return (
      <div>
        <Header />

        <h2> ADD NEW EXPENSE</h2>

        <form>

          <label htmlFor="what"> WHAT </label>
          <input
            id="what"
            type="text"
            onChange={(event) => setWhat(event.target.value)}
          >
          </input>
          <p></p>

          <label htmlFor="where"> WHERE </label>
          <input
            id="where"
            type="text"
            onChange={(event) => setWhere(event.target.value)}
          >
          </input>
          <p></p>

          <label htmlFor="date"> DATE </label>
          <input
            id="date"
            type="date"
            onChange={(event) => setDate(event.target.value)}
          >
          </input>
          <p></p>

          <label htmlFor="price"> PRICE </label>
          <input
            id="price"
            type="number"
            onChange={(event) => setPrice(event.target.value)}
          >
          </input>
          <p></p>

          <label htmlFor="currency"> CURRENCY </label>
          <select
            id="currency"
            onChange={setCurrencyAndSetRate}
          >
            {currencies.map(currency => <option key={currency}> {currency} </option>)}
          </select>
          <p></p>

        </form>

        <ButtonSAVE />

        <ButtonBACK />
      </div>
    )
  }
}

export default Add;
