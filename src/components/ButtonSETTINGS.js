import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonSETTINGS() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        id="button-settings"
        type="button"
        onClick={() => navigate('/settings')}
      >
        SETTINGS
      </button>
    </div>
  );
}

export default ButtonSETTINGS;
