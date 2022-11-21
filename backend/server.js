const express = require('express');
const colors = require('colors');
const { prototype } = require('stream');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
connectDB();
const app = express();

//middleware to get the req.body
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler);


app.listen(port, () => console.log(`Server started on  port ${port}`));

