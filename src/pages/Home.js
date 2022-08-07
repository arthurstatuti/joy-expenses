import React, { useContext } from "react";
import Header from "../components/Header";
import ButtonADD from "../components/ButtonADD";
import ButtonSETTINGS from "../components/ButtonSETTINGS";
import CardExpenseRow from "../components/CardExpenseRow";
import TravelContext from "../context/TravelContext";

function Home() {
  const { expenses } = useContext(TravelContext);

  if (expenses.length === 0) {
    return (
      <div>
        <Header />
        <ButtonSETTINGS />
        <ButtonADD />
        <h3> "You have no expenses" </h3>
      </div>
    )
  } else {
    return (
      <div>
        <Header />
        <ButtonSETTINGS />
        <ButtonADD />
        {expenses.map(expense => <CardExpenseRow key={expense.id} expense={expense} />)}
      </div>
    )

  }
}

export default Home;
