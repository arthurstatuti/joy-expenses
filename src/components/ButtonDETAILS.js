import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonDETAILS() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        id="button-details"
        type="button"
        onClick={() => navigate('/details')}
      >
        DETAILS
      </button>
    </div>
  );
}

export default ButtonDETAILS;
