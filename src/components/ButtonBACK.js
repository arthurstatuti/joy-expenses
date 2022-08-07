import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonBACK() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        id="button-back"
        type="button"
        onClick={() => navigate('/')}
      >
        BACK
      </button>
    </div>
  );
}

export default ButtonBACK;
