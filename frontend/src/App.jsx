import { useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {

  const [selectedExpense, setSelectedExpense] = useState(null);

  return (
    <div>

      <h1>Expense Tracker</h1>

      <ExpenseForm
        selectedExpense={selectedExpense}
        setSelectedExpense={setSelectedExpense}
      />

      <ExpenseList
        setSelectedExpense={setSelectedExpense}
      />

    </div>
  );
}

export default App;