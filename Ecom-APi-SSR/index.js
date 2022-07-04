const express = require('express');
const cors = require('cors');
const procductAPIRoutes = require('./routes/productapi.js')
const products = require('./data.json');
const hbs = require('hbs');


const app = express();

app.use("/static",express.static(__dirname+'/public'));
//it return index.html (default)

hbs.registerPartials(__dirname +'/views/partials');
// registring partial file located in partials dir.

app.use(cors());
// defining we are using view wngine
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    
    // res.render('index');   //to render directly index.html present in the view.
    res.render('index',{products});   
    // product is sent as object having same name of key value pairs 


});


// app.use(procductAPIRoutes);
// can be use as common, 
// -----------------------

app.use('/api/products',procductAPIRoutes);

app.listen(5555,()=>{
console.log("port 5555----> SSR  is ready");
});