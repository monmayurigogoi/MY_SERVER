const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

// GET request
app.get("/", (req, res) => {
    res.json({
        message: "GET Request Working"
    });
});

// POST request
app.post("/", (req, res) => {
    res.json({
        message: "POST Request Working",
        data: req.body
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});