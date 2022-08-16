import React from "react";
import { useNavigate } from "react-router-dom";
import { CogIcon } from '@heroicons/react/outline';

function ButtonSETTINGS() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="bg-yellow-400 border border-yellow-800 rounded px-6 py-5 sm:text-lg font-bold transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-200"
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
