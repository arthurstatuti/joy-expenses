import React from "react";
import { useNavigate } from "react-router-dom";
import { CogIcon } from '@heroicons/react/solid';

function ButtonSETTINGS() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className=" text-gray-700 bg-gray-100 border border-red-300 rounded px-4 py-4 text-sm sm:text-lg font-bold transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-200"
        id="button-settings"
        type="button"
        onClick={() => navigate('/settings')}
      >
        <CogIcon className="w-5" />
      </button>

    </div>
  );
}

export default ButtonSETTINGS;
