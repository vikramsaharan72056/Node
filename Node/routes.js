const express = require("express");
const router = express.Router();
const schema = require("./models");
const mongoose = require("mongoose");




router.post("/auth/signUp",(req,res) =>{
    const {username,password} = req.body;
    const result = new schema({
        username:username,
        passoword:password
    })
    const final = result.save().then((res) =>{
        res.status(201).send("data transfer object is valid")
    }).catch((err) =>{
        res.status(400).send(err.message)
    })



});

router.get("/auth/login",(req,res) =>{
    const{username,password} = req.body;
    const res = schmema.find({username:username,password:password})


});


module.exports = router;