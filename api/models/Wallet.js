const mongoose = require('mongoose');

// create a mongoDb schema for the wallets collection which is linked to the userId
// field and contains the title and balance fields which are required and unique for
// the title field and the balance field is required and has a default value of 0 for the
// balance field and the timestamps field is required and has a default value of true

const WalletSchema = new mongoose.Schema(
	{
		userId: { type: String, required: true },
		title: { type: String, required: true },
		balance: { type: Number, required: true, default: 0 },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Wallet', WalletSchema);
