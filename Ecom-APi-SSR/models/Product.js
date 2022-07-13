// .....> Databse (connection ) ------> models (Prodcuct) (CapitalName) --------> controllers (product)

const { mongoose } = require("mongoose");

// models name is alwys sigular 



const ratingSchema = new mongoose.Schema({
    rate: Number,
    count : Number
})

const productSchema = new mongoose.Schema({
    title : String,
    price : Number,
    description : String,
    image : String,
    // rating : {
    //     rate : Number, 
    //     count : Number
    // }   
    rating : ratingSchema
})


// implementing schema to the model ------------------------------------->

const ProductModel = new mongoose.model('Product', productSchema)

// Product always make --> Products in Databse 

// ----------------------------> exproting
module.exports = ProductModel;
