import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import fetchCurrenciesData from '../api/CurrenciesDataApi';
import TravelContext from "./TravelContext";

function TravelProvider({ children }) {
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState(0);
  const [detailedExpense, setDetailedExpense] = useState(JSON.parse(localStorage.getItem('detailedExpense')) ? JSON.parse(localStorage.getItem('detailedExpense')) : []);
  const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) ? JSON.parse(localStorage.getItem('expenses')) : []);
  const [currenciesData, setCurrenciesData] = useState([]);

  async function getCurrenciesData() {
    const currenciesData = await fetchCurrenciesData();
    setCurrenciesData(currenciesData);
  }

  useEffect(() => {
    getCurrenciesData();
    // eslint-disable-next-line
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
    date,
    setDate,
    price,
    setPrice,
    currency,
    setCurrency,
    rate,
    setRate,
    detailedExpense,
    setDetailedExpense,
    expenses,
    setExpenses
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
