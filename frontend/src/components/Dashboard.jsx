import { useEffect, useState } from "react";
import API from "../api/axios";
import "../css/dashboard.css";

function Dashboard(){

    const [expenses,setExpenses] = useState([]);


    const fetchExpenses = async()=>{

        try{

            const response = await API.get("/expenses");
            setExpenses(response.data);

        }
        catch(error){

            console.log(error);

        }

    };


    useEffect(()=>{

        fetchExpenses();

    },[]);



    const totalAmount = expenses.reduce(
        (sum, expense)=> sum + Number(expense.amount),
        0
    );


    return(

        <div className="dashboard">


            <div className="card">

                <h3>Total Expenses</h3>

                <h2>₹{totalAmount}</h2>

            </div>



            <div className="card">

                <h3>Total Transactions</h3>

                <h2>{expenses.length}</h2>

            </div>



        </div>

    )

}


export default Dashboard;