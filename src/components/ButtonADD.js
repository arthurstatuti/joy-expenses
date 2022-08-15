import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonADD() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="border border-gray-500 rounded py-5 px-5 sm:px-12 bg-blue-100 sm:text-lg font-bold transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-200"
        id="button-add"
        type="button"
        onClick={() => navigate('/add')}
      >
        NEW EXPENSE
      </button>
    </div>
  )
}

export default ButtonADD;
