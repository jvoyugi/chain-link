const mongoose = require("mongoose");
var customer_schema = new mongoose.Schema({
    username: {type:String, required:true},
    name: {type:String},
    address: {type:String },
    birthDate: {type:String, default: Date.now},
    email: {type:String},
    active: {type:Boolean },
    accounts: {type:[Number] },
    tier_and_Details: {type: Object},
}

);
let Customer = mongoose.model('customer', customer_schema); //model singular table will be plural form
module.exports=customer;