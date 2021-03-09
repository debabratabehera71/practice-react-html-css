//require mongoose
const mongoose = require('mongoose');

// connect and create database
mongoose.connect("mongodb://localhost:27017/mernsite1", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(() =>{
    console.log("connection successful");
}).catch((error) =>{
    console.log(error);
})




