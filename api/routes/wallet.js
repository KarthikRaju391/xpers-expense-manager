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

router.get('/', verifyToken, async (req, res) => {
	try {
		const wallets = await Wallet.find({ userId: req.user.id });
		res.status(200).json(wallets);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/:id', verifyToken, async (req, res) => {
	try {
		const wallet = await Wallet.findById(req.params.id);
		res.status(200).json(wallet);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put('/:id', verifyToken, async (req, res) => {
	try {
		const updatedWallet = await Wallet.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedWallet);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete('/:id', verifyToken, async (req, res) => {
	try {
		await Wallet.findByIdAndDelete(req.params.id);
		res.status(200).json('Wallet deleted successfully!');
	} catch (error) {
		res.status(500).json(error);
	}
});
module.exports = router;
