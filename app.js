
const express= require('express'); //createApplication

//create an instance of it to be able to  run as an application
const app = express(); //createApplication
const solutionsRouter = require("/routes/solutions");
const mongoose = require("mongoose");

const username=process.env.DB_USER;
const password= process.env.DB_PASSWORD;
const database =process.env.DB_NAME;

let db_url="";

const options={
    maxPoolSize:5,
    family: 4,
    user: username,
    pass: password,
    dbName: database,
}
mongoose.connect(db_url, options);
let db =mongoose.connection;
//check if connection was successful
db.once('open',()=>{
    console.log('success');
});
db.on('error',(error)=>{
    console.log('error');
});

app.use(express.static('public'));
app.set('view engine','ejs') 
//example of middleware
app.use('/', solutionsRouter);

var PORT = null;
if(!process.env.PORT){
    PORT=5500;

const express = require('express'); //createApplication
const app = express(); //createApplication
const indexRoute = require("./routes/index");
app.set('view engine', 'ejs');

// Static files
app.use('/public/',express.static(__dirname + '/public'));

// Root url
app.use('/', indexRoute)

let PORT = null;
if (!process.env.PORT) {
    PORT = 5500;

}
else {
    PORT = process.env.PORT;
}
app.listen(PORT, () => {

    console.log(`Server is starting on port ${PORT} `);
    console.log(`Success`);
})