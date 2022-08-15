import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonADD() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className=" text-gray-700 bg-gray-100 border border-red-300 rounded py-3 px-16 text-sm sm:text-lg font-bold transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-200"
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
