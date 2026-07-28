import { useEffect, useState } from "react";
import API from "../api/axios";


function ExpenseList({setSelectedExpense}){

    const [expenses,setExpenses] = useState([]);


    const fetchExpenses = async()=>{

        try {

            const response = await API.get("/expenses");
            setExpenses(response.data);

        }
        catch(error){

            console.log(error);

        }

    };


    const deleteExpense = async(id)=>{

        try {

            await API.delete(`/expenses/${id}`);

            // refresh list
            fetchExpenses();

        }
        catch(error){

            console.log(error);

        }

    };


    useEffect(()=>{

        fetchExpenses();

    },[]);



    return(

        <div className="expense-container">

            <h2>Expense List</h2>


            {
                expenses.map((expense)=>(


                    <div key={expense._id} className="expense-card">


                        <h3>{expense.title}</h3>

                        <p>
                            Amount: ₹{expense.amount}
                        </p>


                        <p>
                            Category: {expense.category}
                        </p>


                        <p>
                            Date: {expense.date}
                        </p>


                        <p>
                            {expense.description}
                        </p>



                        <button
                        onClick={()=>setSelectedExpense(expense)}
                        >
                            Edit
                        </button>



                        <button
                        onClick={()=>deleteExpense(expense._id)}
                        >
                            Delete
                        </button>


                    </div>


                ))
            }


        </div>

    )

}


export default ExpenseList;