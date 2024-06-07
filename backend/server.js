const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
require('colors'); // Add this line to require colors
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logging middleware for debugging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

// Route handlers
app.use('/api/users', require('./routes/userRoutes'));

// Error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
