import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import * as dotenv from 'dotenv';
dotenv.config()

const app = express();

// app configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", 'ejs');


app.get("/video",(req,res)=>{
    res.json({name:'Rohan'});
})

app.get("/",(req,res)=>{
    res.render('myVideo');
})
app.post("/name-submitted",(req,res)=>{
    console.log(req.body);
    res.send(`${req.body.name}`)
})

app.listen(process.env.PORT || 3000);