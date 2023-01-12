const express= require('express');
const multer= require('multer');
const router=express.Router();
const Customer=require("../models/customer");

router.post("/login",(req, res)=>{
    res.send("This is the ");
    res.render("solutions");
    //use a template engine 
   })

router.get("/solutions",(req, res, next)=>{
    let new_customer = new Customer();
    console.log(Customer.find().limit(1));
    let payload={
        "username": "Phelister Bogonko"
    }
    res.render("solutions",payload);
    //use a template engine 
   })

   router.post("/login/forgot-pass",(req, res)=>{
       res.send("This is the ");
      })
   
      router.post("/login/forgot-pass",(req, res)=>{
   res.send("This is the ");
   })
   
   router.get("/home-page",(req, res)=>{
       res.send("This is the homepage");
      })

      module.exports=router;
