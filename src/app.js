
//requiring express
const express = require('express');

//requiring path
const path = require('path');

//requiring database conn
require('./db/conn');

//require handlebar
const hbs = require('hbs');

const app = express();//defining express

//create port

const port = process.env.PORT || 3000;


//middlware
// path 
const staticPath = path.join(__dirname, "../public");

const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");


//routing to static site 
app.use(express.static(staticPath));

//adding boostrap
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")))

//routing to view folder
app.set("view engine", "hbs");

app.set("views", templatePath);
hbs.registerPartials(partialPath);


app.get("/", (req, res) => {
    res.render("index");
    
})


app.get("/contact", (req, res) => {
    res.render("contact");
    
})


//routing
app.get("/", (req, res) => {
    res.send('let begin with new website');
    
})





//server create
app.listen(port, () =>{
    console.log(`server is running at ${port}`);
})





