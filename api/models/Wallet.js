const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		title: { type: String, required: true },
		balance: { type: Number, required: true, default: 0 },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Wallet', WalletSchema);
