// Configure dotenv to load in the .env file
require('dotenv').config(); 

const mongoose = require('mongoose');
const orderRoutes = require('./routes/orders');

// Initiate the server

const express = require('express');
const app = express();


// Middleware

app.use(express.json()); // Parse JSON bodies
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
}); // Log all requests


// Routes

app.use('/orders', orderRoutes);

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');


        // Listen on port 4000

        app.listen(process.env.PORT, () => {
            console.log('Server listening on port ' + process.env.PORT);
        });



    })
    .catch(error => {
        console.log(error);
    });



