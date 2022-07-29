const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		title: { type: String, required: true, unique: true },
		amount: { type: Number, required: true },
		paid: { type: Boolean, required: true, default: true },
		categories: { type: Array, required: true, default: null },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Expense', ExpenseSchema);
