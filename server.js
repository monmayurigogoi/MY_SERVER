
const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// GET request
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// POST request
app.post('/user', (req, res) => {

    const userData = req.body;

    res.send({
        message: 'Data received successfully',
        data: userData
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});