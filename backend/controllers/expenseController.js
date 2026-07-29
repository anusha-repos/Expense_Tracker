const Expense = require("../models/Expense");


const createExpense = async (req,res)=>{
    try{
        const expense = await Expense.create(req.body);
        res.json(expense);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};


const getExpenses = async(req,res)=>{
    try{
        const expenses = await Expense.find();
        res.json(expenses);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};


const deleteExpense = async(req,res)=>{
    try{
        await Expense.findByIdAndDelete(req.params.id);
        res.json({message:"Expense deleted"});
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
};


const updateExpense = async(req,res)=>{

    try{

        const expense = await Expense.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.json(expense);

    }
    catch(error){

        res.status(500).json({
            error:error.message
        });

    }

};

module.exports = {
    createExpense,
    getExpenses,
    deleteExpense,
    updateExpense
};