import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import fetchCurrenciesData from '../api/CurrenciesDataApi';
import TravelContext from "./TravelContext";

function TravelProvider({ children }) {
  const [what, setWhat] = useState("");
  const [where, setWhere] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("rate");
  const [detailedExpense, setDetailedExpense] = useState("detailedExpense");
  const [expenses, setExpenses] = useState([]);
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
