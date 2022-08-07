import React, { useContext } from "react";
import ButtonBACK from "../components/ButtonBACK";
import ButtonSAVE from "../components/ButtonSAVE";
import Header from "../components/Header";
import TravelContext from "../context/TravelContext";

function Add() {
  const {
    currenciesData,
    setWhat,
    setWhere,
    setDay,
    setMonth,
    setYear,
    setPrice,
    setCurrency,
    setRate,
  } = useContext(TravelContext);

  const currencies = Object.keys(currenciesData[0]);

  function setCurrencyAndSetRate({ target: { value } }) {
    if (value === '') {
      setCurrency("");
      setRate("rate");
    } else {
      setCurrency(value);
      const rate = parseFloat(currenciesData[0][value].ask);
      setRate(rate);
    }

  }

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

        <label htmlFor="day"> WHEN </label>
        <input
          id="day"
          type="number"
          placeholder="DAY"
          onChange={(event) => setDay(event.target.value)}
        >
        </input>
        <input
          id="month"
          type="number"
          placeholder="MONTH"
          onChange={(event) => setMonth(event.target.value)}
        >
        </input>
        <input
          id="year"
          type="number"
          placeholder="YEAR"
          onChange={(event) => setYear(event.target.value)}
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
          <option></option>
          {currencies.map(currency => <option key={currency}> {currency} </option>)}
        </select>
        <p></p>

      </form>

      <ButtonSAVE />

      <ButtonBACK />
    </div>
  )
}

export default Add;
