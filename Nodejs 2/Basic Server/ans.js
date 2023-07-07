const express = require('express')
const app = express();
const port = 4015 ;
const hostname = 'localhost'

app.get("/",(req,res)=>{
    res.set("I am Home Page")
})
app.get("/about",(req,res)=>{
    res.set("I am About Page")
})
app.get("/contact",(req,res)=>{
    res.set("I am Contact Page")
})
app.listen(port,()=>{
    console.log(`Port is runnig on ${hostname} : ${port}`)
})