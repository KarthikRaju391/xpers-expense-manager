const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const expenseRoute = require('./routes/expense');
const walletRoute = require('./routes/wallet');
const categoryRoute = require('./routes/category');
const userRoute = require('./routes/user');
const cors = require('cors');

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB Connection Successfull!'))
	.catch((err) => {
		console.log(err);
	});

app.use(cors());
app.use(express.json());
app.use('/api/expenses', expenseRoute);
app.use('/api/wallets', walletRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/user', userRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log('Backend server is running!');
});
