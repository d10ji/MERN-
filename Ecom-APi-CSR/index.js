const express = require('express');
const cors = require('cors');
const procductAPIRoutes = require('./routes/productapi.js')

const app = express();
app.use(express.static(__dirname+'/public'));
//it return index.html (default)
app.use(cors());


app.get('/',(req,res)=>{
    res.send("helo hello hello ")
});


// app.use(procductAPIRoutes);
// can be use as common, 
// -----------------------

app.use('/api/products',procductAPIRoutes);

app.listen(4444,()=>{
console.log("port 4444 is ready");
});