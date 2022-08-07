import React, { useContext } from "react";
import TravelContext from "../context/TravelContext";

function ButtonCLEAN() {
  const { setExpenses } = useContext(TravelContext);

  return (
    <div>
      <button
        id="button-clean"
        type="button"
        onClick={() => setExpenses([])}
      >
        CLEAN
      </button>
    </div >
  );
}

export default ButtonCLEAN;
