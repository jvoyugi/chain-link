const express= require('express'); //createApplication
const app = express(); //createApplication
var PORT = null;
if(!process.env.PORT){
    PORT=5500;
}
else{
    PORT=process.env.PORT;
}

app.listen(PORT,()=>{

    console.log(`Server is starting on port ${PORT} `);
})