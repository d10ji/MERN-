const products = require('../data.json');


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

module.exports={getOneProdutct,getAllProduct}