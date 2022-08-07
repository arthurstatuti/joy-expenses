import React from "react";
import Header from "../components/Header";
import ButtonCLEAN from "../components/ButtonCLEAN";
import ButtonBACK from "../components/ButtonBACK";

function Settings() {
  return (
    <div>
      <Header />
      <h2> SETTINGS </h2>

      <h4> CURRENCIES AVAILABLE </h4>
      <p>
        ARS : Argentine Peso <br />
        AUD : Australian Dollar <br />
        BRL : Brazilian Real <br />
        CAD : Canadian Dollar <br />
        CHF : Swiss Franc <br />
        CNY : Chinese Yuan <br />
        EUR : Euro <br />
        GBP : Pound Sterling <br />
        ILS : Israeli New Shekel <br />
        JPY : Japanese Yen <br />
        USD : American Dollar <br />
      </p>

      <h4> CAREFUL! </h4>
      <h4> CLEAN ALL EXPENSES </h4>

      <ButtonCLEAN />

      <ButtonBACK />

    </div>
  )
}

export default Settings;
