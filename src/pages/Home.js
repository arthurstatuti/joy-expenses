import React, { useContext, useEffect } from "react";
import TravelContext from "../context/TravelContext";


function Home() { // eslint-disable-next-line
  const { getCurrencies } = useContext(TravelContext);

  useEffect(() => {
    getCurrencies(); // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1> I am Home </h1>
    </div>
  )
}

export default Home;
