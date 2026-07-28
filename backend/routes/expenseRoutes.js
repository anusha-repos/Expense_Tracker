const express = require("express");

const router = express.Router();

const {
    createExpense,
    getExpenses,
    deleteExpense,
    updateExpense
} = require("../controllers/expenseController");


router.post("/", createExpense);

router.get("/", getExpenses);

router.delete("/:id", deleteExpense);

router.put("/:id", updateExpense);


module.exports = router;