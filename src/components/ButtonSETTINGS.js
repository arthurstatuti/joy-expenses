import React from "react";
import { useNavigate } from "react-router-dom";
import { CogIcon } from '@heroicons/react/outline';

function ButtonSETTINGS() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className=" text-gray-700 bg-gray-100 border border-red-300 rounded py-2 px-4 transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-200 text-sm"
        id="button-settings"
        type="button"
        onClick={() => navigate('/settings')}
      >
        <CogIcon className="w-6" />
      </button>

    </div>
  );
}

export default ButtonSETTINGS;
