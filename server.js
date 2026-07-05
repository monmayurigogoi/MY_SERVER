const express = require("express");
const db = require("./db"); 


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;


// Initiate connection to the database  
db.connectToDatabase(); 



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
 
/* comments
 Method: POST
Path: /get-user-by-id
Body: {  userId: <some user id> }
*/
app.post("/get-user-by-id", (req, res) => {
    console.log("path get-user-by-id");
    console.log(req.body);
    res.json({
        message: "POST Request Working",
        data: { userId: req.body.userId }
    });
});



app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
