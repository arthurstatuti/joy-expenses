import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import fetchCurrenciesData from '../api/CurrenciesDataApi';
import TravelContext from "./TravelContext";

function TravelProvider({ children }) {
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("rate");
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState("total");
  const [currenciesData, setCurrenciesData] = useState(["currenciesData"]);

  async function getCurrenciesData() {
    const currenciesData = await fetchCurrenciesData();
    setCurrenciesData(currenciesData);
  }

  useEffect(() => {
    getCurrenciesData(); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(currenciesData);
  }, [currenciesData]);

  const contextValue = {
    getCurrenciesData,
    currenciesData,
    setCurrenciesData,
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
    expenses,
    setExpenses,
    total,
    setTotal
  }

  return (
    <TravelContext.Provider value={contextValue}>
      {children}
    </TravelContext.Provider>
  );
}

TravelProvider.propTypes = {
  children: PropTypes.element,
}

export default TravelProvider;
