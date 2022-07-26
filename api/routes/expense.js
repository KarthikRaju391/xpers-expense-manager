const Expense = require('../models/Expense');

const router = require('express').Router();
const { verifyToken } = require('./verifyToken');

router.post('/', verifyToken, async (req, res) => {
	const newExpense = new Expense(req.body);

	try {
		const savedExpense = await newExpense.save();
		res.status(200).json(savedExpense);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/', verifyToken, async (req, res) => {
	try {
		const expenses = await Expense.find();
		res.status(200).json(expenses);
	} catch (error) {
		res.status(500).json(err);
	}
});

module.exports = router;
