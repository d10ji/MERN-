const fs = require('fs');
const express = require('express');

const app = express();
const cors = require('cors')
app.use(cors());
const raw = fs.readFileSync('produts.json','utf-8',(err)=>{
    if (err){
        console.log("sorry error occured ")
        console.log(err);
    }
});

app.get('/',(req,res)=>{
    res.end("Home page \n 1./products");
})
app.get('/products',(req,res)=>{
     res.end(raw);
})

app.listen(2000,()=>{
    console.log("port 2000 is ready");
});