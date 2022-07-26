const Category = require('../models/Categories');
const { verifyTokenAndAuthorization, verifyToken } = require('./verifyToken');

const router = require('express').Router();

router.post('/', verifyToken, async (req, res) => {
	const newCategory = new Category({
		userId: req.user.id,
		walletId: req.body.walletId,
		title: req.body.title,
	});
	try {
		const savedCategory = await newCategory.save();
		res.status(200).json(savedCategory);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
