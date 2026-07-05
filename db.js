const mongoose = require('mongoose');


function connectToDatabase() {
    console.log("Connecting to the database...");
  // Database connection logic here

  // MongoDB connection
mongoose.connect('mongodb://localhost:27017/my-local-db')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
  
}



module.exports = {  
    connectToDatabase
};  