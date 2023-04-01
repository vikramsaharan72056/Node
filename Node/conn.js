const express = require("express");
const mongoose = require("mongoose");
const db = "mongodb+srv://root:root@cluster0.brmgqnv.mongodb.net/Node?retryWrites=true&w=majority"

mongoose.connect(db).then(() =>{
    console.log("Database is connected")
}).catch((err) =>{
    console.log(err.message);
})

module.exports = mongoose;