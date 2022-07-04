const express = require('express');
const router = express.Router();
const products = require('../data.json');


// app.get('/api/products/',(req,res)=>{
//     res.json(products);
    
// });

// : colon in URL denotes variable.
// multiple variables can be define --> /:p_id/:img
// requesting from URL /324/orange
// output when req.params --> { p_id: '324', img: 'orange' }
// Destructing object ---------------> const {} = {id:data}-->req.params 
// ---------------------mendetory field. --------------------->
// routs parameter
// ------------------------------------------------------------------>
//  // app.get('/:p_id',(req,res)=>{
// app.get('/api/products/:p_id',(req,res)=>{
//     console.log(req.params);
//     const {p_id} = req.params;
//     console.log(p_id);
//     const selectedProduct = products.filter((product)=>{
//         return product.id == Number(p_id)
//     });
    
//     res.json(selectedProduct);
// });

// ---------------can have additional data field. --->
// query string optional

router.get('/',(req,res)=>{
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
});

module.exports=router;