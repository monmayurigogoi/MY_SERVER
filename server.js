const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.post('/user', (req, res) => {

    const userData = req.body;

    res.send({
        message: 'Data received successfully',
        data: userData
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});