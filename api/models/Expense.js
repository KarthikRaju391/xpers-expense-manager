const mongoose = require('mongoose');

// create a mongoDb schema for the expenses collection which is linked to the userId and
// walletId fields and contains the title, amount, paid, categories fields which are
// required and unique for the title field and the amount field is required and has a
// default value of 0 for the amount field and the paid field is required and has a default
// value of true for the paid field and the categories field is required and has a default
// value of null for the categories field and the timestamps field is required and has a
// default value of true
const ExpenseSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		title: { type: String, required: true, unique: true },
		amount: { type: Number, required: true, default: 0 },
		paid: { type: Boolean, required: true, default: true },
		categories: { type: Array, required: true, default: null },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Expense', ExpenseSchema);
