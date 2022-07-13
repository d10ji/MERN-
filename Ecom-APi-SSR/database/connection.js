// .....> Databse (connection ) ------> models (Prodcuct) (CapitalName) --------> controllers (product)



// ------------------------ importing mongoose
const mongoose = require('mongoose');



//Databse connection 

const connectDatabase = async () =>{
    try{
    await mongoose.connect('mongodb://localhost:27017/ecom');
    console.log("Databse connected sucessfully");
    } catch(err){
        console.log(`error occured ${err}`);
    }
}

module.exports = connectDatabase;