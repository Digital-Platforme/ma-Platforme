// server.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const complaintRoutes = require('./routes/complaintRoutes');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/complaints', complaintRoutes);

// Test DB connection
sequelize.authenticate().then(() => {
    console.log('Connected to PostgreSQL database!');
    return sequelize.sync();
}).catch(err => console.error('Unable to connect to the database:', err));

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
