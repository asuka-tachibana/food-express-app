require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Dish = require('./Dish');
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/menu', async (req, res) => {
    try {
        const dishes = await Dish.find({ available: true }); // Only return dishes that are available
        res.json(dishes); // Send the dishes as a JSON response
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body; // Extract data from the request body

        const newContact = new Contact({ // Create a new contact document
            name,
            email,
            message
        });

        await newContact.save(); // Save the document to the database

        res.json(newContact); // Send the saved document as a response
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
