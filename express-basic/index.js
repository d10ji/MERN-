const { application } = require('express');
const express = require('express');

// creating server 
const app = express();

app.get('/',(req,res)=>{
    res.status(404);
    res.send('hello form express Home page server');
   
})

app.get('/download',(req,res)=>{
    res.download('./info.txt');
     
})
app.get('/details',(req,res)=>{  //direct playing with object 
    res.json({
        name:"datenji",
        address:"jorpati",
        client_no: 4332
    });
     
})





app.listen(5000,()=>{
    console.log("server started at port 5000");
});


