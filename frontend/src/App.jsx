import { useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";

function App(){

const [selectedExpense, setSelectedExpense] = useState(null);


return(

<div>

<h1>MERN Expense Tracker</h1>

<Dashboard />

<Charts />

<ExpenseForm 
    selectedExpense={selectedExpense}
    setSelectedExpense={setSelectedExpense}
/>


<ExpenseList 
    setSelectedExpense={setSelectedExpense}
/>


</div>

)

}


export default App;