const express = require("express");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const Products = require("../models/product.model")

require("dotenv").config()

const router = express.Router();

router.post("/addproduct", async(req, res) => {
    try{

        if(!req.headers.token){
            return res.send("Please give the token")
        }
    
        const decode = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);
          let product = await Products.create(req.body)
            return res.send(product)
      
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

router.get("/getallproducts", async(req, res) => {
    try{

        if(!req.headers.token){
            return res.send("Please give the token")
        }
    
        const decode = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);
        
       
            let product = await Products.find()
            return res.send(product)
        
       
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})

router.patch("/update/:id", async(req, res) => {
    try{

        if(!req.headers.token){
            return res.send("Please give the token")
        }
    
        const decode = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);
        
       
            const product = await Products.findByIdAndUpdate(req.params.id, req.body, {new : true,}).lean().exec()  
            return res.send(product)
        
       
    }
    catch(err){
        return res.status(500).send({message : err.message})
    }
})


module.exports = router