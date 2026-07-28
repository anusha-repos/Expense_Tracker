import { useEffect, useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";

import API from "../api/axios";


function Charts(){

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



    // Category calculation

    const categoryData = expenses.reduce((acc,item)=>{

        const existing = acc.find(
            (data)=>data.name === item.category
        );


        if(existing){

            existing.value += Number(item.amount);

        }
        else{

            acc.push({
                name:item.category,
                value:Number(item.amount)
            });

        }


        return acc;

    },[]);



    // Monthly calculation

    const monthlyData = expenses.reduce((acc,item)=>{

        const month = new Date(item.date)
        .toLocaleString("default",{month:"short"});


        const existing = acc.find(
            data=>data.month === month
        );


        if(existing){

            existing.amount += Number(item.amount);

        }
        else{

            acc.push({
                month:month,
                amount:Number(item.amount)
            });

        }


        return acc;

    },[]);



    return(

        <div>


            <h2>Expense Analytics</h2>


            <div style={{display:"flex",justifyContent:"center",gap:"50px",flexWrap:"wrap"}}>


                <PieChart width={350} height={350}>

                    <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label
                    >

                    {
    categoryData.map((entry,index)=>(

        <Cell
            key={index}
            fill={
                [
                    "#4F46E5", // Indigo
                    "#06B6D4", // Cyan
                    "#10B981", // Emerald
                    "#F59E0B", // Amber
                    "#EF4444", // Red
                    "#8B5CF6"  // Purple
                ][index % 6]
            }
        />

    ))
}

                    </Pie>


                    <Tooltip/>

                    <Legend/>

                </PieChart>




                <BarChart
                width={450}
                height={300}
                data={monthlyData}
                >


                    <CartesianGrid/>

                    <XAxis dataKey="month"/>

                    <YAxis/>

                    <Tooltip/>

                    <Legend/>


                    <Bar
                    dataKey="amount"
                    />

                </BarChart>


            </div>


        </div>

    )

}


export default Charts;