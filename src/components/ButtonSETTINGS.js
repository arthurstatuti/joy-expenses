import React from "react";
import { useNavigate } from "react-router-dom";
import { CogIcon } from '@heroicons/react/outline';

function ButtonSETTINGS() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="border border-gray-500 rounded py-3 px-5 transform hover:scale-105 shadow-sm hover:shadow-md transition ease-out duration-200"
        id="button-settings"
        type="button"
        onClick={() => navigate('/settings')}
      >
        <CogIcon className="w-10" />
      </button>

    </div>
  );
}

export default ButtonSETTINGS;
