import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonADD() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="border border-gray-500 rounded p-5"
        id="button-add"
        type="button"
        onClick={() => navigate('/add')}
      >
        ADD NEW EXPENSE
      </button>
    </div>
  )
}

export default ButtonADD;
