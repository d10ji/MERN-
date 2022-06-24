const fs = require('fs');
const express = require('express');
const app = express();
const quotesRouter = require('./routes/quotes')
const cors = require('cors')

app.use(cors());


const data = fs.readFileSync("quotes.json", "utf-8", (err)=> {
    if (err){
        console.log("sorry error occured");
        console.log(err);
    }
});
const object_data = JSON.parse(data);

app.use(quotesRouter);

// lsiting using app (express)
app.listen(8000, ()=>
console.log("Express - Server satarted at 8000")
);

