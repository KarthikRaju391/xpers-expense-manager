const mongoose = require('mongoose');

// create a mongoDB schema for the categories collection which is linked to the
// userId and walletId fields

const CategorySchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		walletId: { type: String, required: true },
		title: { type: String, required: true },
	},
	{ timestamps: true }
);
module.exports = mongoose.model('Category', CategorySchema);
