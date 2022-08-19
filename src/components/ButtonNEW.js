import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonNEW() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className=" bg-yellow-400 hover:bg-yellow-700 hover:text-white border border-yellow-800 rounded-xl py-5 px-16 font-bold shadow-sm hover:shadow-md transition ease-out duration-100"
        id="button-add"
        type="button"
        onClick={() => navigate('/new')}
      >
        NOVA DESPESA
      </button>
    </div>
  )
}

export default ButtonNEW;
