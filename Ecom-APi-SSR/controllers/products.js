// .....> Databse (connection ) ------> models (Prodcuct) (CapitalName) --------> controllers (product)


const products = require('../data.json');
const ProductModel = require('../models/product')

const createProduct = async (req, res) =>{
    try{
        let product = new ProductModel(req.body);
        await product.save();
        res.json({product});
    } catch(err){
        req.send("Error Occured ");
    }
}


const getAllProduct = (req,res)=>{
    console.log(req.query);
    const {category} = req.query;
    if (category) {
        const selectedProduct = products.filter((product)=>{
        return product.category == category;
        });
        res.json(selectedProduct);
        return
    }
res.json(products);
}


 // app.get('/:p_id',(req,res)=>{
    
const getOneProdutct = (req,res)=>{
    console.log(req.params);
    const {p_id} = req.params;
    console.log(p_id);
    const selectedProduct = products.filter((product)=>{
        return product.id == Number(p_id)
    });
    
    res.json(selectedProduct);
}

module.exports={getOneProdutct,getAllProduct,createProduct}