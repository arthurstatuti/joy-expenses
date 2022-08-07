import React, { useState } from "react";
import PropTypes from 'prop-types';
import fetchCurrencies from '../api/CurrenciesApi';
import TravelContext from "./TravelContext";

function TravelProvider({ children }) {
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const [when, setWhen] = useState("date");
  const [originalPrice, setOriginalPrice] = useState(parseFloat(24).toFixed(2));
  const [originalCurrency, setOriginalCurrency] = useState("");
  
  const [currencies, setCurrencies] = useState([]);
  const [conversionRate, setConversionRate] = useState(parseFloat(5).toFixed(2));
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(parseFloat(2500).toFixed(2));

  async function getCurrencies() {
    const currenciesData = await fetchCurrencies();
    console.log(currenciesData);
    setCurrencies(currenciesData);
  }

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
    conversionRate, setConversionRate,
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
