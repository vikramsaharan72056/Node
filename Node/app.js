const express = require("express");
const app = express();
const port = 8888;
require("./conn");
const router = require("./routes")
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/",router);




app.listen(port,() =>{
    console.log("Server is listening on port " + port);
})