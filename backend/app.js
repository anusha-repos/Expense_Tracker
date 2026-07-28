const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log(error);
});

const expenseRoutes = require("./routes/expenseRoutes");

app.use("/api/expenses", expenseRoutes);


app.get("/", (req,res)=>{
    res.send("Expense Tracker API Running");
});


const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});