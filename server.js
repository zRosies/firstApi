const express= require("express");
const parser= require("body-parser");
const MongoClient= require("mongodb").MongoClient;
const mongodb = require("./db/connection");
const route = require("./routes/route");

const port = process.env.Port || 10000;

const app = express();


app
    .use(parser.json())
    .use((req,res,next)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        next();
    })
    .use("/",route);

mongodb.initDb((err, mongodb)=>{
    if(err){
        console.log(err);
    }
    else{
        app.listen(port)
        console.log(`The app is listening at port ${port}`);
    }

})

