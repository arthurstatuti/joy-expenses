import React from "react";
import Header from "../components/Header";
import ButtonCLEAN from "../components/ButtonCLEAN";
import ButtonBACK from "../components/ButtonBACK";

function Settings() {
  return (
    <div>

      <Header />

      <h2 className=" text-gray-700 bg-gray-100 border-b border-red-300 flex justify-center p-4 font-bold"> SETTINGS </h2>

      <h4 className=" text-gray-700 flex justify-center p-4 font-bold mt-4"> CURRENCIES AVAILABLE </h4>

      <p className=" text-gray-700 flex justify-center px-4">
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

      <h4 className=" text-red-500 flex justify-center p-4 mt-4 font-bold"> --- CLEAN ALL EXPENSES --- </h4>

      <div className="flex justify-evenly">
        <ButtonCLEAN />
        <ButtonBACK />
      </div>

    </div>
  )
}

export default Settings;
