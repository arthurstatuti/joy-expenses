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
    setWhen,
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
        <br></br>

        <label htmlFor="where"> WHERE </label>
        <input
          id="where"
          type="text"
          onChange={(event) => setWhere(event.target.value)}
        >
        </input>
        <br></br>

        <label htmlFor="when"> WHEN </label>
        <input
          id="when"
          type="text"
          onChange={(event) => setWhen(event.target.value)}
        >
        </input>
        <br></br>

        <label htmlFor="price"> PRICE </label>
        <input
          id="price"
          type="text"
          onChange={(event) => setPrice(event.target.value)}
        >
        </input>
        <br></br>

        <label htmlFor="currency"> CURRENCY </label>
        <select
          id="currency"
          onChange={setCurrencyAndSetRate}
        >
          <option></option>
          {
            currencies.map(currency => <option key={currency}> {currency} </option>)
          }
        </select>

      </form>

      <ButtonSAVE />

      <ButtonBACK />
    </div>
  )
}

export default Add;
