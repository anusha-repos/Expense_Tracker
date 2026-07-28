import {useState, useEffect} from "react";
import API from "../api/axios";


function ExpenseForm({selectedExpense, setSelectedExpense}){

const [expense,setExpense]=useState({

title:"",
amount:"",
category:"",
date:"",
description:""

});


// Fill form when editing
useEffect(()=>{

    if(selectedExpense){

        setExpense(selectedExpense);

    }

},[selectedExpense]);



const handleChange=(e)=>{

setExpense({
...expense,
[e.target.name]:e.target.value
});

};



const submitExpense = async(e)=>{

e.preventDefault();


try{


if(selectedExpense){

    // Update expense
    await API.put(`/expenses/${selectedExpense._id}`, expense);

    alert("Expense Updated");

    setSelectedExpense(null);


}
else{

    // Add expense
    await API.post("/expenses", expense);

    alert("Expense Added");

}



setExpense({

title:"",
amount:"",
category:"",
date:"",
description:""

});


}
catch(error){

console.log(error);
alert("Operation Failed");

}


};



return(

<form onSubmit={submitExpense}>


<input
name="title"
placeholder="Expense Title"
value={expense.title}
onChange={handleChange}
/>


<input
name="amount"
placeholder="Amount"
value={expense.amount}
onChange={handleChange}
/>


<input
name="category"
placeholder="Category"
value={expense.category}
onChange={handleChange}
/>


<input
type="date"
name="date"
value={expense.date}
onChange={handleChange}
/>


<textarea
name="description"
placeholder="Description"
value={expense.description}
onChange={handleChange}
/>


<button>
{
selectedExpense ? "Update Expense" : "Add Expense"
}
</button>


</form>

)

}

export default ExpenseForm;