const express = require('express');
const cors = require('cors');
const procductAPIRoutes = require('./routes/productapi.js')
const products = require('./data.json');
const hbs = require('hbs');
const app = express();
const connectDatabase = require('./database/connection');

//connect Databse
connectDatabase();

app.use("/static",express.static(__dirname+'/public'));
//it return index.html (default)

hbs.registerPartials(__dirname +'/views/partials');
// registring partial file located in partials dir.

app.use(cors());

app.use(express.json());
// express.json is middleware that process data form req.body then pass it



// defining we are using view wngine
app.set('view engine','hbs');



// app.get('/',(req,res)=>{

    
//     // res.render('index');   //to render directly index.html present in the view.
//     res.render('index',{products});   
//     // product is sent as object having same name of key value pairs 
// });

// ------using middleware-------------------?
// app.get('/',(req,res,next)=>{
//     console.log("passing middleware");
//     next(); //without this browser is waiting (stuck)  
// });

// -------- only for particular / 
const loggger1 = (req,res,next)=>{
    console.log("passing 1st middleware");
    next();
};
const loggger2 = (req,res,next)=>{
    console.log("passing 2nd middleware");
    next();
};

app.get('/', [loggger1,loggger2],(req,res)=> res.render('index',{products}) )



// app.use(procductAPIRoutes);
// can be use as common, 
// -----------------------

app.use('/api/products',procductAPIRoutes);



app.listen(5005,()=>{
console.log("port 5005----> SSR  is ready");
});