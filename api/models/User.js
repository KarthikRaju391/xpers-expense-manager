const mongoose = require('mongoose');

// create a mongoDb schema for the users collection which is linked to the username
// field and contains the firstname, lastname, email, img fields which are required
// and unique for the username field and the img field is optional and
// has a default value of null for the img field and the timestamps field
// is required and has a default value of true for the timestamps field

const UserSchema = new mongoose.Schema(
	{
		firstname: { type: String, required: true },
		lastname: { type: String, required: true },
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		img: { type: String, default: null },
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
