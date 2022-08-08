import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import ButtonSETTINGS from "../components/ButtonSETTINGS";
import ButtonADD from "../components/ButtonADD";
import CardExpenseRow from "../components/CardExpenseRow";
import TravelContext from "../context/TravelContext";

function Home() {
  const { expenses, setExpenses } = useContext(TravelContext);

  useEffect(() => {
    const lcStExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (lcStExpenses) {
      const expensesByDate = [...lcStExpenses].sort((a, b) => {
        const c = new Date(a.date);
        const d = new Date(b.date);
        return d - c;
      });
      setExpenses(expensesByDate);
    }
    // eslint-disable-next-line
  }, []);

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

        <div>
          <ButtonSETTINGS />
        </div>

        <div>
          <ButtonADD />
        </div>

        <div>
          {expenses.map(expense => <CardExpenseRow key={expense.id} expense={expense} />)}
        </div>

      </div>
    )

  }
}

export default Home;
