const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
const { getOneProdutct, getAllProduct,createProduct } = require('../controllers/products');



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

router.get('/',getAllProduct);
router.get('/:p_id',getOneProdutct);

  
// / => /api/products

// router.post('/',(req,res)=>{
//     console.log(req.body);
//     fs.appendFile('./data.json',JSON.stringify(req.body), (err)=>{
//         if (err){
//             console.log("error occured");
//             console.log(err);
//         }
//     })
//     res.send("Data ayo hai") 
//  });

router.post('/', createProduct);

module.exports=router;

