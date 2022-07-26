const User = require('../models/User');
const router = require('express').Router();
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const validator = require('validator');

router.post('/signup', async (req, res) => {
	if (!req.body.email || !req.body.password) {
		res.json('All fields must be filled');
	}

	if (!validator.isEmail(req.body.email)) {
		res.json('Email is not valid');
	}
	//	if (!validator.isStrongPassword(password)) {
	//		throw Error('Password not strong enough');
	//	}

	const exists = await User.findOne({ email: req.body.email });

	if (exists) {
		res.json('Email already in use...');
	} else {
		const newUser = new User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			username: req.body.username,
			email: req.body.email,
			password: CryptoJS.AES.encrypt(
				req.body.password,
				process.env.PASS_SEC
			).toString(),
		});

		try {
			const savedUser = await newUser.save();
			const accessToken = jwt.sign(
				{
					id: savedUser.id,
				},
				process.env.JWT_SEC,
				{ expiresIn: '3d' }
			);

			const { password, ...others } = savedUser._doc;
			res.status(201).json({ ...others, accessToken });
		} catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	}
});

// login route
router.post('/login', async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		!user && res.status(401).json('Wrong Credentials!');

		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASS_SEC
		);

		const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

		originalPassword !== req.body.password &&
			res.status(401).json('Wrong Credentials!');

		const accessToken = jwt.sign(
			{
				id: user._id,
			},
			process.env.JWT_SEC,
			{ expiresIn: '3d' }
		);

		const { password, ...others } = user._doc;

		res.status(200).json({ ...others, accessToken });
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
