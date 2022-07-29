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

router.get('/', verifyToken, async (req, res) => {
	try {
		const categories = await Category.find({ userId: req.user.id });
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/:walletId', verifyToken, async (req, res) => {
	try {
		const categories = await Category.find({
			userId: req.user.id,
			walletId: req.params.walletId,
		});
		res.status(200).json(categories);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get('/:id', verifyToken, async (req, res) => {
	try {
		const category = await Category.findById(req.params.id);
		res.status(200).json(category);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put('/:id', verifyToken, async (req, res) => {
	try {
		const updatedCategory = await Category.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedCategory);
	} catch (error) {
		res.status(500).json(error);
	}
});

// route to delete category by wallet id
//router.delete('/:walletId', verifyToken, async (req, res) => {});

router.delete('/:id', verifyToken, async (req, res) => {
	try {
		await Category.findByIdAndDelete(req.params.id);
		res.status(200).json('Category deleted successfully!');
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
