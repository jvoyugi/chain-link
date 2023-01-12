
const express = require('express'); //createApplication
const app = express(); //createApplication
// const mongoose = require("mongoose");

// const username = process.env.DB_USER;
// const password = process.env.DB_PASSWORD;
// const database = process.env.DB_NAME;

// let db_url = "";

// const options = {
//     maxPoolSize: 5,
//     family: 4,
//     user: username,
//     pass: password,
//     dbName: database,
// }
// mongoose.connect(db_url, options);
// let db = mongoose.connection;
// //check if connection was successful
// db.once('open', () => {
//     console.log('success');
// });
// db.on('error', (error) => {
//     console.log('error');
// });

// app.use(express.static('public'));
// app.set('view engine', 'ejs')
// //example of middleware
// app.use('/', solutionsRouter);

let PORT = null;
if (!process.env.PORT) {
    PORT = 5500;
    
    const indexRoute = require("./routes/index");
    app.set('view engine', 'ejs');

    // Static files
    app.use('/public/', express.static(__dirname + '/public'));

    // Root url
    app.use('/', indexRoute)

    app.listen(PORT, () => {
        console.log(`Server is starting on port ${PORT} `);
        console.log(`Success`);
    })
}