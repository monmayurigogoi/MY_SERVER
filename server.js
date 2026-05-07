const express = require('express');

const app = express();

app.use(express.json());

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

app.listen(process.env.PORT || 8080, '0.0.0.0', () => {
    console.log('Server is running');
});