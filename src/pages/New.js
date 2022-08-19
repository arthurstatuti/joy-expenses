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

        <h2 className=" bg-gray-100 border-b border-yellow-800 flex justify-center p-4 font-bold"> NOVA DESPESA</h2>

        <form>

          <label htmlFor="what">
            <div className="flex justify-center font-bold mt-4">
              O QUÊ
            </div>
            <div className="flex justify-center">
              <input
                className=" w-80 bg-inherit border-b border-yellow-800 mx-8 my-2 text-center"
                id="what"
                type="text"
                onChange={(event) => setWhat(event.target.value)}
              />
            </div>
          </label>

          <label htmlFor="where">
            <div className="flex justify-center font-bold mt-4">
              ONDE
            </div>
            <div className="flex justify-center">
              <input
                className=" w-80 bg-inherit border-b border-yellow-800 mx-8 my-2 text-center"
                id="where"
                type="text"
                onChange={(event) => setWhere(event.target.value)}
              />
            </div>
          </label>

          <label htmlFor="date">
            <div className="flex justify-center font-bold mt-4">
              QUANDO
            </div>
            <div className="flex justify-center">
              <input
                className=" w-80 text-center bg-inherit border-b border-yellow-800 mx-8 my-2"
                id="date"
                type="date"
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
          </label>

          <label htmlFor="price">
            <div className="flex justify-center font-bold mt-4">
              PREÇO
            </div>
            <div className="flex justify-center">
              <input
                className=" w-80 bg-inherit border-b border-yellow-800 mx-8 my-2 text-center"
                id="price"
                type="number"
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
          </label>

          <label htmlFor="currency">
            <div className="flex justify-center font-bold mt-4">
              MOEDA
            </div>
            <div className="flex justify-center">
              <select
                className=" w-80 text-center bg-inherit border-b border-yellow-800 mx-8 my-2 px-24 py-1"
                id="currency"
                onChange={setCurrencyAndSetRate}
              >
                {currencies.map(currency => <option key={currency}> {currency} </option>)}
              </select>
            </div>
          </label>

        </form>

        <div className="flex justify-evenly mx-12 my-4">
          <ButtonSAVE />
          <ButtonBACK />
        </div>

      </div>
    )
  }
}

export default Add;
