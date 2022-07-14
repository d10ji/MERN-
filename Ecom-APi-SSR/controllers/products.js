// .....> Databse (connection ) ------> models (Prodcuct) (CapitalName) --------> controllers (product)


// const products = require('../data.json');
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

// const getAllProduct = (req,res)=>{
//     console.log(req.query);
//     const {category} = req.query;
//     if (category) {
//         const selectedProduct = products.filter((product)=>{
//         return product.category == category;
//         });
//         res.json(selectedProduct);
//         return
//     }
// res.json(products);
// }

// ----------------------using database -------------->
const getAllProduct = async (req,res)=>{
    const {category} = req.query;
    console.log(category)
    if (category) {
                const selectedProduct = await ProductModel.find({category})
                res.json(selectedProduct);
                return
            }
    
    const products = await ProductModel.find();
    res.json(products);
}





 // app.get('/:p_id',(req,res)=>{
    
const getOneProdutct = async (req,res)=>{
    console.log(req.params);
    const {p_id} = req.params;

    console.log(p_id);
    // const selectedProduct = products.filter((product)=>{
    //     return product.id == Number(p_id)
    // });
    const selectedProduct = await ProductModel.findById(p_id)
    res.json(selectedProduct);
    return;
}


const updateProduct = async (req, res)=>{
    const {p_id} = req.params;
    const updatedProduct = await ProductModel.findByIdAndUpdate(p_id , req.body, {new:true} );  // new:true}----> for return newly updated value    //to update product
    res.send(updatedProduct);
}

const repalceProduct = async (req, res)=>{
    const {p_id} = req.params;
    const updatedProduct = await ProductModel.findOneAndReplace(p_id, req.body, {new:true});
    //to update product
    res.send(updatedProduct);
    return
}





const deleteProduct = async (req, res)=>{
    const {p_id} = req.params;
    const deletedProduct = await ProductModel.findByIdAndRemove(p_id);
    res.json(deletedProduct);  
    return;
}

module.exports={getOneProdutct,getAllProduct,createProduct, updateProduct , deleteProduct,repalceProduct}