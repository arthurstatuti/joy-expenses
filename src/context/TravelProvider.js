import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import fetchCurrencies from '../api/CurrenciesApi';
import TravelContext from "./TravelContext";

function TravelProvider({ children }) {
  const [currencies, setCurrencies] = useState([]);
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("date");
  const [originalPrice, setOriginalPrice] = useState(24);
  const [originalCurrency, setOriginalCurrency] = useState("");
  const [convertionRate, setConversionRate] = useState(5);
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(2500);

  async function getCurrencies() {
    const currenciesData = await fetchCurrencies();
    console.log(currenciesData);
    setCurrencies(currenciesData);
  }

  useEffect(() => {
    getCurrencies();
    // eslint-disable-next-line
  }, []);

  const contextValue = {
    getCurrencies,
    currencies,
    setCurrencies,
    what,
    setWhat,
    where,
    setWhere,
    when,
    setWhen,
    originalPrice,
    setOriginalPrice,
    originalCurrency,
    setOriginalCurrency,
    convertionRate, setConversionRate,
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
