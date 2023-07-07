const exp = require('constants');
const express = require('express');
const port = 4000;
const app = express()
let count = 0;
const hostname = 'localhost'
app.get("/",(req,res)=>{
    res.set(`Count is : ${count}`)
})
app.get("/increment",(req,res)=>{
    count++;
    res.set(`Count is : ${count}`)
})
app.get("/decrement",(req,res)=>{
    count--;
    res.set(`Count is : ${count}`)
})

app.listen(port,()=>{
    console.log(`Port is running at ${hostname} : ${port}`);
})
