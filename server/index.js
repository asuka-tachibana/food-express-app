const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/menu', (req, res) => {
    res.send('Menu Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
