const express=require('express')
const router=express.Router()

// Contact us page
router.get("/contact-us",(req,res)=>{
    res.render("contact_us")
})
module.exports=router;