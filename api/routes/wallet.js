const Wallet = require('../models/Wallet');
const { verifyTokenAndAuthorization, verifyToken } = require('./verifyToken');

const router = require('express').Router();

router.post('/', verifyToken, async (req, res) => {
	const newWallet = new Wallet({
		userId: req.user.id,
		title: req.body.title,
	});
	try {
		const savedWallet = await newWallet.save();
		res.status(200).json(savedWallet);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
