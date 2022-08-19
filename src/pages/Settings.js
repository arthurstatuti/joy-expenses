import React from "react";
import Header from "../components/Header";
import ButtonCLEAN from "../components/ButtonCLEAN";
import ButtonBACK from "../components/ButtonBACK";

function Settings() {
  return (
    <div>

      <Header />

      <h2 className=" bg-gray-100 border-b border-yellow-800 flex justify-center p-4 font-bold"> CONFIGURAÇÕES </h2>

      <h4 className=" flex justify-center p-4 font-bold mt-4"> MOEDAS DISPONÍVEIS </h4>

      <p className=" flex justify-center px-4 mt-1">
        ARS : Peso Argentino <br />
        AUD : Dólar Australiano <br />
        BRL : Real Brasileiro <br />
        CAD : Dólar Canadense <br />
        CHF : Franco Suíço <br />
        CNY : Yuan Chinês <br />
        EUR : Euro <br />
        GBP : Libra Esterlina <br />
        ILS : Novo Shekel Israelense <br />
        JPY : Iene Japonês <br />
        USD : Dólar Americano <br />
      </p>

      <h4
        className="flex justify-center p-4 mt-4 font-bold">
        LIMPAR TODAS AS DESPESAS
      </h4>

      <div className="flex justify-evenly mx-12 mt-1">
        <ButtonCLEAN />
        <ButtonBACK />
      </div>

    </div>
  )
}

export default Settings;
