const express=require('express')
const router=express.Router()

// Contact us page
router.get("/contact-us",(req,res)=>{
    res.render("contactUs")
})

// Home
router.get("/",(req,res)=>{
    res.render("index")
})

// Solutions
router.get("/solutions",(req,res)=>{
    res.render("solutions")
})

//About us
router.get("/about-us",(req,res)=>{
    res.render("aboutUs")
})


module.exports=router;