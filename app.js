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
})