import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import ButtonSETTINGS from "../components/ButtonSETTINGS";
import ButtonNEW from "../components/ButtonNEW";
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

        <div> <Header /> </div>

        <main>

          <div className="flex justify-evenly items-center mx-4">
            <div className="my-8"> <ButtonNEW /> </div>
            <div className="my-8"> <ButtonSETTINGS /> </div>
          </div>

          <h3 className=" flex justify-center m-10">
            <p >Clique em <strong>NOVA DESPESA</strong>  para começar.</p>
          </h3>

        </main >

      </div>
    )
  } else {
    return (
      <div>

        <div> <Header /> </div>

        <main>

          <div className="flex justify-evenly items-center mr-3">
            <div className="my-8"> <ButtonNEW /> </div>
            <div className="my-8"> <ButtonSETTINGS /> </div>
          </div>

          <h3 className=" my-4 mx-8 sm:mx-10">
            {expenses.map(expense => <CardExpenseRow key={expense.id} expense={expense} />)}
          </h3>

        </main >

      </div>
    )
  }
}

export default Home;
