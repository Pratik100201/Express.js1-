const express = require("express")
const port = 3015
const app = express()
const hostname = 'localhost'

app.get('/',(req,res)=>{
    res.set("Home Page")
})
app.get('/random',(req,res)=>{
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.set(`Random Number is : ${randomNumber} `)
})

app.listen(port,()=>{
    console.log(`Port is running at ${hostname} : ${port}`)
})