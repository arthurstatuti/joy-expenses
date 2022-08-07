import React, { useContext } from "react";
import TravelContext from "../context/TravelContext";

function Header() {
  const { total } = useContext(TravelContext);

  return (
    <div>
      <h1> TRAVEL EXPENSES </h1>
      <h3> TOTAL: R$ {total} </h3>
    </div>

  );
}

export default Header;
