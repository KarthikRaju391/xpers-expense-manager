const Expense = require('../models/Expense');

const router = require('express').Router();
const { verifyToken } = require('./verifyToken');

router.post('/', verifyToken, async (req, res) => {
	const newExpense = new Expense({
		userId: req.user.id,
		title: req.body.title,
		amount: req.body.amount,
		categories: req.body.categories,
	});
	try {
		const savedExpense = await newExpense.save();
		res.status(200).json(savedExpense);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/', verifyToken, async (req, res) => {
	try {
		const expenses = await Expense.find({ userId: req.user.id });
		res.status(200).json(expenses);
	} catch (error) {
		res.status(500).json(err);
	}
});

router.get('/:id', verifyToken, async (req, res) => {
	try {
		const expense = await Expense.findById(req.params.id);
		res.status(200).json(expense);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Update
router.put('/:id', verifyToken, async (req, res) => {
	try {
		const updatedExpense = await Expense.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{
				new: true,
			}
		);
		res.status(200).json(updatedExpense);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete('/:id', verifyToken, async (req, res) => {
	try {
		await Expense.findByIdAndDelete(req.body.id);
		res.status(200).json('Expense was deleted successfully!');
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
